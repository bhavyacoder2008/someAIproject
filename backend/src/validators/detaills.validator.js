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
    body("linkedIn").optional().isURL().withMessage("Invalid URL"),
    body("github").optional().isURL().withMessage("Invalid URL"),
    body("leetcode").optional().isURL().withMessage("Invalid URL"),
    body("codeforces").optional().isURL().withMessage("Invalid URL"),
    body("hackerrank").optional().isURL().withMessage("Invalid URL")
]

export const detailsThreeValidator = [
    body("project1URL").notEmpty().withMessage("This field is required").isURL().withMessage("Invalid URL"),
    body("project1Details").notEmpty().withMessage("This field is required"),
    body("project2URL").optional.isURL().withMessage("Invalid URL"),
    body("project2Details").optional(),
    body("project3URL").optional.isURL().withMessage("Invalid URL"),
    body("project3Details").optional(),
    body("project4URL").optional.isURL().withMessage("Invalid URL"),
    body("project4Details").optional(),
    body("project5URL").optional.isURL().withMessage("Invalid URL"),
    body("project5Details").optional(),
]

export const detailsFourValidator = [
]