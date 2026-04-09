import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/db/db.js";
import genAIResponse from "./src/services/AI.js";
import generatePDF from "./src/services/PDFGeneration.js";

// console.log(genAIResponse("Hello gemini"))


dotenv.config();
connectDB();

await generatePDF()

// console.log(await genAIResponse("Hello gemini"))

app.listen(3000 , () => {
    console.log("Server started at PORT 3000")
})