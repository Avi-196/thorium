const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authCheck=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser  )

router.post("/loginUser", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",authCheck.tokenCheck, userController.getUserData)

router.put("/updateUser/:userId",authCheck.tokenCheck, userController.updateUser)

router.delete("/DeletUser/:userId",authCheck.tokenCheck,userController.DeletUser)
router.post("/Postmsg/:userId/posts",userController.Postmsg)

module.exports = router;