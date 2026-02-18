const { Router } = require("express");
const { getAllProducts } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllProducts);

module.exports = indexRouter;
