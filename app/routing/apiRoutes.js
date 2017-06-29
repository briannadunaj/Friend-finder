var friendsData = require("../data/friends");

module.exports = function(app){

	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});

	// create new friend
	app.post("/api/friends", function(req, res){

		friendsData.push(req.body);
		res.json();

	/*/	//req.body is equal to the json post sent from the user
		var newfriend = req.body.newFriend;
		//add the json the user sent to the friends array
		friends.push(newfriend);
		///*/
	});

	//console.log(friendsData);

}