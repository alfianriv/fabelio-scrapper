const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const scrapeRoutes = require("./src/routes/scrape");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/scrape", scrapeRoutes);

app.listen(3001, () => {
  console.log("listening on http://localhost:3001");
});

module.exports = app;
