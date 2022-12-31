const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Controller = {
    registerUser: async(req, res) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASSWORD_SC
            ).toString(),
        });
        try {
            const saveUser = await newUser.save();
            res.status(201).json(saveUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    loginUser: async(req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });

            if (!user) {
                res.status(401).json("Wrong");
                return;
            }
            const HashPass = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASSWORD_SC
            );

            const pass = HashPass.toString(CryptoJS.enc.Utf8);

            if (pass !== req.body.password) {
                res.status(401).json("wrong");
                return;
            }
            const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_SC, { expiresIn: "3d" }
            );

            const { password, ...others } = user._doc;

            res.status(200).json({...others, accessToken });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = Controller;