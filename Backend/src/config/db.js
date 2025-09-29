import mongoose from "mongoose";


export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.Mongo_Url);
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("MongoDB connection failed",err);
        process.exit(1);//exit the process with failure
    }
}