import { LOG_OUT, SIGN_IN, SIGN_UP, GET_USER_INFO, RENEW_TOKEN } from "../types";
import axiosInstance from "../../services/axiosInstance.js";
import AuthServices from "../../services/authService.js";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN:
      const { token, refreshToken, isAuthenticated, user } = payload;
      console.log(payload);
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      return { ...state, token, refreshToken, isAuthenticated, user };
    case SIGN_UP:
      return state;
    case LOG_OUT:
      localStorage.removeItem("refreshToken");
      return {
        ...state,
        token: null,
        refreshToken: null,
        isAuthenticated: false,
        user: null,
      };
    case GET_USER_INFO: {
      const { user } = payload;
      console.log(user);
      return {
        ...state,
        // user: !state.user ? user : state.user,
        user: user,
      };
    }
    case RENEW_TOKEN: {
      // console.log(payload);
      const { token } = payload;      
      localStorage.setItem("token", token);
      /* axiosInstance.defaults.headers.common["token"] = token;
      const authorizedUser = AuthServices.verifyToken();
      const user = authorizedUser&& authorizedUser.data.user; */
      return {
        ...state,
        token,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
