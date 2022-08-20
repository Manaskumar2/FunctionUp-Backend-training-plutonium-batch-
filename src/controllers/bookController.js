const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherId=require("../models/publisherModel")
const { findOne } = require("../models/publisherModel")
const { default: mongoose } = require("mongoose")
const { publisher } = require("./publisherController")
const newPublisher=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book= req.body
    let newauthor=book.author
    let newpublisher=book.publisher
    
    let author=await authorModel.findOne()
    let publisherName= await publisherId.findOne()
    
    let newauhor=author._id
    let newpub = publisherName._id
    if(newauthor==newauhor && newpublisher==newpub){
    let bookCreated = await bookModel.create(book)
    
    res.send({msg:bookCreated})
    }
    else if(!newauthor && !newpublisher){
        return res.send({msg:"AUTHOR AND PUBLISHER DETAILS IS REQUIRED"})
    }
    else if (newauthor !==newauhor && newpublisher !==newpub)
    {
        return res.send({msg:"AUTHOR AND PUBLISHER ID IS NOT PRESENT"})

 
  }

}


const getBooksWithAuthorAndPUblisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate("publisher")
    res.send({data: specificBook})

}
const createBookAll  = async function(req,res){
    let books = req.body
    let bookCreated = await bookModel.create(books)
    res.send({data: bookCreated})
}
const UpdateValue = async function(req,res){
    const data = await newPublisher.find({"name":["Penguin","HarperCollins"]}).select({_id:1})
    const updateTrue=await bookModel.updateMany({publisher:data},{isHardCover:true},{new:true})
    console.log(updateTrue);
        const data1 = await authorModel.find({ratings:{$gt:3.5}}).select({_id:1})
        const update=await bookModel.updateMany({author:data1},{$inc:{price:+10}},{new:true})
 res.send({msg :update})
}
module.exports.createBookAll=createBookAll
module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorAndPUblisherDetails
module.exports.UpdateValue=UpdateValue
