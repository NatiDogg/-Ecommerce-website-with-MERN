import jwt from "jsonwebtoken";


const cookieOptions = {
     httpOnly: true,
     secure: process.env.APP_ENV === "production" ,
     sameSite: process.env.APP_ENV === "production" ? "none" : "strict"
}
// admin Login Route = /api/admin/login


export const adminLogIn = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS){
         const token = jwt.sign({email},process.env.JWT_SECRET, {expiresIn: "7d"})
         res.cookie("adminToken",token,{
             ...cookieOptions,
             maxAge: 7 * 24 * 60* 60*1000 //cokkie expiration time
          });
          return res.json({
            success: true,
            message: "Admin Logged in"
          })
         }
         else{
             return res.json({
            success: false,
            message: "Invalid Credentials"
          })
         }
    }
     catch (error) {
        console.log(error.message)
         res.json({sucess:false, message: error.message})
    }
};

// check Auth = /api/admin/is-auth
export const isAdminAuth = async (req,res)=>{
     try {
        
        return res.json({success:true})
     } catch (error) {
        console.log(error.message)
         res.json({sucess:false, message: error.message})
     }
}

// logout admin = /api/admin/logout

export const adminLogOut = async (req,res)=>{
    try {
        res.clearCookie("adminToken",cookieOptions);
        return res.json({success:true,message:"sucessfully Logged out"})
    } catch (error) {
        console.log(error.message)
         res.json({sucess:false, message: error.message})
    }
}

