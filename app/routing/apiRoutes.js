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

		var closest = 40;
		var userName = req.body.name;
		var userPhoto = req.body.photo;
		var userScores = req.body.numbers;
		closestScore();

		// determine the user's most compatible friend
		function closestScore(){
			var differencesArray = [];
			var totalDifference = 0;
			var closestNumber = 0;

			// loop through all stored friends
			for (var i = 0; i < friendsData.length; i++){
				// loop through numbers array
				for (var j = 0; j < userScores.length; j++){
					// calculate the absolute value difference between the user's answers and each character's answers
					// add up all of the differences
					totalDifference += (Math.abs(userScores[j] - friendsData[i].numbers[i]));
				} // end of userScores loop

				// push each total difference to an array
				differencesArray.push(totalDifference);
				// reset sum
				sum = 0;
			} // end of friends loop

			// loop through all the differences to find the lowest number (user's match)
			for (var i = 0; i < differencesArray.length; i++){
				// if the current number is less than a placeholder number
				if (differencesArray[i] < closest){
					// placeholder number becomes lowest difference number
					closest = differencesArray[i];
					// store the lowest difference
					closestNumber = i;
				}
			} // end of differences array loop
			console.log(closestNumber);
			// store the compatible friend in variable
			var match = friendsData[closestNumber];
			// convert data to string
			var string = JSON.stringify(match);
			
			res.end(string);
			console.log(string);
			//$(".modal-body").html(string);

		}; // end of match function
	});
}