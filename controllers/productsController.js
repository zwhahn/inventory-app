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

async function getProductById(req, res) {
  const { productId } = req.params;
  const categories = await db.getAllCategories();

  // Handle "new" state
  if (!productId) {
    res.render("form", {
      product: "",
      categories: categories,
    });
  }

  const rows = await db.getProductById(Number(productId));
  const product = rows[0];

  if (!product) {
    console.log("Error: could not find product with product Id: ", productId);
  }

  res.render("form", {
    product: product,
    categories: categories,
  });
}

async function createProduct(req, res) {
  const { name, description, stock_quantity, price, category_id } = req.body;
  await db.createProduct(
    name,
    description,
    Number(stock_quantity),
    Number(price),
    Number(category_id),
  );

  res.redirect(`/products/${category_id}`);
}

async function updateProduct(req, res) {
  const { productId } = req.params;
  const { name, description, stock_quantity, price, category_id } = req.body;
  await db.updateProduct(
    productId,
    name,
    description,
    Number(stock_quantity),
    Number(price),
    Number(category_id),
  );

  res.redirect(`/products/${category_id}`);
}

async function deleteProduct(req, res) {
  const { categoryId, productId } = req.params;
  await db.deleteProduct(Number(productId));
  res.redirect(`/products/${categoryId}`);
}

module.exports = {
  getAllProducts,
  getProductsByCategoryId,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
