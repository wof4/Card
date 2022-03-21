import { cardDataType } from "../types";
import instance from "./api";


const MainApi = {
  async sendData(data: cardDataType) {
    try {
      return await instance
        .post("/save-card", data)
        .then((res) => res.data);
    } catch (error) {
      return error;
    }
  },
};

export default MainApi;
