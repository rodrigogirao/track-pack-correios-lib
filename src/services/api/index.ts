import axios from "axios";

const Api = {
  getTrack: (trackCode: string): any =>
    axios.get(`https://www.websro.com.br/detalhes.php?P_COD_UNI=${trackCode}`),
};

export default Api;
