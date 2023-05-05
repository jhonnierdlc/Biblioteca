import React, { useState, useEffect } from "react";
import axios from "axios";
import ConsultaLibros from "../ConsultaLibros/ConsultaLibros";
import Home from "../Home/Home";

const Libro = () => {
  const [libro, setLibros] = useState([]);
  useEffect(() => {
    axios
      .get("https://64546c7fc18adbbdfeb5f084.mockapi.io/libros/libros")
      .then((response) => setLibros(response.data.libro));
  }, []);

  return (
    <>{libro.length === 0 ? <p>loading...</p> : <Home libros={libro} />}</>
  );
};
