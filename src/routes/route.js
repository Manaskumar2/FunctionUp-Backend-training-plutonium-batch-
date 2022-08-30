const express = require('express');
const router = express.Router();
const userController1= require("../controllers/NewUsercontroller")
const middleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// // router.delete('/users/:userId', userController.deleteUser)
router.post("/createUser",userController1.createUser)
router.post("/loginUser",userController1.loginUser)
router.get("/userDetails/:userId",middleware.authenticate,middleware.authorise,userController1.userDetails)
router.put("/updatedetail/:userId",middleware.authenticate,middleware.authorise,userController1.updateDetails)
router.delete("/deletedetails/:userId",middleware.authenticate,middleware.authorise,userController1.deleteDetails)

module.exports = router;