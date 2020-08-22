const  express = require("express");
const router = express.Router();


router.get("/",(req,res) =>{
    res.render("index.html",{dotero:"Difusal"});
 });
 router.get("/about",(req,res) =>{
    res.render("about.html",{mensaje:"Adios amiguito"});
 });
 module.exports=router;