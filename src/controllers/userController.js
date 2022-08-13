const UserModel= require("../models/userModel")
const bookSchema =require("../bookschema/bookschem")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const createNewBook= async function(req,res){
    let newBook=req.body
    let newBookCreate= await bookSchema.create(newBook)
    res.send({msg:newBookCreate})
}
const listOfAllBook =async function(req,res){
    let allBooks =await bookSchema.find()
    res.send({msg: allBooks})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createNewBook= createNewBook
module.exports.listOfAllBook=listOfAllBook