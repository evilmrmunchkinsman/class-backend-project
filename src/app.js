const express= require('express');
const cors= require('cors');
const postRoutes= require("./routes/postsRoutes")

const PORT= 3000;

const app= express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res) =>{
	res.send("THIS IS THE RIGHT PAGE");
});

app.use("/posts",postRoutes);

module.exports=app