$(document).ready(function(){
	$(".submit-btn").on("click", function(){
		console.log("hi");
		userAnswers = [];

		var q1 = $("#sel1").val();
		userAnswers.push(q1);
		var q2 = $("#sel2").val();
		userAnswers.push(q2);
		var q3 = $("#sel3").val();
		userAnswers.push(q3);
		var q4 = $("#sel4").val();
		userAnswers.push(q4);
		var q5 = $("#sel5").val();
		userAnswers.push(q5);
		var q6 = $("#sel6").val();
		userAnswers.push(q6);
		var q7 = $("#sel7").val();
		userAnswers.push(q7);

		var newFriend = {
			"name": $("#name").val().trim(),
			"photo": $("#photo").val(),
			"numbers": userAnswers
		};
		console.log(newFriend);

/*		$.post("/api/friends", newFriend, function(){
			q1 = 0, q2 = 0, q3 = 0, q4 = 0, q5 = 0, q6 = 0, q7 = 0;
		}).then(function(match){
			var parsed = JSON.parse(match);
			console.log(parsed);
			
		}); */
		//console.log(parsed);
		// add modal pop-up with result

	});



});


