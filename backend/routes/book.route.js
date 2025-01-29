import express from "express"
import Book from "../models/book.models.js";

const router = express.Router();
router.post("/",async(req,res)=>{
    const book = req.body
    if(!book.title || !book.author ||!book.price || !book.cover){
       return res.status(400).json({success:false,message:"please provid all field"})
    }
   const newBook = new Book(book);
   try{
     await newBook.save();
     res.status(201).json({success:true,data: newBook})
   }
   catch(error){
   console.log("error in creating book: ",error.message)
   res.status(500).json({success:false,message:"server error"});
   }
   
   })

export default router