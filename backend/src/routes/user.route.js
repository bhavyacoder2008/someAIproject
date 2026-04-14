import express from "express";
import validate from "../middlewares/validate.js";
import User from "../models/user.model.js";
import {detailsOneValidator} from "../validators/detaills.validator.js"

const router = express.Router();




router.post("/details1" ,authmiddleware ,detailsOneValidator,validate, async(req,res) => {
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
