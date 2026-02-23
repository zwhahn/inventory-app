const { Router } = require("express");
const {
  getAllProducts,
  getProductsByCategoryId,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} = require("../controllers/productsController");

const productRouter = Router();

productRouter.get("/delete/:categoryId/:productId", deleteProduct);

productRouter.get("/new", getProductById);
productRouter.post("/new", createProduct);

productRouter.get("/edit/:productId", getProductById);
productRouter.post("/edit/:productId", updateProduct);

productRouter.get("/:categoryId", getProductsByCategoryId);
productRouter.get("/", getAllProducts);

module.exports = productRouter;
