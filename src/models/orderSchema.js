const mongoose = require("mongoose")
const ObjectId=mongoose.Types.ObjectId
const orderSchema= new mongoose.Schema({
    userId:{ 
        type:ObjectId,
        ref :"userdoc"

    },
    productId:{
        type:ObjectId,
        ref:"Productlist"
    },
    amount:Number,
    isFreeAppUser:Boolean,
    data:Number,
    
},{timestamps:true})
module.exports=mongoose.model("Order",orderSchema)