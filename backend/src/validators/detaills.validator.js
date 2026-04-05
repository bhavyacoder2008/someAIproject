import { body } from "express-validator"

export const detailsOneValidator = [
    body("name").notEmpty().withMessage("This field is required").isLength({min: 3 , max: 15}).withMessage("Lenght should be between 3 and 15")
    ,
    body("email").trim().notEmpty().withMessage("This field is required").isEmail().withMessage("Invalid E-Mail")
    ,
    body('phone')
    .matches(/^[6-9]\d{9}$/)
    . withMessage('Invalid mobile number')
    ,
    body("portfolio").optional().isURL().withMessage("Invalid URL")
]

export const detailsTwoValidator = [
    body
]