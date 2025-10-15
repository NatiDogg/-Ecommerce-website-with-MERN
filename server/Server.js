import 'dotenv/config'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/mongoDb.js';
import express from "express"
import userRouter from './routes/userRoute.js';
import adminRouter from './routes/adminRoute.js';
import connectCloudinary from './config/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';




const app = express();
const port = process.env.PORT || 4000; 

await connectDB() // establish connection to the database
await connectCloudinary() // set up cloudinary for image storage

// allowed multiple origins
const allowedOrigins = ["http://localhost:5173"]

// middleware setup

app.use(express.json()) // enable json request body parsing
app.use(cookieParser()) // cookie-parser middleware to parse HTTP request cookies
app.use(cors({
    origin: allowedOrigins,
    credentials: true

}))

//define API routes
app.use('/api/user',userRouter) 
app.use('/api/admin',adminRouter) // routes for user-related operations
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);


// root endpoint to check API status
app.get('/',(req,res)=>{
     res.send("API sucessfully connected");
})

// start the server

app.listen(port,()=>{
     console.log("server is running at http://localhost:"+port);
})