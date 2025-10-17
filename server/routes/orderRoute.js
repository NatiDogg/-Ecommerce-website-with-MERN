import express from 'express'
import authAdmin from '../middlewares/authAdmin.js'
import authUser from '../middlewares/authUser.js'
 import { allOrders, placeOrderCOD, placeOrderChapa, updateStatus, userOrders } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/list',authAdmin,allOrders)
orderRouter.post('/status',authAdmin,updateStatus)
orderRouter.post('/cod',authUser,placeOrderCOD);
orderRouter.post('/chapa',authUser,placeOrderChapa);

orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter;