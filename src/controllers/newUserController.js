const userModel=require("../models/newUserModel")


const createUser= async function(req,res){
    const freeAppUser=req.headers.isfreeappuser
    const data =req.body
    if(!freeAppUser){
        return res.send({msg :"header is required"})

    }
    else{
        data["isFreeAppUser"]=freeAppUser
        console.log(data);
        const NewData = await userModel.create(data)
        
    
    res.send({msg:NewData})
    }
}
// const createlist =async function(req,res){
//     const data= req.body
//     const newData= await userModel.create(data)
//     res.send({msg:newData})
// }
module.exports.createUser=createUser
