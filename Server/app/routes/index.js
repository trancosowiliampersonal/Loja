module.exports = function(app){
	app.get('/', function(req, res){
		res.send("Ola mundo!");
	});

	app.use(function(req, res, next) {
	  res.status(404).render("notfound");
	});	
}