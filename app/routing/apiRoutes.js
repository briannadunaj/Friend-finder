var friendsData = require("../data/friends");

module.exports = function(app){

	// view friends data
	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});

	// create new friend
	app.post("/api/friends", function(req, res){
		friendsData.push(req.body);
		res.json();
	});

	//console.log(friendsData);

	// code to compare numbers
	// loop through friends array
	for (var i = 0; i < friendsData.length - 1; i++){
		//console.log(friendsData[i].numbers);

		//loop through each 'numbers' array 
		for (var j = 0; j < friendsData[i].numbers.length; j++){
			console.log(friendsData[i].numbers[j]);

			difference += Math.abs(parseInt(req.body.numbers) - parseInt(friendsData[i].numbers[j]));
			console.log(difference);
		}
	}


}