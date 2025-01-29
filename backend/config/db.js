import mongoose from "mongoose";

export const dbConnectDB = async ()=>{
    try{
const conn = await mongoose.connect(process.env.CONNECTION_STRING)
console.log(`mongoDB Connected: ${conn.connection.host}`)
    }
    catch(err){
        console.log(`error is ${err}`)
    }
}