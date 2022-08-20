const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherData=require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//.........Author api.....................................................
router.post("/createAuthor", authorController.createAuthor  )
router.get("/getAuthor",authorController.getAuthorsData)
//...........publisher api..............................................
router.post("/createPublisher",publisherData.publisher)
router.get("/getPublisher",publisherData.getPublisher)

//..............Book api...............................................
router.post("/createBook", bookController.createBook  )
router.post("/createbookall",bookController.createBookAll)


router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
//........................update true and price api...................
router.put("/books",bookController.UpdateValue)

module.exports = router;