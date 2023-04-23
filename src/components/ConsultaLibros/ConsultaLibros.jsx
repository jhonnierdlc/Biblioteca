import React from "react";
import "./ConsultarLibro.css";

const ConsultaLibros = () => {
  return (
    <div>
      <div className="consultalibro text-center">
        <h4>Libros Disponibles</h4>
        {/* Cards para los libros */}
        <div className="cardslibros">
          <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultaLibros;
