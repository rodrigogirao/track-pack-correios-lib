import TrackData from "../../types";
import { websroScraper } from "../../utils/scraper";
import Api from "../api";

const track = (trackCode: string): TrackData[] =>
  Api.getTrack(trackCode).then((response: any) => websroScraper(response.data));

export default track;
