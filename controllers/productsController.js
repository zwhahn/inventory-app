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

  const categoryName = await db.getCategoryNameById(Number(categoryId));
  const categoryProducts = await db.getProductsByCategoryId(Number(categoryId));

  if (!categoryId) {
    res.status(404).send("Category not found");
    return;
  }

  res.render("productList", {
    categoryName: categoryName,
    products: categoryProducts,
  });
}

async function deleteProduct(req, res) {
  const { categoryId, productId } = req.params;
  await db.deleteProduct(Number(productId));
  res.redirect(`/products/${categoryId}`);
}

module.exports = { getAllProducts, getProductsByCategoryId, deleteProduct };
