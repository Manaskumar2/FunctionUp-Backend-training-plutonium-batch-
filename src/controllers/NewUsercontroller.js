const user1Model= require("../models/usermodel1")
const jwt= require("jsonwebtoken")






const createUser= async (req,res)=>{
    let userDetails= req.body
    let usersData= await user1Model.create(userDetails)
    res.send({msg:usersData})
}
const loginUser = async  (req, res)=> {
    let { emailId } = req.body
    let { password } = req.body
    let userCheck = await user1Model.findOne({ emailId: emailId, password: password })
    if (!userCheck) { return res.send("Incorrect userID or password.") }

    let token = jwt.sign(
        {
            userID: userCheck._id.toString(),
            platform: "education"
        },
        "hi there"
    )
    res.send({ status: true, token: token })
}
const userDetails = async (req,res)=>{
    const valid=req.params.userId
    const userDetail= await user1Model.findById(valid)



    res.send({msg:userDetail})

}
const updateDetails = async function (req, res) {
    let add = req.body
    let userId=req.params.userId
    let update = await user1Model.findByIdAndUpdate(userId, add, { new: true })
    res.send({msg:update})
}
const deleteDetails = async function (req, res) {
    let userId=req.params.userId
    let update = await user1Model.findByIdAndUpdate(userId , { isDeleted: true }, { new: true })
    res.send(update)
}
module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.userDetails=userDetails
module.exports.updateDetails=updateDetails
module.exports.deleteDetails=deleteDetails