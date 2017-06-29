var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var friends = require("./app/data/friends");
var survey = require("./app/public/home.html")

//html routes
app.get("/", function (req, res){
	console.log("getting home page", req.params.page)
	res.sendFile(path.join(__dirname, "app/public/home.html"))
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "app/public/survey.html"))
});


//api routes
/*//search for specific friend
app.get("/api/:friends?", function(req, res){
	var chosen = req.params.friends;

	if (chosen){
		console.log(chosen);
		for (var i = 0; i < friends.length; i++){
			if (chosen === friends[i].name){
				return res.json(friends)
			}
		}
	}
})*/

// create new friend
app.post("/api/friends", function(req, res){
	//req.body is equal to the json post sent from the user
	var newfriend = req.body.newFriend;
	//add the json the user sent to the friends array
	friends.push(newfriend);
	//
});

console.log(friends);



app.listen(3000, function(){
	console.log("App listening on port 3000!")
});