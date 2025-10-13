import 'dotenv/config'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/mongoDb.js';
import express from "express"




const app = express();
const port = process.env.PORT || 4000; 

await connectDB() // establish connection to the database

// allowed multiple origins
const allowedOrigins = [" http://localhost:5173"]

// middleware setup

app.use(express.json()) // enable json request body parsing
app.use(cookieParser()) // cookie-parser middleware to parse HTTP request cookies
app.use(cors({
    origin: allowedOrigins,
    credentials: true

}))

// root endpoint to check API status
app.get('/',(req,res)=>{
     res.send("API sucessfully connected");
})

// start the server

app.listen(port,()=>{
     console.log("server is running at http://localhost:"+port);
})