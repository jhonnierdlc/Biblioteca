import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="font">
        <div className="loginadmin">
          <main role="main" className="container my-auto">
            <div className="login row">
              <div
                id="login"
                className="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12"
              >
                <h2 className="text-center">Administrador</h2>
                <img
                  className="img-fluid mx-auto d-block rounded"
                  src="https://static.thenounproject.com/png/2665047-200.png"
                  alt="Img Inicio Sesión"
                />

                <form id="formlogin">
                  <div className="form-group">
                    <label HtmlFor="usuario">Usuario</label>
                    <input
                      id="usuario"
                      name="usuario"
                      className="form-control"
                      type="user"
                      placeholder="Usuario"
                    />
                  </div>
                  <div className="form-group">
                    <label HtmlFor="password">Contraseña</label>
                    <input
                      id="password"
                      name="password"
                      className="form-control"
                      type="password"
                      placeholder="Contraseña"
                    />
                  </div>
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary mb-2">
                      Entrar
                    </button>
                  </div>

                  <br />
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
