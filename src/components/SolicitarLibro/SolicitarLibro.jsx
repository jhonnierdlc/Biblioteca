import React from "react";
import "./SolicitarLibro.css";

const SolicitarLibro = () => {
  return (
    <div
      className="solicitarlibro col-lg-4 offset-lg-4 col-md-6 offset-md-3
    col-12"
    >
      <div className="card-header">
        <h5>Solicitar Libro</h5>
      </div>
      <div className="card-body">
        <form onSubmit={alerta}>
          <div className="form-group">
            <label htmlFor="titlebook">Titulo:</label>
            <input
              type="text"
              className="form-control"
              id="titlebook"
              placeholder="Titulo del Libro"
              minLength="5"
              maxLength="70"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipoid">Tipo Identificación:</label>
            <select name="select" id="tipoid" className="form-control">
              <optgroup label="Seleccione">
                <option value="cc">Cédula de Ciudadania</option>
                <option value="ti">Tarjeta de Identidad</option>
                <option value="ccex">Cédula de Extranjería</option>
              </optgroup>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="idsolicitante">Identificación:</label>
            <input
              type="number"
              className="form-control"
              id="idsolicitante"
              placeholder="Identificación del Solicitante"
              min="100000"
              max="9999999999"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fechadevolucion">Fecha Devolución:</label>
            <input type="date" className="form-control" id="fechadevolucion" />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              name="descipcion"
              id="descripcion"
              className="form-control"
              placeholder="Descripción de Solicitud del libro"
              maxLength="300"
            ></textarea>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              required
            />

            <label className="form-check-label" htmlFor="exampleCheck1">
              Aceptar{" "}
              <a href="https://unicesar.edu.co/" required>
                Terminos y Condiciones
              </a>
            </label>
          </div>
          <div className="boton-submit">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function alerta() {
  var titulo = document.getElementById("titlebook").value;
  var tipoid = document.getElementById("tipoid").value;
  var id = document.getElementById("idsolicitante").value;
  var fechadevolucion = document.getElementById("fechadevolucion").value;
  var descripcion = document.getElementById("descripcion").value;
  console.log(id);
  console.log(fechadevolucion);
  window.alert("Solicitud Enviada Correctamente " + titulo);
}

export default SolicitarLibro;
