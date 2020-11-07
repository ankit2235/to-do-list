const express = require("express");
app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyparser.urlencoded({extended:true}));



app.set('view engine', 'ejs');


app.get("/",function(req,res){
	

	 res.render('index', {question_1_1:question_1});
});

app.post("/",function(req,res){
	 item = req.body.question;
	//res.render('index', {newlistitem: item}); not to be used
    question_1.push(item);
	res.redirect("/");

});

app.listen(3000,function(){
	console.log("running @ 3000");

});