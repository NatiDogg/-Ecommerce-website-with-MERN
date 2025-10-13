import express from 'express';
import { userRegister,userLogin,userLogOut,isAuth } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js'

const userRouter = express.Router();
userRouter.post('/register',userRegister)
userRouter.post('/login',userLogin)
userRouter.post('/logout',userLogOut)
userRouter.get('/is-auth',authUser, isAuth)

export default userRouter;