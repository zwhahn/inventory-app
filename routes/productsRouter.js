const { Router } = require("express");
const { getAllProducts } = require("../controllers/productsController");

const indexRouter = Router();

indexRouter.get("/", getAllProducts);

module.exports = indexRouter;
