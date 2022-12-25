const User = require("../models/User");
const CryptoJS = require("crypto-js")
const router = require("express").Router();
const jwt = require("jsonwebtoken");
//register send information
router.post("/register",async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SC).toString(),

    });
    try {
        const saveUser = await newUser.save();
        res.status(201).json(saveUser); 
    }catch(err){
        res.status(500).json(err);
    }
});
router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong");
        const HashPass = CryptoJS.AES.decrypt(user.password,process.env.PASSWORD_SC);
        const pass = HashPass.toString(CryptoJS.enc.Utf8);
        pass !==req.body.password && res.status(401).json("wrong");
        const accesstoken = jwt.sign({
            id:user._id,
            isAdmind: user.isAdmin,
        },process.env.JWT_SC,{expiresIn:"3d"})
        const {password,...others} = user._doc;
        res.status(200).json({...others, accesstoken}); 
    }catch(err){
        res.status(500).json(err);
    } 
})
module.exports = router;