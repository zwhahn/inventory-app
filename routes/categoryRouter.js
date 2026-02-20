const { Router } = require("express");
const { getAllCategories } = require("../controllers/categoryController");

const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);

module.exports = categoriesRouter;
