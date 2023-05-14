import React from "react";
import "./HomeAdmin.css";

const HomeAdmin = () => {
  return (
    <div className="admin">
      <h3>Bienvenido Admin</h3>
      <div className="container_admin row col-12">
        <div className="agregarlibro col-6">
          <img
            src="https://cdn.icon-icons.com/icons2/3251/PNG/512/book_add_regular_icon_203945.png"
            alt="Agrgar Libro"
            className="imgagregar"
          />
          <h6>Agregar Libro</h6>
        </div>
        <div className="revisarsolicitudes col-6">
          <img
            src="https://img.freepik.com/vector-premium/revisar-informacion-solicitud-empleo-presenta-capacidad-que-empresa-acuerdo-puesto_690577-38.jpg?w=2000"
            alt="Revisar soli"
            className="imgrevisar"
          />
          <h6>Revisar Solicitudes</h6>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
