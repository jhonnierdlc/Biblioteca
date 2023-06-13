import React from "react";
import { Route, Routes } from "react-router";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import ConsultaLibros from "../ConsultaLibros/ConsultaLibros";
import SolicitarLibro from "../SolicitarLibro/SolicitarLibro";
import Login from "../LoginAdmin/Login";
import HomeAdmin from "../Admin/Home/HomeAdmin";
import PrivateRouter from "./PrivateRouter";
import AgregarLibro from "../Admin/AgegrarLibro/AgregarLibro";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/consultarlibro" element={<ConsultaLibros />} />
        <Route path="/solicitarlibro" element={<SolicitarLibro />} />
      </Routes>
      {/*  */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Routes element={<PrivateRouter islogged={true} />}>
        <Route path="/homeadmin" element={<HomeAdmin />} />
        <Route path="/registrolibro" element={<AgregarLibro />} />
      </Routes>
      <Footer />
    </>
  );
};
