const mongoose = require("mongoose")
const ObjectId=mongoose.Types.ObjectId
const orderSchema= new mongoose.Schema({
    userId:{ 
        type:ObjectId,
        ref :"user"

    },
    productId:{
        type:ObjectId,
        ref:"Productlist"
    },
    amount:Number,
    isFreeAppUser:Boolean,
},{timestamps:true})
module.exports