import axios from "axios";
import Api from "../api";
jest.mock("axios");

describe("Api test suite", () => {
  describe("getTrack", () => {
    it("should call axios with url", () => {
      const trackCode = "LB164101870HK";
      Api.getTrack("LB164101870HK");

      expect(axios.get).toHaveBeenCalledWith(
        `https://www.websro.com.br/detalhes.php?P_COD_UNI=${trackCode}`
      );
    });
  });
});
