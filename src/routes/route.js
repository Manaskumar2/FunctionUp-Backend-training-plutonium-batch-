const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const user1Controller=require("../controllers/user1controller")
const middleware= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)
router.post("/createUser",user1Controller.createUser)
router.post("/loginUser",user1Controller.loginUser)
router.get("/userDetails/:userId",middleware.midWare1,user1Controller.userDetails)
router.put("/updatedetail/:userId",middleware.midWare1,user1Controller.updateDetails)
router.delete("/deletedetails/:userId",middleware.midWare1,user1Controller.deleteDetails)
 module.exports = router;