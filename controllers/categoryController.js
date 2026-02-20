const db = require("../db/queries");

async function getAllCategories(req, res) {
  try {
    const categories = await db.getAllCategories();
    res.render("categories", {
      categories: categories,
    });
  } catch (err) {
    console.error("Error fetching categories: ", err);
    res.status(500).send("Error loading categories");
  }
}

module.exports = { getAllCategories };
