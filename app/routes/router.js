const express = require("express");
const router = express.Router();
 
router.get("/", (req, res)=>{
    res.render("pages/index", {resultado:null, valores:{idade:""}, erro:null});
});
