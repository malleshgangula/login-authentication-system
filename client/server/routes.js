const express = require("express");
const router = express.Router();

router.post("/login",(req,res)=>{
res.send("User login successful");
});

router.post("/signup",(req,res)=>{
res.send("User signup successful");
});

module.exports = router;
