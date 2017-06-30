var path = require("path");

module.exports = function(app){
	//html routes
	app.get("/", function (req, res){
		console.log("getting home page", req.params.page)
		res.sendFile(path.join(__dirname, "/../public/home.html"))
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"))
	});
	
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"))
	})
};