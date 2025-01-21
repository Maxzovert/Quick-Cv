const express = require("express");
const router = express.Router();
const {userSignUp, loginUser , currentUser} = require("../Controller/controller");
const validateToken = require("../Middleware/auth")
 
router.post("/register" , userSignUp);

router.post("/login" ,loginUser);

router.get("/current" ,validateToken,currentUser);

module.exports = router;