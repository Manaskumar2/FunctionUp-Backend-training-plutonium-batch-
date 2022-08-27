const orderModel = require("../models/orderSchema")
const userModel = require("../models/createUserModel")
const productModel = require("../models/productModel")
const moment = require("moment")


const Orderlist= async (req,res)=>{


    let FreeAppUser=req.headers.isfreeappuser
    let Order = req.body
    let user = Order.userId
     let product = Order.productId

    let findUser = await userModel.findById(user)
    let userBalance=findUser.balance

    let findProductId = await productModel.findById(product)

    if (!findProductId || !findUser) {
        return res.send({ msg: "userId Or ProductId is invalid"})
    }


 if(FreeAppUser =="false"){
    if(userBalance>=findProductId.price){
        let createOrder= await orderModel.create(Order)
        let updatePrice =await userModel.updateOne({_id:findUser},{$inc:{balance: -Order.amount}})
        let newUpdate = await userModel.updateOne({_id:findUser},{$set:{isFreeAppUser:FreeAppUser}})
        return res.send({msg:createOrder})
    }
    else if(userBalance<=Order.amount){
        return res.send({msg:"Insufficient amount "})
    }


    }
    if(FreeAppUser=="true"){
        let today =moment().format('YYYY-MM-DD')
        Order['date']=today
        let newOrder=await orderModel.create(Order)
        res.send({msg:newOrder})
    }
}


// const Orderlist = async (req, res)=> {
//     let userId = req.body.userId
//     let productId = req.body.productId

//     let uniqueUser = await userModel.findById(userId)
//     let uniqueProduct = await productModel.findById(productId)
//     let freeuser = req.headers.isfreeappuser
//     if (!uniqueUser || !uniqueProduct) {
//         res.send({ msg: "either of the user or product not present" })
//     }

//     else if (freeuser === "true") {
//         req.body["amount"] = 0
//         req.body["isFreeAppUser"] = true
//         Order = await orderModel.create(req.body)
//         res.send({ msg: Order })
//     } else if (freeuser == "false") {
//         let productPrice = await productModel.findById(productId).select({ price: 1, _id: 0 })
//         let userPrice = await userModel.findById(userId).select({ balance: 1, _id: 0 })
//         let finalPrice = userPrice.balance - productPrice.price
//         let updateUserPrice = await userModel.findByIdAndUpdate(userId, { balance: finalPrice })
//         req.body["amount"] = productPrice.price
//         req.body["isFreeAppUser"] = false
//         Order = await orderModel.create(req.body)
//         res.send({ msg: Order })

//     }


// }



module.exports.Orderlist = Orderlist