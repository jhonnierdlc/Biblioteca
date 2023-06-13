import React from "react";
import { Navigate, Route, useLocation } from "react-router";
import AgregarLibro from "../Admin/AgegrarLibro/AgregarLibro";

const PrivateRouter = ({ children }) => {
  const state = useLocation();

  return state?.logged ? (
    children
  ) : (
    <>
      <Navigate to={"/login"} />
      <Route path="/registrolibro" element={<AgregarLibro />}></Route>
    </>
  );
};

export default PrivateRouter;
