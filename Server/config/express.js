var app = require('express')();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views','./app/views');

module.exports = function(){
	return app;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
