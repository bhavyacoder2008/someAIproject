import express from "express";
import validate from "../middlewares/validate.js";
import User from "../models/user.model.js";
import {detailsOneValidator} from "../validators/detaills.validator.js"

const router = express.Router();


router.post("/getOrCreateUser" , async (req,res) => {
  const userID = req.cookies.userID;
  if(!userID){
    const newUserID = Math.floor(Math.random()*100000 + Math.random()*10 + 9000);
    console.log(newUserID);
    const newUser = await User.create({userID: newUserID});
    res.cookie("userID" , newUserID , {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000
    })
    res.status(201).json({
      message: "New user created succesfully!",
      user: newUser
    })
  }else{
    const existingUser = await User.findOne({userID: userID});
    if(!existingUser){
      return res.status(401).json({message: "User not found"});
    }
    res.status(200).json({
      message: "User found",
      user: existingUser
    })
  }
})


router.post("/details1"  ,detailsOneValidator,validate, async(req,res) => {
  const {name , email , phone , portfolioSite} = req.body;
  try{
    const user = await User.findByIdAndUpdate(req.userID , {
    name: name,
    resumeEmail: email,
    phone: phone,
    portfolio: portfolioSite ? portfolioSite : undefined
  } , {new: true})
    res.status(201).json({message: user})
  }
  catch(err){
    res.status(400).json({message: err})
  }
} )


export default router;
