import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import router from "./routes/book.route.js";
dotenv.config();

const app =express();
const port=process.env.PORT || 4000;

app.use(express.json());
app.use("/api/books",router);


app.listen(process.env.PORT, async ()=>{
   await connectDB()
    console.log(`server started at http://localhost:${port}`);
})