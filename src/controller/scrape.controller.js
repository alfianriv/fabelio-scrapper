const { scrapeAPI } = require("../service/scrape");

const scrapper = async (req, res) => {
  try {
    const { body } = req;

    if (!body.url) {
      return res.json({
        success: false,
        message: "Url is required",
      });
    }

    const data = await scrapeAPI(body.url);

    return res.json({
      success: true,
      data: data,
      url: body.url,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "An error occurred",
    });
  }
};

module.exports = {
  scrapper,
};
