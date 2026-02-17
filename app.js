const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Inventory App listening on port ${PORT}`);
});
