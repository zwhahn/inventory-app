const { Router } = require("express");
const {
  getAllProducts,
  getProductsByCategoryId,
  deleteProduct,
} = require("../controllers/productsController");

const indexRouter = Router();

indexRouter.get("/delete/:categoryId/:productId", deleteProduct);
indexRouter.get("/:categoryId", getProductsByCategoryId);
indexRouter.get("/", getAllProducts);

module.exports = indexRouter;
