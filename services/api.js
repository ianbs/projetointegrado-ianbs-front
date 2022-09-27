import axios from "axios";
import { parseCookies } from "nookies";

const { projintegtoken: token } = parseCookies();

export const api = axios.create({
  // baseURL: "https://sgcc-ianbs.herokuapp.com",
  baseURL: "http://134.122.123.15:3000",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
