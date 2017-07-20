var produtoController = require('../../app/controller/produtoController');
var validator = require('validator');

module.exports = function(app){
	app.get('/api/produtos', function(req, res){
		produtoController.list(function(resp) {
			res.send(resp);
		});
	});

	app.post('/api/produtos', function(req, res) {
		var nome = validator.trim(validator.escape(req.body.nome));
		produtoController.save(nome, function(resp) {
			res.send(resp);
		});
	});

	app.delete('/api/produtos', function(req, res) {
		var id = validator.trim(validator.escape(req.body.id));

		produtoController.delete(id, function(resp) {
			res.send(resp);
		});
	});
}
