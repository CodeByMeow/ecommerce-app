import { useEffect, useState, useReducer } from "react";
import authReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

import {
  SIGN_IN,
  GET_USER_INFO,
  LOG_OUT,
  REFRESH_TOKEN,
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

<<<<<<< HEAD

  // implement token in localStorage to Header in axiosInstance to call API POST method
  const setAuthToken = async (token) => {
    if (token) {
      axiosInstance.defaults.headers.common["x-token"] = token;
    }
  };


  const renewToken = async () => {
=======
  
  const verifyRefreshToken = async () => {
>>>>>>> 445af42aa6c72a9bcf06c6932edc2cbb107e6001
    try {
      const response = await AuthServices.refreshToken(refreshToken);
      // if token does not expired or invalid => dispatch to global state
      response && dispatch(actionCreator(REFRESH_TOKEN, response));
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  /* check if refreshToken was stored in localStorage is expired or not */
  // call API with accessToken embed to headers
  const verifyToken = async () => {
    try {
      const authorizedUser = await AuthServices.verifyToken();
      console.log(authorizedUser);
      // if token does not expired or invalid => dispatch to global state
      authorizedUser && dispatch(actionCreator(GET_USER_INFO, authorizedUser.data));
      // console.log(authorizedUser.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    verifyRefreshToken();
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
