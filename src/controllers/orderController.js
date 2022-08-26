const orderModel = require("../models/productModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const moment = require("moment")
const Orderlist = async function (req, res) {
    let isFreeAppUser=req.headers.isfreeappuser
    let Order = req.body
    // let user = Order.userId
    // let product = Order.productId

    let findUserId = await userModel.findById({_id :Order.userId})
    if(!findUserId){
        return res.send({msg:"userId is invalid"})
    }
    let findProductId = await productModel.findById({_id:Order.productId})

    if (!findProductId) {
        return res.send({ msg: "ProductId is invalid"})
    }

 if(isFreeAppUser =="false"){
    if(findUserId.balance>=Order.amount){
        let createOrder= await orderModel.create(Order)
        let updatePrice =await userModel.updateOne({_id:findUserId},{$inc:{balance:Order.amount}})
        return res.send({msg:createOrder})
    }
    else if(findUserId.balance<=Order.amount){
        return res.send({msg:"Insufficient amount "})
    }

        
    }
    if(isFreeAppUser=="true"){
        let today =moment().format('YYYY-MM-DD')
        Order['date']=today
        let newOrder=await orderModel.create(Order)
        res.send({msg:newOrder})
    }

 }

module.exports.Orderlist = Orderlist