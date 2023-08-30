import axios from "axios";
import { BASE_URL } from "../API";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const AxiosToken = axios.CancelToken.source;

export { AxiosToken };

export default axiosClient;
