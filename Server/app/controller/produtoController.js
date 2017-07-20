var sqlite = require('../../config/db')();

exports.list = function(callback){
  sqlite.run("SELECT * FROM PRODUTO", function(resp){
		callback(resp);
	});
}

exports.save = function(nome, callback){
  sqlite.insert("PRODUTO", {PRO_DS_NOME:nome}, function(resp){
		callback('id: ' + resp);
	});
}

exports.delete = function (id, callback) {
  sqlite.run('DELETE FROM PRODUTO WHERE PRO_CD_PRODUTO = ' + id, function(resp){
    callback('sucesso');
  });
};
