const express= require('express');
const router=express.Router();

router.get("/",(req,res)=>{
	console.log("THIS IS THE POST PAGE");
})

router.post("/",(req,res) =>{
	console.log("your blog will pe posted soon")
});
module.exports= router;