import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function NoCitas() {
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
              <li><a href="PAlumno.html">Principal</a></li>
              <li><a href="miperfilAlumno.html">Perfil</a></li>
              <li><a href="CitasAlumno.html">Citas</a></li>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br />
              <li><a href="PInicio.html">Cerrar Sesion</a></li>
            </ul>
          </nav>
        </aside>
  
        <main>
          <div>
            <h2>Mis Citas</h2>
          </div>
          <hr />
          <div>
            <p style={{ marginLeft: '7cm' }}>Actualmente no tiene citas de asesoría reservadas</p>
            <button className="centrar"><a href="busqueda.html" style={{ color: 'white', textDecoration: 'none' }}>Programar una cita</a></button>
          </div>
  
          <div>
            <p><span className="paginas">Página 1 de 1 </span></p>
          </div>
  
        </main>
      </div>
    );
  }
  
  export default NoCitas;