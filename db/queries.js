const { get } = require("../routes/indexRouter");
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

module.exports = { getAllProducts, getAllCategories };
