import { useContext, useReducer } from "react";
import authReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

// data
import { products } from "../../utils/data.js";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  authLoading: false,
  user: null,
  authError: null,
  products: products,
};
const AuthState = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

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

export const useAuthContext = () => {
  const { state, dispatch } = useContext(AuthContext);
  return [state, dispatch];
};

export default AuthState;
