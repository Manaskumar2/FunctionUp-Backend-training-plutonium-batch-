const productModel = require("../models/productModel")


const productlist =async function(req,res){
const data =req.body
const productData= await productModel.create(data)
res.send({msg:productData ,status:true})
}
module.exports.productlist=productlist