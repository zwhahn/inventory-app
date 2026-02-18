const db = require("../db/queries");

async function getAllProducts(req, res) {
  try {
    const products = await db.getAllProducts();
    res.send(products);
  } catch (err) {
    console.error("Error fetching messages: ", err);
    res.status(500).send("Error loading messages");
  }
}

module.exports = { getAllProducts };
