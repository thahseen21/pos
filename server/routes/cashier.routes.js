const cashierController = require("../controllers/cashier.controllers");

function init(router) {
  console.log("in routes");
  router.get("/category", cashierController.getCategory);
  router.get("/dish", cashierController.getDish);

  router.post("/setorder", cashierController.setOrder);
  router.post("/placeorder", cashierController.placeOrder);
  router.post("/closeorder", cashierController.closeOrder);

  router.put("/incrementorder", cashierController.incrementOrder);
  router.put("/decrementorder", cashierController.decrementOrder);
}

module.exports.init = init;
