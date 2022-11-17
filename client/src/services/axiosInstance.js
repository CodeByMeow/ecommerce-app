/**
 * @return {object} - axiosInstance return the Config object {} for axios
 */
import axios from "axios";
import { BASE_URL } from "../config/domain";
import AuthServices from "../services/authService.js";

const refreshToken = localStorage.getItem("refreshToken")
  ? localStorage.getItem("refreshToken")
  : null;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000 /* miliseconds */,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    Accept: "application/x-www-form-urlencoded, text/plain",
  },
});

axiosInstance.setLocalAccessToken = async (token) => {
  localStorage.setItem("token", token);
};

axiosInstance.getLocalAccessToken = async () => {
  return localStorage.getItem("token") ? localStorage.getItem("token") : null;
};

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url.indexOf("/account/profile") >= 0) {
      // console.log(config.url);
      const token = await axiosInstance.getLocalAccessToken();
      config.headers["x-token"] = token;
      // console.log("Before request to server:::", config);
      return config;
    }
    // exclude some routes do not need to check access token
    else {
      return config;
    }
  },
  async (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    // console.log("After server response::::", response.data);
    const prevRequest = response.config;
    // console.log(config.url);
    if (prevRequest.url.indexOf("/account/profile") >= 0) {
      const { code, msg } = response.data;
      if (code && code === 401) {
        if (msg && msg === "jwt expired") {
          console.log("Token is expired:::", msg);
          // step 1: gen new token from refreshToken
          const res = await AuthServices.refreshToken(refreshToken);
          if (res) {
            console.log("New token: ", res.token);
            // step 2 : set headers
            prevRequest.headers["x-token"] = res.token;
            // step 3:
            await axiosInstance.setLocalAccessToken(res.token);
            return axiosInstance({
              ...prevRequest,
              headers: {
                ...prevRequest.headers,
                "x-token": res.token,
              },
            });
          }
        }
      }
      return response;
    } 
    // exclude some routes do not need to check access token
    return response;
  },
  async (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
