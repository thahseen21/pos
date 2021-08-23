var getConnection = require("../config/db");
var Promise = require("bluebird");
mysql = {};

mysql.query = (query, data) => {
  return Promise.using(getConnection(), (conn) => {
    return conn.queryAsync(query, data);
  });
};

mysql.findOne = (query, data) => {
  return Promise.using(getConnection(), (conn) => {
    return conn.queryAsync(query, data);
  });
};

module.exports = mysql;
