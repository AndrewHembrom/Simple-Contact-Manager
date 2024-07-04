const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static('public'));

var contacts = []

app.get("/", function(req,res){
	res.json({contacts});
})

app.post("/", function(req,res){
	
})

app.put("/", function(req,res){
	
})

app.delete("/", function(req,res){
	
})

app.listen(3000);
