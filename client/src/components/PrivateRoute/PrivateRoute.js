import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext/AuthContext";

const PrivateRoute = ({ component: Component }) => {
  const { state } = useContext(AuthContext);
  const { isAuthenticated } = state;
  if (isAuthenticated) {
    return <Component />;
  }
  return <Navigate to="/signin" />;
};

export default PrivateRoute;
