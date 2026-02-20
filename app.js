const express = require("express");
const app = express();
const productsRouter = require("./routes/productsRouter");
const categoriesRouter = require("./routes/categoryRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/products", productsRouter);

app.use("/", categoriesRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Inventory App listening on port ${PORT}`);
});
