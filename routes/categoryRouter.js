const { Router } = require("express");
const { getAllCategories } = require("../controllers/categoryController");
const {
  getProductsByCategoryId,
} = require("../controllers/productsController");

const categoriesRouter = Router();

categoriesRouter.get("/:categoryId", getProductsByCategoryId);
categoriesRouter.get("/", getAllCategories);

module.exports = categoriesRouter;
