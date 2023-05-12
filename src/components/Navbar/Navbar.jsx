import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  if (pathname === "/login") return <div />;
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
              <div className="btnadmin">
                <Link
                  to="/login"
                  className="text-decoration-none text-dark botonadmin"
                >
                  <span>Admin</span>
                  <div className="icono">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
