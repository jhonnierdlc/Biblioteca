import React from "react";
import "./HomeAdmin.css";

const HomeAdmin = () => {
  return (
    <div
      className="admin col-lg-4 offset-lg-4 col-md-6 offset-md-3
    col-12"
    >
      <div className="card-header">
        <h4>Agregar Libro</h4>
      </div>

      <div className="aggLib card-body align-items-center">
        <div className="form-registro">
          <form onSubmit={alerta()}>
            <div className="form-group ">
              <label>Isbn:</label>
              <input
                type="number"
                name="isbn"
                id="isbn"
                required
                max="9999999999"
                className="form-control"
                placeholder="Isbn del libro"
              />
            </div>
            <div className="form-group ">
              <label> Titulo:</label>
              <input
                type="text"
                name="titulo"
                id="titulo"
                minLength="5"
                maxLength="70"
                className="form-control"
                placeholder="Titulo del libro"
                required
              />
            </div>
            <div className="form-group">
              <label>Categoria:</label>
              <select name="categoria" id="categoria" className="form-control">
                <optgroup label="Seleccione">
                  <option value="Historia">Historia</option>
                  <option value="Geografia">Geografia</option>
                  <option value="Matematicas">Matemáticas</option>
                  <option value="Cosmologia">Cosmologia</option>
                  <option value="Psicologia">Psicologia</option>
                  <option value="Sociologia">Sociologia</option>
                  <option value="Ingenieria">Ingeniería</option>
                </optgroup>
              </select>
            </div>
            <div className="form-group">
              <label>Autor:</label>
              <input
                className="form-control"
                type="text"
                name="autor"
                id="autor"
                minLength="4"
                maxLength="40"
                placeholder="Anónimo"
              />
            </div>
            <div className="form-group">
              <label>Descripción</label>
              <textarea
                name="descipcion"
                id="descripcion"
                className="form-control"
                placeholder="Descripción de Solicitud del libro"
                maxLength="300"
              ></textarea>
            </div>
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
  function alerta() {
    alert("Libro Guardado Correctamente");
  }
};

export default HomeAdmin;
