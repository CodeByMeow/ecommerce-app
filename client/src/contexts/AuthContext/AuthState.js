import { useEffect, useState, useReducer } from "react";
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
      axiosInstance.defaults.headers.common["x-token"] = token;
    }
  };


  const renewToken = async () => {
    try {
      const authorizedRefreshToken = await AuthServices.renewToken(
        refreshToken
      );
      // generate new accessToken => update localStorage
      dispatch(actionCreator(RENEW_TOKEN, authorizedRefreshToken.data));
      // setAuthToken(authorizedRefreshToken.data.token);
    } catch (err) {      
      // dispatch(actionCreator(LOG_OUT));
      console.log(err.response);
      /* err.response
        ? console.log(err.response.data.msg)
        : console.log(err.response.data); */
    }
  };

  /* check if refreshToken was stored in localStorage is expired or not */
  // call API with accessToken embed to headers
  const verifyToken = async () => {
    try {
      const authorizedUser = await AuthServices.verifyToken();
      // if token does not expired or invalid => dispatch to global state
      dispatch(actionCreator(GET_USER_INFO, authorizedUser.data));
    } catch (err) {      
        console.log(err.response);
       if (err.response.status === 401) {
          renewToken();
      }
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
