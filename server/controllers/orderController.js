import orderModel from '../models/orderModel.js';
import productModel from '../models/productModel.js';
import userModel from '../models/userModel.js';
import stripe from 'stripe'
const currency = "usd"
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
        const totalAmount = subtotal + taxAmount + deliveryCharges;
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

export const placeOrderStripe = async (req,res)=>{
         try {
        const {items,address} = req.body;  
        const userId = req.userId;
        const {origin} = req.headers

        if(items.length === 0){
            return res.json({success:false, message: "please add product first"});
        }
        let productData = []
        let subtotal = await items.reduce(async(acc,item)=>{
              const product = await productModel.findById(item.product);
               productData.push({
                 name: product.name,
                 price: product.offerPrice,
                 quantity: item.quantity
               })
              return (await acc) + product.offerPrice * item.quantity;
        },0)

        const taxAmount = subtotal * taxPercentage
        const totalAmount = subtotal + taxAmount + deliveryCharges;

        // save order before payment

        const order = await orderModel.create({
             userId,
             items,
             amount: totalAmount,
             address,
             paymentMethod: "Stripe"
        });
        const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
        let line_items = productData.map((item)=>{
               return {
                   price_data: {
                     currency: currency,
                     product_data: {name: item.name},
                     unit_amount: Math.floor(item.price * 100 * 277) 
                   },
                   quantity: 1
               }
        })
          // add tax as separate line items
          line_items.push({
            price_data: {
                currency: currency,
                 product_data: {name: "Tax (2%)"},
                 unit_amount: Math.floor(taxAmount * 100 * 277) 

            },
            quantity : 1
          })
          // add delivery charges 
             
          line_items.push({
            price_data: {
                currency: currency,
                 product_data: {name: "Delivery Charges"},
                 unit_amount: Math.floor(deliveryCharges * 100 * 277) 

            },
            quantity : 1
          })
          const session = await stripeInstance.checkout.sessions.create({
             line_items,
             mode: "payment",
             success_url: `${origin}/loader?next=my-orders`,
             cancel_url: `${origin}/cart`,
             metadata: {
                orderId: order._id.toString(),
                userId,
             }
          })
         
        return res.json({success: true, url: session.url})
    } catch (error) {
        console.log(error);
         return res.json({success: false, message: error.message})
    }
}

// stripe webhooks for verifying payment through stripe

export const stripeWebhooks = async (req,res)=>{
      const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
      const signature = req.headers['stripe-signature']
      let event
      try {
         event = stripeInstance.webhooks.constructEvent(
             req.body,
             signature,
             process.env.STRIPE_WEBHOOK_SECRET
         )
      } catch (error) {
         res.status(400).send(`Webhook Error: ${error.message}`)
      }

      switch(event.type){
        case 'payment_intent.succeeded':
            {
                const paymentIntent = event.data.object
                const paymentIntentId = paymentIntent.id

                // getting session meta data
                 const session = await stripeInstance.checkout.sessions.list({
                    payment_intent : paymentIntentId
                 })

                 const {orderId,userId} = session.data[0].metadata;
                 // mark order as paid
                 await orderModel.findByIdAndUpdate(orderId,{isPaid: true});
                  // clear user cart

                  await userModel.findByIdAndUpdate(userId, {cartData: {}});
                  break;
            }
            case 'payment_intent.payment_failed' : {
                   const paymentIntent = event.data.object
                const paymentIntentId = paymentIntent.id
                  const session = await stripeInstance.checkout.sessions.list({
                    payment_intent : paymentIntentId
                 })
                 const {orderId,userId} = session.data[0].metadata
                 await orderModel.findByIdAndDelete(orderId)
                 break;

            }
            default: 
            console.error('unhandled event type ' +event.type);
            break;
      }

      res.json({received: true})
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