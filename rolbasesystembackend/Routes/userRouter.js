const express = require("express");
const { singupuser, singinuser } = require("../Controller/usercontroller.js");

const router = express.Router();

router.post("/signup", singupuser); 
router.post("/signin", singinuser); 

module.exports = router; 
