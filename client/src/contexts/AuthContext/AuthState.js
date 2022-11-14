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

  
  const verifyRefreshToken = async () => {
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
