const cashierService = require("../services/cashier.service");

exports.getCategory = async (req, res) => {
  try {
    let category = await cashierService.getCategory(req);
    // return res.sendStatus(404);
    return res.send(category);
  } catch (err) {
    console.log("err", err);
    return res.sendStatus(404);
  }
};

exports.getDish = async (req, res) => {
  try {
    let dish = await cashierService.getDish(req);
    return res.send(dish);
  } catch (err) {
    console.log("err", err);
    return res.sendStatus(404);
  }
};

exports.setOrder = async (req, res) => {
  try {
    let order = await cashierService.setOrder(req);
    return res.send(order);
  } catch (error) {
    console.log("error in placeOrder", error);
    return res.sendStatus(404);
  }
};

exports.placeOrder = async (req, res) => {
  try {
    if (req.body?.orderId) {
      let placeOrder = await cashierService.placeOrder(req);

      return res.send(placeOrder);
    } else {
      let order = await cashierService.setOrder(req);

      let placeOrder = await cashierService.placeOrder({
        ...req,
        ...req,
        body: {
          ...req.body,
          orderId: order.insertId,
        },
      });

      return res.send({ orderId: order.insertId, placeOrder });
    }
  } catch (err) {
    console.log("error", err);
    return res.sendStatus(404);
  }
};

exports.incrementOrder = async (req, res) => {
  try {
    let incrementOrder = await cashierService.incrementOrder(req);
    return res.send(incrementOrder);
  } catch (err) {
    console.log("error", err);
    return res.sendStatus(404);
  }
};

exports.decrementOrder = async (req, res) => {
  try {
    let decrementOrder = await cashierService.decrementOrder(req);
    return res.send(decrementOrder);
  } catch (err) {
    console.log("error", err);
    return res.sendStatus(404);
  }
};

exports.closeOrder = async (req, res) => {
  try {
    let closeOrder = await cashierService.closeOrder(req);
    return res.send(closeOrder);
  } catch (err) {
    console.log("err", err);
    return res.sendStatus(404);
  }
};
