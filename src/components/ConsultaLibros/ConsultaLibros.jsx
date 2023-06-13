import React, { useEffect, useState } from "react";
import "./ConsultarLibro.css";
import axios from "axios";

const ConsultaLibros = ({ libros }) => {
  const [libro, setlibro] = useState(false);

  useEffect(() => {
    axios
      .get("https://64546c7fc18adbbdfeb5f084.mockapi.io/libros/libros")
      .then((response) => setlibro(response.data));
  }, []);

  return (
    <div className="row containerlib">
      <h4>Libros Disponibles</h4>
      <div className="consultalibro text-center card-group ">
        {!libro
          ? "Cargando.."
          : libro.map((libro, index) => {
              return (
                <div className="cardslibros col-sm-2">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={libro.imagen}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{libro.titulo}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Ver
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ConsultaLibros;
