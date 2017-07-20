var sqlite = require('sqlite-sync');
sqlite.connect('../database.db');

module.exports = function(){
  return sqlite;
}
