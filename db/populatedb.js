const pool = require("./pool");

const SQL = `
TRUNCATE items, categories RESTART IDENTITY CASCADE;

INSERT INTO categories (category) VALUES 
  ('Produce'),
  ('Condiments'),
  ('Baking'),
  ('Proteins'),
  ('Dairy');

INSERT INTO items (name, description, price, stock_quantity, category_id) VALUES
  ('Oranges', 'Seedless California oranges', 3.99, 10, 1),
  ('Apples', 'Crisp Honeycrisp apples', 2.50, 25, 1),
  ('Ketchup', 'Organic tomato ketchup', 4.50, 15, 2),
  ('All-Purpose Flour', '5lb bag of bleached flour', 5.99, 8, 3),
  ('Chicken Breast', 'Boneless, skinless (approx 1lb)', 8.99, 12, 4),
  ('Whole Milk', '1 gallon of 3.25% milk', 3.49, 20, 5),
  ('Eggs', 'One dozen large brown eggs', 4.25, 30, 5),
  ('Greek Yogurt', 'Plain, non-fat yogurt', 5.50, 14, 5);
  `;

async function main() {
  console.log("seeding...");
  try {
    await pool.query(SQL);
    console.log("Success: Database Seeded");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await pool.end();
    console.log("Pool closed");
  }
}

main();
