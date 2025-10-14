import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
     {
        
        

         
        
     },{timestamps:true}
)

const orderModel = mongoose.models.order || mongoose.model('order',orderSchema);

export default orderModel;