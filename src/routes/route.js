const express = require('express');
const router = express.Router();
// // const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
 const BookController= require("../controllers/bookController")
const BookDetails=require("../controllers/book1Controller")
const authorDetails=require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// const authorModel = require('../models/authorModel');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
    
// })
router.post("/createBook",BookDetails.Books)
router.post("/createAuthor",authorDetails.authorDetail)
router.get("/getAuthor",BookDetails.authorBooks)
router.get('/update',BookDetails.update)
router.get("/authorName",BookDetails.allauthorNAme)
module.exports = router;