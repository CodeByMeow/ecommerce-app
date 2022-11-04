import { LOG_OUT, SIGN_IN, SIGN_UP } from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN:
      const {token, isAuthenticated, user} = payload;
      console.log(payload);
      localStorage.setItem("token", token);
      return {...state, token, isAuthenticated, user};
    case SIGN_UP:
      return state;
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
