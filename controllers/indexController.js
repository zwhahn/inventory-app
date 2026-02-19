const db = require("../db/queries");

async function getAllProducts(req, res) {
  try {
    const products = await db.getAllProducts();
    res.render("index", {
      items: products,
    });
  } catch (err) {
    console.error("Error fetching items: ", err);
    res.status(500).send("Error loading items");
  }
}

module.exports = { getAllProducts };
