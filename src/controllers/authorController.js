const authorDetails =require("../models/authorModel")
const authorDetail =async function (req, res) {
    let data= req.body
    let savedauthor= await authorDetails.create(data)
    res.send({msg: savedauthor})
}
module.exports.authorDetail=authorDetail