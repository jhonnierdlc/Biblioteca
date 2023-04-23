import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home row">
      <div className="col-izq col-6">
        <h3>Biblioteca Unicesar</h3>
        <p>
          Apoyamos la labor académica de la Universidad Popular del Cesar y
          otras instituciones educativas en el país
        </p>
      </div>
      <div className="col-der col-6">
        <img
          className="img-fluid rounded d-block m-l-none"
          src="https://images.hola.com/imagenes/estar-bien/20181009131055/libros-de-salud/0-607-970/Libros-Salud-2-m.jpg?tx=w_680"
          alt="imagen Libro"
        />
      </div>
      <h5>Algunos Libros Disponibles</h5>
      <p>Libros</p>
    </div>
  );
};

export default Home;
