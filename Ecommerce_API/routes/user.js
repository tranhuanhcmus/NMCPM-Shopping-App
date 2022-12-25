const { verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const User = require("../models/User");

const router = require("express").Router();
router.put("/:id",verifyTokenAndAuthorization,async (req,res)=>{
    if(req.body.password){
        req.body.password= CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SC).toString();
    }
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new: true});
        res.status(200).json(updateUser);
    }catch(err){
        res.status(500).json(err);
    }
});

//delete
router.delete("/:id",verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await User.findByIdDelete(req.params.id);
        res.status(200).json("user has been delete")
    }catch(err){
        res.status(500).json(err)
    }
});

//get
router.get("/find/:id",verifyTokenAndAdmin, async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err)
    }
});
module.exports = router;