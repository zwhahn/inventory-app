const { Router } = require("express");
const { getAllProducts, getProductsByCategoryId } = require("../controllers/productsController");

const indexRouter = Router();

indexRouter.get("/:categoryId", getProductsByCategoryId);
indexRouter.get("/", getAllProducts);

module.exports = indexRouter;
