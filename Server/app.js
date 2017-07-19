var app = require('./config/express')();
var rotasProduto = require('./app/routes/produto')(app);
var rotas = require('./app/routes/index')(app);

app.listen(3000, function(){
	console.log("servidor rodando");
});