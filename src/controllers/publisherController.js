const Publisher=require("../models/publisherModel")

const publisher= async function(req,res)
{
    const data =req.body
    const newStore = await Publisher.create(data)
    res.send({msg:newStore})
}
const getPublisher = async function(req,res){
    let publisherdetails= await Publisher.find()
    res.send({msg:publisherdetails})
}
module.exports.publisher=publisher
module.exports.getPublisher=getPublisher;
