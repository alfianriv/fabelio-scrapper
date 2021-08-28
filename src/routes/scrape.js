const express = require("express");
const { scrapper } = require("../controller/scrape.controller");

const router = express.Router();

router.post("/", scrapper);

module.exports = router;
