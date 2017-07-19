module.exports = function(app){
	app.get('/api/produtos', function(req, res){

		var result = []; 
		for (var i = 0; i < 10; i++) {
			result.push({cd: i, nome: "produto " + i});
		}

		res.contentType('application/json');
		res.send(JSON.stringify(result));
	});
}