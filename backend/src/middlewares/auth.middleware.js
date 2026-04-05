import jwt from "jsonwebtoken"


const authmiddleware = (req,res,next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(403).json({
            message: "Forbidden"
        })
    }
    const decoded = jwt.verify(token , process.env.JWT_SECRET)
    req.userID = decoded.id;

    next()
}

export default authmiddleware;