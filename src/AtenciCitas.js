import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h4 className="text-white">Collapsed content</h4>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>

      <div className="navbar-center">
        <h1>Atencion de Citas</h1>
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
          <img src="./imagenes/usuario-de-perfil.png" alt="Call Logo" />
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline"></span>
              </a>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="EncabeyLat.html">
                  Principal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="busqueda.html">
                  Busqueda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="CitasDocente.html">
                  Citas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="NotasDocente.html">
                  Calificaciones
                </a>
              </li>
              <br />
              <li className="nav-item">
                <a className="nav-link" href="PInicio.html">
                  Cerrar Sesion
                </a>
              </li>
              <hr />
            </div>
          </div>
          <div className="col py-3">
            <h1>Mis horarios</h1>
            <hr size="4px" color="black" />
            <div className="container-fluid py-1">
              <span className="comentario">Agregue sus horarios de disponibilidad durante la semana</span>
            </div>

            <div className="row">
              <div className="col-sm">
                <div>
                  <label htmlFor="dayinput" className="form-label">
                    Día de la semana
                  </label>
                </div>

                <div>
                  <input type="text" className="form-label" id="dayinput" placeholder="Lunes" />
                </div>
              </div>
              <div className="col-sm">
                <div>
                  <label htmlFor="ihourinput" className="form-label">
                    Hora Inicio
                  </label>
                </div>

                <div>
                  <input type="text" className="form-label" id="ihourinput" placeholder="08:00 am" />
                </div>
              </div>
              <div className="col-sm">
                <div>
                  <label htmlFor="ohourinput" className="form-label">
                    Hora Fin
                  </label>
                </div>

                <div>
                  <input type="text" className="form-label" id="ohourinput" placeholder="08:00 am" />
                </div>
              </div>
              <div className="col-sm">
                <div>
                  <label htmlFor="linkinput" className="form-label">
                    Enlace sesión
                  </label>
                </div>

                <div>
                  <input type="text" className="form-label" id="linkinput" placeholder="08:00 am" />
                </div>
              </div>
              <div className="col-sm">
                <button type="button" className="btn btn-light">
                  Agregar
                </button>
              </div>
            </div>

            <div className="barra_rosa">
              <div className="row">
                <div className="col-6 col-md-1">
                  <span className="badge">1</span>
                </div>
                <div className="col-12 col-sm-6 col-md-8">
                  Lunes de 08:00 pm a 10:00 pm
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="barra_rosa">
              <div className="row">
                <div className="col-6 col-md-1">
                  <span className="badge">2</span>
                </div>
                <div className="col-12 col-sm-6 col-md-8">
                  Lunes de 4:00 pm a 6:00 pm
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="barra_rosa">
              <div className="row">
                <div className="col-6 col-md-1">
                  <span className="badge">3</span>
                </div>
                <div className="col-12 col-sm-6 col-md-8">
                  Lunes de 5:00 pm a 8:00 pm
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="JAVA/Acita.js"></script>
    </div>
  );
}

export default App;