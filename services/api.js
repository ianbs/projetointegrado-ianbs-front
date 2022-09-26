import axios from "axios";
import { parseCookies } from "nookies";

const { projintegtoken: token } = parseCookies();

export const api = axios.create({
  baseURL: "https://sgcc-ianbs.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
