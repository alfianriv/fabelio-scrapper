const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const scrapeRoutes = require("./src/routes/scrape");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/scrape", scrapeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

module.exports = app;
