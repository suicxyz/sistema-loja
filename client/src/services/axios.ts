import Axios from "axios";
import { parseCookies } from "nookies";

const { "hspap.token" : token } = parseCookies();

const axios = Axios.create({
  baseURL: 'http://127.0.0.1:3001'
});

if (token) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default axios;