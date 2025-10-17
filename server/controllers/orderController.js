import orderModel from '../models/orderModel.js';
import productModel from '../models/productModel.js';
import userModel from '../models/userModel.js';
const currency = "birr"
const deliveryCharges = 10  // 10 dollars
const taxPercentage = 0.02 
export const placeOrderCOD = async (req,res)=>{
    try {
        const {items,address} = req.body;
        const userId = req.userId;

        if(items.length === 0){
            return res.json({success:false, message: "please add product first"});
        }
        let subtotal = await items.reduce(async(acc,item)=>{
              const product = await productModel.findById(item.product);
              return (await acc) + product.offerPrice * item.quantity;
        },0)

        const taxAmount = subtotal * taxPercentage
        const totalAmount = subtotal * taxAmount + deliveryCharges;
        await orderModel.create({
             userId,
             items,
             amount: totalAmount,
             address,
             paymentMethod: "COD"
        });
        await userModel.findByIdAndUpdate(userId, {cartData: {}})
        return res.json({success: true, message: "Order Placed"})
    } catch (error) {
        console.log(error);
         return res.json({success: false, message: error.message})
    }
}

export const placeOrderChapa = async (req,res)=>{
          try {
            
          } catch (error) {
            
          }
}

// all orders data for frontend by userId = /api/user/userorders

export const userOrders = async(req,res)=>{
    try {
        const userId = req.userId
        const orders = await orderModel.find({userId,$or:[{paymentMethod: "COD"},{isPaid: true}]}).populate("items.product").sort({createdAt: -1})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error);
         return res.json({success: false, message: error.message})
    }
}
//all orders data for admin panel = api/order/list
export const allOrders = async(req,res)=>{
     try {
         const orders = await orderModel.find({$or:[{paymentMethod: "COD"},{isPaid: true}]}).populate("items.product").sort({createdAt: -1})
           res.json({success: true, orders})

     } catch (error) {
        console.log(error);
         return res.json({success: false, message: error.message})
     }
}

// updating order status from admin panel = /api/order/status

export const updateStatus = async (req,res)=>{
     try {
        const {orderId,status} = req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
         res.json({success: true, message: "order status updated"})
     } catch (error) {
        console.log(error);
         return res.json({success: false, message: error.message})
     }
}