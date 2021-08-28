const app = require("../index");
const supertest = require("supertest");

test("POST /api/scrape", async () => {
  await supertest(app)
    .post("/api/scrape")
    .send({ url: "https://fabelio.com/ip/meja-tamu-chloe-set-3-new" })
    .set("Accept", "application/json")
    .expect(200)
    .then((response) => {
      expect(response.body.success).toBe(true);
    });
});
