import Api from "../api";
import cheerio, { Cheerio } from "cheerio";

const scraper = Api.getTrack("NX034780583BR").then((response: any) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const trackTable: Cheerio = $("tbody > tr");
  const trackSteps: any[] = [];
  trackTable.each((i, element) => {
    const [date, cityAndState] = $(element)
      .find("td")
      .first()
      .text()
      .split("\n");
    const [city, state] = cityAndState.split("/");
    trackSteps.push({ date, city: city.trim(), state });
  });
  console.log(trackSteps);
});

export default scraper;
