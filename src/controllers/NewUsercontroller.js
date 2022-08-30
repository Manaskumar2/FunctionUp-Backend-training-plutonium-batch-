const user1Model= require("../models/usermodel1")
const jwt= require("jsonwebtoken")






const createUser= async (req,res)=>{
    try {
       let  userDetails =req.body
        let usersData= await user1Model.create(userDetails)
    res.status(201).send({msg:usersData})
        
    } catch (error) {
       
        res.status(500).send({error:error.message})
        
    }
    
}
const loginUser = async  (req, res)=> {
    try{
    let { emailId } = req.body
    let { password } = req.body
    let userCheck = await user1Model.findOne({ emailId: emailId, password: password})
    if (!userCheck) { return res.status(404).send("Incorrect userID or password.") }

    let token = jwt.sign(
        {
            userID: userCheck._id.toString(),
            platform: "education"
        },
        "hi there"
    )
    res.status(200).send({ status: true, token: token })
    }
    catch(err){
        res.status(500).send({error:err.message})
    }
}
const userDetails = async (req,res)=>{
    try{
    const valid=req.params.userId
    const userDetail= await user1Model.findById(valid)



    res.status(200).send({msg:userDetail})
    }
    catch(err){
        res.status(500).send({error:err.message})
    }

}
const updateDetails = async (req, res)=> {
    try{
    let add = req.body
    let userId=req.params.userId
    let update = await user1Model.findByIdAndUpdate(userId, add, { new: true })
    res.status(201).send({msg:update})
    }
    catch(err){
        res.status(500).send({error:err.message})
    }
}
const deleteDetails = async (req, res)=> {
    try{
    let userId=req.params.userId
    let update = await user1Model.findByIdAndUpdate(userId , { isDeleted: true }, { new: true })
    res.status(200).send(update)
    }
    catch(err){
        res.status(500).send({error:err.message})
    }
}
module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.userDetails=userDetails
module.exports.updateDetails=updateDetails
module.exports.deleteDetails=deleteDetails