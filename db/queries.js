const { get } = require("../routes/productsRouter");
const pool = require("./pool");

async function getAllProducts() {
  const { rows } = await pool.query(`
    SELECT 
      items.name,
      items.stock_quantity,
      items.price,
      categories.category AS category_name
    FROM items
    JOIN categories
    ON categories.id = items.category_id

  `);
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query(`
    SELECT * 
    FROM categories
    `);
  return rows;
}

async function getProductsByCategoryId(categoryId) {
  const { rows } = await pool.query(
    `
    SELECT * FROM items
    WHERE category_id = $1
    `,
    [categoryId],
  );
  return rows;
}

async function getCategoryNameById(categoryId) {
  const { rows } = await pool.query(
    `
    SELECT category
    FROM categories
    WHERE id = $1
    `,
    [categoryId],
  );
  return rows[0].category;
}

async function getProductById(productId) {
  const { rows } = await pool.query(
    `
    SELECT *
    FROM items
    WHERE id = $1
    `,
    [productId],
  );
  return rows;
}

async function updateProduct(
  id,
  name,
  description,
  stock_quantity,
  price,
  category_id,
) {
  await pool.query(
    `
    UPDATE items
    SET 
      name = $1,
      description = $2,
      price = $3,
      stock_quantity = $4,
      category_id = $5
    WHERE id = $6
    `,
    [name, description, price, stock_quantity, category_id, id],
  );
}

async function deleteProduct(productId) {
  await pool.query(
    `
    DELETE FROM items
    WHERE id = $1
    `,
    [productId],
  );
}

module.exports = {
  getAllProducts,
  getAllCategories,
  getProductsByCategoryId,
  getCategoryNameById,
  getProductById,
  updateProduct,
  deleteProduct,
};
