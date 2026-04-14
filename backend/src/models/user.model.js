import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    userID: {
        type: Number,
        default: undefined
    },

    resumeEmail: String,

    name: String,

    portfolio: String,

    phone: String,

})

const userModel = mongoose.model("user" , userSchema);

export default userModel;