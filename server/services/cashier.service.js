const mysql = require("../utils/mysql");

exports.getCategory = (req, res) => {
  let sql = "SELECT * FROM category";

  return mysql.query(sql);
};

exports.getDish = (req, res) => {
  let sql = "SELECT * FROM dish";

  return mysql.query(sql);
};

exports.setOrder = (req) => {
  let table = req.body.table;
  let sql;

  sql = "INSERT INTO restaurant.order (`table`) VALUES (?)";

  return mysql.query(sql, table);
};

exports.placeOrder = async (req, res) => {
  let body = req.body,
    values = [],
    sql;

  values = [body.orderId, body.dishId, body.count];

  sql =
    "INSERT INTO restaurant.order_map (`order_id`,`dish_id`,`count`) VALUES (?,?,?)";

  return mysql.query(sql, values);
};

exports.incrementOrder = async (req, res) => {
  let body = req.body,
    values = [],
    sql;

  values = [body.orderId, body.dishId];

  sql =
    "update restaurant.order_map set count = count +1 where order_id = ? and dish_id = ?";

  return mysql.query(sql, values);
};
exports.decrementOrder = async (req, res) => {
  let body = req.body,
    values = [],
    sql;

  values = [body.orderId, body.dishId];

  sql =
    "update restaurant.order_map set count = count -1 where order_id = ? and dish_id = ?";

  return mysql.query(sql, values);
};

exports.closeOrder = (req, res) => {
  let body = req.body;

  let values = [body.payment, body.orderId];

  let sql =
    "UPDATE restaurant.order SET transaction = ?, is_paid ='1' WHERE (id = ?)";
  return mysql.query(sql, values);
};
