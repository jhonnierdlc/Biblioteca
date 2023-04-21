import React from "react";

function Login() {
  return (
    <div>
      <div className="font">
        <div className="inicioAdmin">
          <main role="main" className="container my-auto">
            <div className="row">
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
                    <label for="usuario">Usuario</label>
                    <input
                      id="usuario"
                      name="usuario"
                      className="form-control"
                      type="user"
                      placeholder="Usuario"
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Contraseña</label>
                    <input
                      id="password"
                      name="password"
                      className="form-control"
                      type="password"
                      placeholder="Contraseña"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary mb-2">
                    Entrar
                  </button>
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
