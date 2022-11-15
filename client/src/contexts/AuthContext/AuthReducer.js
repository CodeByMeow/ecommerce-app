import { LOG_OUT, SIGN_IN, SIGN_UP, GET_USER_INFO, REFRESH_TOKEN } from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN:
      const { token, refreshToken, isAuthenticated, user } = payload;
      console.log(payload);
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);      
      // localStorage.setItem("orders", JSON.stringify(user.orders));
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
      // console.log(payload);
      return {
        ...state,
        user: user,
      };
    }
    case REFRESH_TOKEN: {
      // console.log(payload);
      const { token} = payload;      
      localStorage.setItem("token", token);
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
