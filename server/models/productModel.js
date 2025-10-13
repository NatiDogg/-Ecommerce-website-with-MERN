import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
     {
        name: {type:String, required: true},
        description: {type:String, required: true},
        price: {type:Number, required: true},
        offerPrice: {type:Number, required: true},
        image: {type:Array, required: true},
        category: {type:String, requried: true},
        sizes: {type:Array, requried: true},
        popular: {type:Boolean},
        inStock: {type:Boolean, default: true}
        

         
        
     },{minimize:false}
)

const productModel = mongoose.models.product || mongoose.model('product',productSchema);

export default productModel;