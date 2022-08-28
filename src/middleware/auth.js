const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const user1Model = require('../models/user1Model')


const midWare1 = async function (req, res, next) {
    let token = req.headers["x-auth-token"]
    if (!token) { return res.send("Header is missing") }
    let decodedToken = jwt.verify(token, "hi there")
    if (!decodedToken) { return res.send("Not a valid token") }


    let userId = req.params.userId
    let check = await user1Model.findById(userId)
    if (!check) { return res.send("No such user exist") }
    next()
}

module.exports.midWare1 = midWare1