const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "restaurant",
  password: "password",
});

function getSqlConnection() {
  return pool.getConnectionAsync().disposer(function (connection) {
    connection.release();
  });
}

module.exports = getSqlConnection;
