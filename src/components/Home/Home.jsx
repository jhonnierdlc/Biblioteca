import React from "react";
import "./Home.css";

const Home = ({ libro }) => {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e0fdd6"
          fillOpacity="1"
          d="M0,32L40,42.7C80,53,160,75,240,74.7C320,75,400,53,480,69.3C560,85,640,139,720,149.3C800,160,880,128,960,112C1040,96,1120,96,1200,90.7C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <div className="algunoslibros row">
        <div className="containerlib col-sm">
          {!libro
            ? "Cargando.."
            : libro.map((libro, index) => {
                return (
                  <div className="libro">
                    <div className="item">
                      <h6>{libro.titulo}</h6>
                      <img src="" alt="Imagen" />
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cumque, qui nemo. Enim unde temporibus eveniet est
                        quae quasi dolores voluptatem quibusdam incidunt quos
                        recusandae nemo commodi
                      </p>
                    </div>
                    <div className="item">
                      <h6>Titulo</h6>
                      <img src="" alt="Imagen" />
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cumque, qui nemo. Enim unde temporibus eveniet est
                        quae quasi dolores voluptatem quibusdam incidunt quos
                        recusandae nemo commodi
                      </p>
                    </div>
                    <div className="item">
                      <h6>Titulo</h6>
                      <img src="" alt="Imagen" />
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cumque, qui nemo. Enim unde temporibus eveniet est
                        quae quasi dolores voluptatem quibusdam incidunt quos
                        recusandae nemo commodi
                      </p>
                    </div>
                    <div className="item">
                      <h6>Titulo</h6>
                      <img src="" alt="Imagen" />
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cumque, qui nemo. Enim unde temporibus eveniet est
                        quae quasi dolores voluptatem quibusdam incidunt quos
                        recusandae nemo commodi
                      </p>
                    </div>
                  </div>
                );
              })}
          <div className="descripcionlib col-sm">
            <h5>Algunos Libros Disponibles</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
