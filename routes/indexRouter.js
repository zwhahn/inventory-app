const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Inventory App"));

module.exports = indexRouter;
