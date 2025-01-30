import Book from "../models/book.models.js";
import mongoose from "mongoose";

//post books

export const createBooks = async(req,res)=>{
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
   
   }

 // get all books

export const getBooks = async (req,res)=>{
      try {
         const books = await Book.find({});
         res.status(200).json({success:true,data:books});
         
      } catch (error) {
         console.log("error getting books:",error.message)
        res.status(500).json({success:false,message:"server error"}) 
      }
   }

 // update Book

export const update =async (req,res)=>{
      
    const {id} = req.params;
    const book =req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false,message:"invalid book id"});
    }
try {
const updatedBook =  await Book.findByIdAndUpdate(id,book,{new:true});
res.status(200).json({success:true,data:updatedBook})
} catch (error) {
 res.status(500).json({success:false,message:"server error"})
}
}

   // getting book by id

   export const updateBook = async (req,res)=>{
    const {id} =req.params
         if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success:false,message:"invalid book id"});
            }
         try {
            const {id} = req.params
            const book = await Book.findById(id);
            res.status(200).json({success:true,data:book});
            
         } catch (error) {
           res.status(500).json({success:false,message:"server error"}) 
         }
      }

      
   // delete book

   export const deleteBook = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({success:false,message:"invalid book id"});
       }
    try {
       await Book.findByIdAndDelete(id)
       res.status(200).json({success:true,message:"book deleted successufly !!!"});
    } catch (error) {
       console.log("error deleding a book",error.message);
       res.status(500).json({success:false,message:"server error"});
    }
 }