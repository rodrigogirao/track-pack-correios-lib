import axios from "axios";

const Api = {
  getTrack: (trackCode: string) =>
    axios.get(`https://rastreamentocorreios.info/consulta/${trackCode}`),
};
