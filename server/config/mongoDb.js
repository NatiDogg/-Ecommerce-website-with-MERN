import mongoose from 'mongoose';
const connectDB = async ()=>{
     try{
        await mongoose.connect(`${process.env.MONGO_URI}/natishopping`);
        console.log("db connected successfully!");
         
     }
     catch(error){
       console.log("database connection failed:"+error.message);
       
     }
}

export default connectDB;