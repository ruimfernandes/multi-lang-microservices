import axios from "axios";

const apiAdapter = baseURL =>
  axios.create({
    baseURL: baseURL
  });

export default apiAdapter;
