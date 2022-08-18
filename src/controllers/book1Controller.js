const BookDetails =require("../models/bookModel1")
const authorModel=require("../models/authorModel")
const { updateBooks } = require("./bookController")

const Books= async function (req, res) {
    let data= req.body
    let savedData= await BookDetails.create(data)
    res.send({msg: savedData})
}
const authorBooks =async function (req,res){
    let  author=req.body
    let authordetails= await authorModel.find(author)
   let authorId= authordetails[0].author_id
   console.log(authorId)
   let bookData= await BookDetails.find({author_id:authorId})
    res.send({msg:bookData})
    
}
const update =async function(req,res){
    let data =req.body
    let updatePrice =await BookDetails.findOneAndUpdate(
        {name:"Two states"},
        {$set :data},{new:true}
    )
    let result =updatePrice.author_id
    let autherID = await authorModel.find({author_id:result}).select({author_name:1,_id:0})
    res.send({msg:autherID})
}

const allauthorNAme = async function(req,res){
    let data=await BookDetails.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let authorDetail = await authorModel.find()
   // console.log(authorDetail)
    let authorName = data.map(x=>authorDetail.find(y=>y.author_id===x.author_id).author_name)

console.log(authorName);

    res.send({msg:authorName})
}
module.exports.Books=Books
module.exports.authorBooks=authorBooks
module.exports.update = update
module.exports.allauthorNAme=allauthorNAme