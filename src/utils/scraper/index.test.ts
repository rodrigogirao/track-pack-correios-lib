import fs from "fs";
import path from "path";
const html = fs.readFileSync(
  path.resolve(__dirname, "../../mocks/trackResponse.html"),
  "utf8"
);
import { trackJson } from "../../mocks/trackJson";
import { websroScraper } from ".";

describe("Scraper test suite", () => {
  describe("websroScraper", () => {
    it("should receive html and returns json", () => {
      expect(websroScraper(html)).toStrictEqual(trackJson);
    });
  });
});
