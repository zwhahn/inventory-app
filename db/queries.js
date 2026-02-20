const { get } = require("../routes/productsRouter");
const pool = require("./pool");

async function getAllProducts() {
  const { rows } = await pool.query("SELECT * FROM items");
  console.log("rows: ", rows);
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  console.log("rows: ", rows);
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
  console.log("productsById: ", rows);
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
  console.log("categoryName: ", rows[0].category);
  return rows[0].category;
}

module.exports = {
  getAllProducts,
  getAllCategories,
  getProductsByCategoryId,
  getCategoryNameById,
};
