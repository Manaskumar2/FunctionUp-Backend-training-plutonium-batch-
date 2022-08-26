const orderModel=require("../models/orderSchema")

const mid1 =async function(req,res,next){
    const freeAppUser=req.header.isfreeappuser
    if(freeAppUser){
        next()
    }
    else{
        res.send({msg: "Header is require"})
    }
}
module.exports.mid1=mid1