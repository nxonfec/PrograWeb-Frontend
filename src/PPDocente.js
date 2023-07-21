// import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./estiloPP.css";
import imagen2 from './usuario-de-perfil.png';

import { Link } from 'react-router-dom';

const handleLinkClick = () => {
    window.location.href = '/';
  };

  const handleLinkClick2 = () => {
    window.location.href = '/PPDocente';
  };

const handleLinkClick3 = () => {
  window.location.href = '/MiPerfilDocente';
};

const handleLinkClick4 = () => {
  window.location.href = '/HorarioDocente';
};

const handleLinkClick5 = () => {
  window.location.href = '/CitasDocente';
};

const PaginaPrincipalDocente = () => {
  return (
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <div className="navbar-center">
          <h1>Página Principal</h1>
        </div>
        <nav className="navbar">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-right">
            <Link to="/" onClick={handleLinkClick}> 
            <img src={imagen2} onClick={handleLinkClick} alt="imagen" className="imagen" />
            </Link>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline"></span>
              </a>
              <li className="nav-item">
              <Link to="/PPDocente" onClick={handleLinkClick2}>Principal</Link>
              </li>
              <li className="nav-item">
              <Link to="/MiPerfilDocente" onClick={handleLinkClick3}>Perfil</Link>
              </li>
              <li className="nav-item">
              <Link to="/HorarioDocente" onClick={handleLinkClick4}>Horarios</Link>
              </li>
              <li className="nav-item">
              <Link to="/CitasDocente" onClick={handleLinkClick5}>Citas</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="NotasDocente.html">
                  Calificaciones
                </a>
              </li>

              <li className="nav-item">
              {/* <Link to="/" onClick={handleLinkClick}>Cerrar Sesión</Link> */}
              </li>
              <hr />
            </div>
          </div>
          <div className="col py-3">
            <h1>Bienvenido, profesor Juan</h1>
            <hr size="4px" color="black" />
            <div className="container-fluid py-1">
              <div style={{ background: "rgb( 243, 237, 247)" }}>
                <p className="comentario">Próximas citas</p>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <p style={{ fontWeight: "bold" }}>Alfonso Carrion</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="40"
                        fill="currentColor"
                        className="aB"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                      </svg>
                      <p style={{ marginLeft: "20%" }}>18/06/2023 08:00 am</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p style={{ fontWeight: "bold" }}>Anthony Lopez</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="40"
                        fill="currentColor"
                        className="aB"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                      </svg>
                      <p style={{ marginLeft: "20%" }}>18/06/2023 08:00 am</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaPrincipalDocente;