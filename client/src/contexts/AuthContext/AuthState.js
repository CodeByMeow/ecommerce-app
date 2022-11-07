import { useEffect, useContext, useReducer } from "react";
import authReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

import { SIGN_IN, GET_USER_INFO, LOG_OUT } from "../../contexts/types.js";
import actionCreator from "../../utils/actionCreator.js";
import AuthServices from "../../services/authService.js";
import axiosInstance from "../../services/axiosInstance.js";

const initialState = {
  token: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  isAuthenticated: !!localStorage.getItem("token") || false,
  authLoading: false,
  user: null,
  authError: null,
};

const AuthState = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const {refreshToken} = state;
  // console.log("refreshToken: ", refreshToken);

  // implement token in localStorage to Header in axiosInstance to call API POST method
  const setAuthToken = async (refreshTok) => {
    if (refreshTok) {
      axiosInstance.defaults.headers.common["refreshToken"] = refreshTok;
    }
  };

  /* check if token was stored in localStorage is expired or not */
  const verifyToken = async () => {    
    try {
      const authorizedRefreshToken = await AuthServices.verifyRefreshToken(refreshToken);
      console.log(authorizedRefreshToken.data.msg);

      // if token does not expired or invalid => dispatch to global state
      dispatch(actionCreator(GET_USER_INFO, authorizedRefreshToken.data));
    } catch (err) {
      console.log(err.response);
      err.response.data.msg
        ? console.log(err.response.data.msg)
        : console.log(err.response.data);
      // dispatch(actionCreator(LOG_OUT));
    }
  };

  useEffect(() => {
    setAuthToken(state.refreshToken);
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
