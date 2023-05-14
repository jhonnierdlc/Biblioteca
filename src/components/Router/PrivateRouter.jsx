import React from "react";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const state = useLocation();

  return state?.logged ? children : <Navigate to={"/login"} />;
};

export default PrivateRouter;
