import { LOG_OUT, SIGN_IN, SIGN_UP } from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN:
      return state;
    case SIGN_UP:
      return state;
    case LOG_OUT:
      return state;
    default:
      return state;
  }
};

export default authReducer;
