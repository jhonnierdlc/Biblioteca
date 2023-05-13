import React from "react";
import "./Home.css";
import AlgunosLibros from "./SliderLibros/AlgunosLibros";

const Home = () => {
  return (
    <div className="home">
      <div className="pantallainicio row">
        <div className="infobiblio col-izq col-sm ">
          <h3>Biblioteca Unicesar</h3>
          <p>
            Apoyamos la labor académica de la Universidad Popular del Cesar y
            otras instituciones educativas en el país
          </p>
        </div>
        <div className="imginicio col-der col-sm">
          <img
            className="img-fluid rounded d-block m-l-none"
            src="https://images.hola.com/imagenes/estar-bien/20181009131055/libros-de-salud/0-607-970/Libros-Salud-2-m.jpg?tx=w_680"
            alt="imagen Libro"
          />
        </div>
      </div>

      <AlgunosLibros />
    </div>
  );
};

export default Home;
