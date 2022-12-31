const CryptoJS = require("crypto-js");

const User = require("../models/User");
const controller = {
    getUserbyId: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...others } = user._doc;
            res.status(200).json(others);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllUsers: async(req, res) => {
        try {
            const users = await User.find();

            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getStats: async(re, res) => {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

        try {
            const data = await User.aggregate([{
                    $match: {
                        createAt: { $gte: lastYear },
                    },
                },
                {
                    $project: {
                        month: { $month: "$createAt" },
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 },
                    },
                },
            ]);
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateUserbyId: async(req, res) => {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASSWORD_SC
            ).toString();
        }
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body,
                }, { new: true }
            );
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteUserbyId: async(req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("delete User Successful");
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = controller;