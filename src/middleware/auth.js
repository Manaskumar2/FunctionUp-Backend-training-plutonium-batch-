const user1Model=require("../models/usermodel1")
const jwt = require("jsonwebtoken")


const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token

 let token = req.headers["x-auth-token"]
    if (!token) { return res.send("Header is missing") }
    let decodedToken = jwt.verify(token, "hi there")
    if (!decodedToken) { return res.send("Not a valid token") }
    req.decodedToken=decodedToken
    next()
}
const authorise = async function(req, res, next) {
    // comapre the logged in user's id and the id in request
let userId= req.params.userId
 let check = await user1Model.findById(userId)
    if (!check) { return res.send("No such user exist") }
let ModifiedUserId=req.decodedToken.userID
if(userId !== ModifiedUserId) return res.send({status:false,msg:"this is not s valid user"})


    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise