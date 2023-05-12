import React, { useEffect, useState } from "react";
import "./AlgunosLibros.css";
import axios from "axios";

const AlgunosLibros = () => {
  const [contentLibro, setContentLibro] = useState(false);

  useEffect(() => {
    axios
      .get("https://64546c7fc18adbbdfeb5f084.mockapi.io/libros/muestraLibros")
      .then((response) => setContentLibro(response.data));
  }, []);

  return (
    <div className="algunoslibros row col">
      <div className="containerlib col-sm-6">
        <div className="libro ">
          {!contentLibro
            ? "Cargando..."
            : contentLibro.map((contentLibro, index) => {
                return (
                  <div className="item">
                    <h6>{contentLibro.titulo}</h6>
                    <img src={contentLibro.imagen} alt="Imagen" />
                  </div>
                );
              })}
        </div>
      </div>
      <div className="descripcionlib col-sm-6">
        <h5>Algunos Libros</h5>
      </div>
    </div>
  );
};

export default AlgunosLibros;
