import React from "react";
import { Navbar } from "react-bootstrap";
import { Route, Router, Routes } from "react-router";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import ConsultaLibros from "../ConsultaLibros/ConsultaLibros";
import SolicitarLibro from "../SolicitarLibro/SolicitarLibro";
import Login from "../LoginAdmin/Login";
import HomeAdmin from "../Admin/Home/HomeAdmin";
import PrivateRouter from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/consultarlibro" element={<ConsultaLibros />} />
        <Route path="/solicitarlibro" element={<SolicitarLibro />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />
      </Routes>
      {/*  */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
