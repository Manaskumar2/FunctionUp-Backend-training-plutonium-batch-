const user1Model=require("../models/usermodel1")
const jwt = require("jsonwebtoken")


const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
 try{      
    
 let token = req.headers["x-auth-token"]
    if (!token) { return res.status(404).send("Header is missing") }
    let decodedToken = jwt.verify(token, "hi there")
    if (!decodedToken) { return res.status(404).send("Not a valid token") }
    req.decodedToken=decodedToken
    next()
}
catch(error){
res.status(500).send({error:error.message})
}

}


const authorise = async function(req, res, next) {

    // comapre the logged in user's id and the id in request
try{
let userId= req.params.userId
 let check = await user1Model.findById(userId)
    if (!check) { return res.status(404).send("No such user exist") }
let ModifiedUserId=req.decodedToken.userID
if(userId !== ModifiedUserId) return res.status(403).send({status:false,msg:"this is not s valid user"})


    next()
}

catch(err){

res.status(500).send({errer:err.message})

}
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise