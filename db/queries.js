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

module.exports = {
  getAllProducts,
  getAllCategories,
  getProductsByCategoryId,
  getCategoryNameById,
};
