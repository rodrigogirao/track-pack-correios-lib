import cheerio, { Cheerio } from "cheerio";
import Api from "../api";
import Track from "../../types/scrapper";

const websroScraper = (html: any): Track[] => {
  const $ = cheerio.load(html);
  const trackTable: Cheerio = $("tbody > tr");
  const trackSteps: Track[] = [];
  trackTable.each((i, element) => {
    const firstColumn = $(element).find("td").first();
    const date = $(firstColumn[0].childNodes[0]).text();
    const time = $(firstColumn[0].childNodes[2]).text();
    const [city, state] = $(firstColumn[0].childNodes[5])
      .text()
      .split("/")
      .flatMap((elem) => elem.trim());
    const lastColumn = $(element).find("td").last();
    const status = $(lastColumn[0].childNodes[0]).text();
    const info = $(lastColumn[0].childNodes[2])
      .text()
      .trim()
      .replace(/\s+/g, " ");
    trackSteps.push({ date, time, city, state, status, info });
  });
  return trackSteps;
};

const scraper = (trackCode: string): Track[] =>
  Api.getTrack(trackCode).then((response: any) => websroScraper(response.data));

export default scraper;
