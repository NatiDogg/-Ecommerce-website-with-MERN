import express from 'express';
import { adminLogIn,adminLogOut,isAdminAuth } from '../controllers/adminController.js';
import authAdmin from '../middlewares/authAdmin.js';
const adminRouter = express.Router();
adminRouter.post('/login',adminLogIn)
adminRouter.post('/logout',adminLogOut)
adminRouter.get('/is-auth',authAdmin , isAdminAuth)

export default adminRouter;