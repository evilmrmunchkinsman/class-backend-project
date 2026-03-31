const express= require('express');
const sendPosts=require("../controllers/postController")
const router= express.Router();



const sendPosts= (req,res)=>{
	res.send("THIS IS THE POST PAGE");
}
router.get("/",sendPosts);

module.exports= sendPosts;