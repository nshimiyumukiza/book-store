import mongoose from "mongoose";

const booksSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    cover:{
        type:String,
        required:true
    }
},{timestamps:true})

const Book = mongoose.model("Book",booksSchema)
export default Book