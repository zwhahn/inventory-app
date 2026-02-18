const { get } = require("../routes/indexRouter");
const pool = require("./pool");

async function getAllProducts() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

module.exports = { getAllProducts };
