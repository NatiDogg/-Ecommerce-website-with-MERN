import userModel from "../models/userModel.js";
import validator from 'validator'
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

const cookieOptions = {
     httpOnly: true,
     secure: process.env.APP_ENV === "production" ,
     sameSite: process.env.APP_ENV === "production" ? "none" : "strict"
}


const userRegister = async (req,res)=>{
     try {
         const {name,email,password} = req.body;
          const exists = await userModel.findOne({email})
          if(exists){
             return res.json({success:false, message: "user already exists"});
          }
          if(!validator.isEmail(email)){
               return res.json({
                 success:false,
                 message: "please enter valid email"
               })
          }
          if(password.length < 8){
            return res.json({
                success: false,
                message: "please enter a strong password"
            })

          }
          const hashedPassword = await bcrypt.hash(password,10);
          const newUser = new userModel({
             name,
             email,
             password:hashedPassword
          });
          const user = await newUser.save()
          const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn: "7d"})
          res.cookie("token",token,{
             ...cookieOptions,
             maxAge: 7 * 24 * 60* 60*1000 //cokkie expiration time
          });
          return res.json({
            sucess: true,
            user: {email:user.email , name: user.name}
          })
     } catch (error) {
         console.log(error.message)
         res.json({sucess:true, message: error.message})
     }
}
