import axios from "axios";
import auth from "./auth/service.auth";

const authInstance = axios.create({ baseURL: "/login" });

const api = {
  auth: auth(authInstance),
};

export default api;
