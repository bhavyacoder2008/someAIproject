import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_SECRET)

const genAIResponse = async (message) => {
    const model = genAI.getGenerativeModel({model : "gemini-2.5-flash"});
    const result = await model.generateContent(message);
    const response = await result.response;

    return await response.text();
}

export default genAIResponse;