import axios from "axios";
import { parseCookies } from "nookies";

const { projintegtoken: token } = parseCookies();

export const api = axios.create({
  baseURL: "https://projetointegrado-ianbs.herokuapp.com",
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
