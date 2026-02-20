const db = require("../db/queries");

async function getAllProducts(req, res) {
  try {
    const products = await db.getAllProducts();
    res.render("allProducts", {
      items: products,
    });
  } catch (err) {
    console.error("Error fetching items: ", err);
    res.status(500).send("Error loading items");
  }
}

async function getProductsByCategoryId(req, res) {
  const { categoryId } = req.params;

  console.log("categoryId @ Controller: ", categoryId);

  const categoryProducts = await db.getProductsByCategoryId(Number(categoryId));

  if (!categoryId) {
    res.status(404).send("Category not found");
    return;
  }

  res.render("productList", {
    categoryId: categoryId,
    products: categoryProducts,
  });
}

module.exports = { getAllProducts, getProductsByCategoryId };
