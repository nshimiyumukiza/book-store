import express from "express";
import dotenv from "dotenv";
import { dbConnectDB } from "./config/db.js";
import bookRouter from "./routes/book.route.js"

dotenv.config()


const app = express() ;
const port = process.env.PORT || 4500;

app.use(express.json())
app.use("/api/books",bookRouter)


app.listen(port,async ()=>{
   await dbConnectDB()
    console.log(`server is running on port ${port}`);
})
