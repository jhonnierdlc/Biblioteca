import React from "react";
import "./AgregarLibro.css";

const AgregarLibro = () => {
  return (
    <div className="aggLib">
      <h3>Agregar Libro</h3>
      <div className="form-registro">
        <form>
          <div className="form-group">
            <label>Isbn:</label>
            <input
              type="number"
              name="isbn"
              id="isbn"
              required
              max="9999999999"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label> Titulo:</label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              minLength="5"
              maxLength="70"
              className="form-control"
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
              defaultValue="Anónimo"
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
        </form>
      </div>
    </div>
  );
};

export default AgregarLibro;
