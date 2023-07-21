import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const handleLinkClick = () => {
    window.location.href = '/adrproximascitasProfesor';
  };
  const handleLinkClick2 = () => {
    window.location.href = '/MiPerfil';
  };
  const handleLinkClick3 = () => {
    window.location.href = '/CitasDocente';
  };
  const handleLinkClick4 = () => {
    window.location.href = '/adrMisHorarios';
  };
  const handleLinkClick5 = () => {
    window.location.href = '/adrScorePage';
  };
  const handleLinkClick6 = () => {
    window.location.href = '/';
  };

function CitasPasadasDocente() {
    return (
      <div>
        <header>
          <img className="icon-header" src="imagenes/menu.png" alt="" />
          <h1>Atención de Citas</h1>
          <img className="icon-header" id="icon-user" src="imagenes/usuario-de-perfil.png" alt="" />
        </header>
  
        <aside>
          <nav>
            <ul>
            <li><Link to="/PPAlumno" onClick={handleLinkClick}>Principal</Link></li>
            <li><Link to="/MiPerfil" onClick={handleLinkClick2}>Perfil</Link></li>
            <li><Link to="/CitasDocente" onClick={handleLinkClick3}>Citas</Link></li>
            <li><Link to="/adrMisHorarios" onClick={handleLinkClick4}>Horarios</Link></li>
            <li><Link to="/adrScorePage" onClick={handleLinkClick5}>Calificaciones</Link></li>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <li><Link to="/adrScorePage" onClick={handleLinkClick6}>Cerrar Sesión</Link></li>
            </ul>
          </nav>
        </aside>
  
        <main>
          <div>
            <button className="programar-cita"><a href="busqueda.html" style={{ color: 'white', textDecoration: 'none' }}>Programar una cita</a></button>
            <h2>Mis Citas</h2>
          </div>
          <hr />
          <div>
            <button className="citas-pasadas"> <a href="CitasDocente" style={{ textDecoration: 'no' }}>Ver citas futuras</a></button>
            <p>Cita de asesoría reservadas:</p>
          </div>
  
          <div className="cita">
            <div>
              <button className="iniciales">AG</button>
            </div>
            <div style={{ marginLeft: '1.5cm' }}>
              <h3 style={{ margin: 0 }}><span className="docente-nombres">Adriano Guzmán</span></h3>
              <p style={{ marginTop: '0.3cm' }}><span className="docente-nombres">Estudiante de Ing. de Sistemas</span></p>
            </div>
            <div style={{ backgroundColor: 'gainsboro' }}>
              <img className="docente-foto" src="imagenes/Adriano_Guzman.jpg" alt="" />
            </div>
            <div className="cita-info">
              <p style={{ marginBottom: 0 }}><span className="cita-fecha">Lunes, 24 de abril de 2023 - 08:00 am</span></p>
              <p style={{ marginTop: 0 }}>Curso: <span className="cita-curso">Programación Web</span></p>
            </div>
            <div>
              <a href="[Enlace a la clase]" className="enlace-clase">Enlace de Zoom</a>
            </div>
            <div>
              <button className="cancelar-cita">Calificar</button>
              <p style={{ padding: '10%' }}>No calificado</p>
            </div>
          </div>
  
          <div className="cita">
            <div>
              <button className="iniciales">JG</button>
            </div>
            <div style={{ marginLeft: '1.5cm' }}>
              <h3 style={{ margin: 0 }}><span className="docente-nombres">Julio Gómez</span></h3>
              <p style={{ marginTop: '0.3cm' }}><span className="docente-nombres">Estudiante de Ing. Industrial</span></p>
            </div>
            <div style={{ backgroundColor: 'gainsboro' }}>
              <img className="docente-foto" src="imagenes/Julio_Gomez.jpg" alt="" />
            </div>
            <div className="cita-info">
              <p style={{ marginBottom: 0 }}><span className="cita-fecha">Jueves, 27 de abril de 2023 - 04:00pm</span></p>
              <p style={{ marginTop: 0 }}>Curso: <span className="cita-curso">Programación orientada a objetos</span></p>
            </div>
            <div>
              <a href="[Enlace a la clase]" className="enlace-clase">Enlace de Zoom</a>
            </div>
            <div>
              <button className="cancelar-cita">Calificar</button>
              <p style={{ padding: '10%' }}>Calificación: 4.5</p>
            </div>
          </div>
  
          <div>
            <p><span className="paginas">Página 1 de 1</span></p>
          </div>
  
        </main>
      </div>
    );
  }
  
  export default CitasPasadasDocente;