import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,

    email: String,

    password: String,

    isVerified: {
        type: Boolean,
        default: false
    },

    password: String,

    otp: String,

    otpExpiry: Date
})

const userModel = mongoose.model("user" , userSchema);

export default userModel;