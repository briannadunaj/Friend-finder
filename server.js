var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.get("/", function (req, res){
	console.log("getting home page", req.params.page)
	res.sendFile(path.join(__dirname, "app/public/home.html"))
});

app.listen(3000, function(){
	console.log("Example app listening on port 3000!")
});