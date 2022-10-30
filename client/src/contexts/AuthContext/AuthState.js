import { useContext, useReducer } from "react";
import authReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  authLoading: false,
  user: null,
  authError: null,
};
const AuthState = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    ></AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const { state, dispatch } = useContext(AuthContext);
  return [state, dispatch];
};

export default AuthState;
