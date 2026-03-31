const express= require('express');
const cors= require('cors');

const PORT= 3000;

const app= express();

app.use(cors());

app.get("/",(req,res) =>{
	res.send("THIS IS THE RIGHT PAGE");
});

app.listen(PORT,()=>{
	console.log("SERVER IS RUNNING")
});