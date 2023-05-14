import React from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  if (pathname === "/login") return <div />;

  const onLogout = () => {
    navigate("/login", {
      replace: true,
      state: {
        logged: false,
      },
    });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" exact to="/">
            <img
              src="http://ocecolombia.co/wp-content/uploads/2012/02/logo_unicesar.png"
              alt="Logo"
              width="130px"
            />
          </Link>

          {state?.logged ? (
            <div className="user">
              <span className="username">{state?.user}</span>
              <button className="btn btn-danger" onClick={onLogout}>
                Cerrar Sesion
              </button>
            </div>
          ) : (
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-target=".navbar-collapse"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav mx-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/solicitarlibro">
                      Prestamos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/consultarlibro">
                      Consultar Libros
                    </Link>
                  </li>
                </ul>
                <div className="btnadmin btn-danger">
                  <Link
                    to="/login"
                    className="text-decoration-none text-dark botonadmin "
                  >
                    Admin
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
