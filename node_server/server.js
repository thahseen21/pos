const express = require("express");
const cors = require("cors");

const cashierRoute = require("./routes/cashier.routes");

const app = express();

const port = 3300;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

app.use("/cashier", router);
cashierRoute.init(router);

app.listen(port, () => {
  console.log(`Running on port:${port}`);
});
