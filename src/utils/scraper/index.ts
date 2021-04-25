import cheerio, { Cheerio } from "cheerio";
import TrackData from "../../types";

const websroScraper = (html: any): TrackData[] => {
  const $ = cheerio.load(html);
  const trackTable: Cheerio = $("tbody > tr");
  const trackSteps: TrackData[] = [];
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

export { websroScraper };
