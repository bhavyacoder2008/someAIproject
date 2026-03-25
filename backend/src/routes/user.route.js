import express from "express";
import { signupValidator } from "../validators/auth.validator.js";
import bcrypt from "bcryptjs";
import validate from "../middlewares/validate.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup" , signupValidator, validate, async (req,res) => {
    const {email , username , password} = req.body;//iss way mein hum email username and password naam ki key ko access kar sakeingein

    try{
        const hashedPass = await bcrypt.hash(password,8);
        const otp = Math.floor(Math.random()*9000 + 1000).toString()
        const newUser = await User.create({
            email,username,otp,
            password: hashedPass,
            otpExpiry: Date.now() + 5*60*1000
        })
        res.status(201).json({
            message: "New user created successfully",
            user: newUser
        })
    }catch(err){
        res.json({error: err})
    }

})

router.post("/otpVerification" , async (req,res) => {
    const {otp,email} = req.body;
    const user = await User.findOne({
        email: email
    })
    if(!user){
        return res.status(400).json({
            message: "user with this email not found"
        })
    }
    const actualOTP = user.otp;
    if(String(actualOTP) === String(otp)){
        user.otp = undefined;
        user.isVerified = true;
        user.otpExpiry = undefined;
        await user.save();
        const token = jwt.sign({
            id: user._id
        },process.env.JWT_SECRET,{expiresIn: "1d"})
        res.cookie(token)
        return res.status(201).json({
            message: "User verified"
        })
    }

    res.status(409).json({
        message : "Invalid OTP..."
    })

})

router.post("/login" , validate , async (req,res) => {
    
})

export default router;