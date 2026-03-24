import { body } from "express-validator";
import User from "../models/user.model.js"

export const signupValidator = [
    body("username").trim().notEmpty().withMessage("Username is required !!").isLength({max: 10}).withMessage("Username must not exceed 10 characters")
    .isLength({min: 3}).withMessage("Username must be greater than 3 characters")
    .custom(async (val) => {
        const username = await User.findOne({
            username : val
        })
    }).withMessage("Username already exists...")
    ,
    body("email").trim().notEmpty().withMessage("E-mail is required...").isEmail().withMessage("Invalid E-mail")
    .custom(async (val) => {
        const isEmail = await User.findOne({
            email: val
        })
    }).withMessage("E-mail already exists"),
    body("password").trim().notEmpty().withMessage("Password is required...").isLength({min: 5}).withMessage("password must be atleast 5 characters long")
]