/**
 * @param {object} options - config object
 * @return {object} AuthServices - object for login action
 */

import axiosInstance from "./axiosInstance";

const AuthServices = {
  login: (authInfo) => {
    console.log(authInfo);
    return axiosInstance.post("/account/login", authInfo);
  },
  register: (userInfo) => {
    return axiosInstance.post("/account", userInfo);
  },
  verifyRefreshTk: (refreshToken /* type: obj because body in request is an Object  */) => {
    console.log("refreshToken: ", refreshToken);
    // return axiosInstance.post("/account/token", {"x-refresh-token": refreshToken});
    return axiosInstance.post("/account/token", {refreshToken});
  },
  verifyToken: () => {
    return axiosInstance.get("/account/profile");
  }
};

export default AuthServices;
