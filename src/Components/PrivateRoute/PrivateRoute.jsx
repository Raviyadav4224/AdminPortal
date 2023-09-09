import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component, ...rest }) => {
  const { isAuthenticated } = rest;
  console.log("rest", isAuthenticated);
  return isAuthenticated ? <Component {...rest}/> : <Navigate to="/" />;
};

export default PrivateRoute;
