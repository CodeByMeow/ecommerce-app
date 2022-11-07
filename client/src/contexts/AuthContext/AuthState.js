import { useEffect, useContext, useReducer } from "react";
import authReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

import {
  SIGN_IN,
  GET_USER_INFO,
  LOG_OUT,
  RENEW_TOKEN,
} from "../../contexts/types.js";
import actionCreator from "../../utils/actionCreator.js";
import AuthServices from "../../services/authService.js";
import axiosInstance from "../../services/axiosInstance.js";

const initialState = {
  token: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  isAuthenticated: !!localStorage.getItem("refreshToken") || false,
  authLoading: false,
  user: null,
  authError: null,
};

const AuthState = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { refreshToken, token } = state;

  // implement token in localStorage to Header in axiosInstance to call API POST method
  const setAuthToken = async (token) => {
    if (token) {
      axiosInstance.defaults.headers.common["token"] = token;
    }
  };

  const renewToken = async () => {
    try {
      const authorizedRefreshToken = await AuthServices.verifyRefreshTk(
        refreshToken
      );
      dispatch(actionCreator(RENEW_TOKEN, authorizedRefreshToken.data));
    } catch (err) {
      err.response.data.msg
        ? console.log(err.response.data.msg)
        : console.log(err.response.data);
      dispatch(actionCreator(LOG_OUT));
    }
  };

  /* check if refreshToken was stored in localStorage is expired or not */
  const verifyToken = async () => {
    try {
      const authorizedUser = await AuthServices.verifyToken();
      console.log(authorizedUser);
      // if token does not expired or invalid => dispatch to global state
      dispatch(actionCreator(GET_USER_INFO, authorizedUser.data));
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 401) {
        renewToken();
      }
      // err.response.data.msg ? console.log(err.response.data.msg) : console.log(err.response.data);
    }
  };

  useEffect(() => {
    setAuthToken(token);
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
