import track from ".";
import Api from "../api";
jest.spyOn(Api, "getTrack");

describe("Track test suite", () => {
  describe("track", () => {
    it("should call api get track", () => {
      const trackCode = "LB164101870HK";
      track(trackCode);
      expect(Api.getTrack).toBeCalledTimes(1);
      expect(Api.getTrack).toBeCalledWith(trackCode);
    });
  });
});
