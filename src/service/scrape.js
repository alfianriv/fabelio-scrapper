const axios = require("axios");
const cheerio = require("cheerio");

const scrapeAPI = async (url) => {
  try {
    const web = await axios.get(url);
    const html = web.data;

    const $ = cheerio.load(html);

    const product_name = $("#product-name").first().text();
    const product_slug = url.replace(/https:\/\/fabelio.com\/ip\//g, "").split('?')[0];
    const product_price = parseInt(
      $("#product-final-price")
        .first()
        .text()
        .replace(/[., Rp]/g, "")
    );
    const product_description = $(".s1").first().text();
    let product_images = [];
    for (let index = 1; index < $("#product-image").length; index++) {
      product_images.push(
        $("#product-image").eq(index).attr("src").split("?")[0]
      );
    }

    return {
      product_name: product_name,
      product_slug: product_slug,
      product_price: product_price,
      product_description: product_description,
      product_images: product_images,
    };
  } catch (error) {
    throw new Error("Error");
  }
};

module.exports = {
  scrapeAPI,
};
