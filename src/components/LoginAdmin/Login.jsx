import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function Login() {
  const navegate = useNavigate();

  const { user, password, onInputChange, onResetForm } = useForm({
    user: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault();
    navegate("/homeAdmin", {
      replace: true,
      state: {
        logged: true,
        user,
      },
    });
    onResetForm();
  };

  const [login, setlogin] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/")
      .then((response) => setlogin(response.data));
  }, []);

  return (
    <div>
      <div className="font">
        <div className="loginadmin">
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61449.png?w=360"
              alt="img volver a home"
            />
          </Link>
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

                <form id="formlogin" onSubmit={onLogin}>
                  <div className="form-group">
                    <label HtmlFor="usuario">Usuario</label>
                    <input
                      id="user"
                      name="user"
                      value={user}
                      onChange={onInputChange}
                      className="form-control"
                      type="user"
                      placeholder="Usuario"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label HtmlFor="password">Contraseña</label>
                    <input
                      id="password"
                      name="password"
                      onChange={onInputChange}
                      className="form-control"
                      type="password"
                      placeholder="Contraseña"
                      required
                    />
                  </div>
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-dark mb-2">
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
