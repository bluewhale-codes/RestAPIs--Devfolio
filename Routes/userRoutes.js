const express = require("express");
const {isAuthenticatedUser} = require("../middleware/auth")
const {registerUser,googleRegister,googleCallback , loginUser ,getUser, logout} = require("../Controller/userController");
const router = express.Router();


router.post("/createUser",registerUser);
router.get("/googleAuth",googleRegister);
router.get("/googleauthCallback",googleCallback);
router.get("/me",isAuthenticatedUser,getUser)
router.post("/login",loginUser);
router.post("/logout",logout)

module.exports = router;