import "./Citas.css";
import { Link } from "react-router-dom";

const handleLinkClick = () => {
    window.location.href = '/adrproximascitasAlumno';
  };
  const handleLinkClick2 = () => {
    window.location.href = '/MiPerfil';
  };
  const handleLinkClick3 = () => {
    window.location.href = '/CitasAlumno';
  };
  const handleLinkClick4 = () => {
    window.location.href = '/adrmiscitas';
  };

function CitasAlumno() {
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
                        <li><Link to="/adrproximascitasAlumno" onClick={handleLinkClick}>Principal</Link></li>
                        <li><Link to="/MiPerfil" onClick={handleLinkClick2}>Perfil</Link></li>
                        <li><Link to="/CitasAlumno" onClick={handleLinkClick3}>Citas</Link></li>
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
                    <button className="citas-pasadas"> <Link to="/adrScorePage" onClick={handleLinkClick4}>Citas Pasadas</Link></button>
                    <p>Cita de asesoría reservadas:</p>
                </div>
                <div className="cita">
                    <div>
                        <button className="iniciales">JL</button>
                    </div>
                    <div style={{ marginLeft: '1.5cm' }}>
                        <h3 style={{ margin: 0 }}><span className="docente-nombres">Juan López</span></h3>
                        <p style={{ marginTop: '0.3cm' }}><span className="docente-nombres">Mg. Ingeniería de Software</span></p>
                    </div>
                    <div style={{ backgroundColor: 'gainsboro' }}>
                        <img className="docente-foto" alt="" />
                    </div>
                    <div className="cita-info">
                        <p style={{ marginBottom: 0 }}><span className="cita-fecha">Lunes, 24 de abril de 2023 - 08:00 am</span></p>
                        <p style={{ marginTop: 0 }}>Curso: <span className="cita-curso">Programación Web</span></p>
                    </div>
                    <div>
                        <a href="[Enlace a la clase]" className="enlace-clase">Enlace de Zoom</a>
                    </div>
                    <div>
                        <button className="cancelar-cita">Cancelar cita</button>
                    </div>
                </div>
                <div className="cita">
                    <div>
                        <button className="iniciales">AS</button>
                    </div>
                    <div style={{ marginLeft: '1.5cm' }}>
                        <h3 style={{ margin: 0 }}><span className="docente-nombres">Adriana Sánchez</span></h3>
                        <p style={{ marginTop: '0.3cm' }}><span className="docente-nombres">Mg. Ingeniería de Sistemas</span></p>
                    </div>
                    <div style={{ backgroundColor: 'gainsboro' }}>
                        <img className="docente-foto" src="imagenes/Adriana_Sanchez.jpg" alt="" />
                    </div>
                    <div className="cita-info">
                        <p style={{ marginBottom: 0 }}><span className="cita-fecha">Jueves, 27 de abril de 2023 - 04:00pm</span></p>
                        <p style={{ marginTop: 0 }}>Curso: <span className="cita-curso">Programación orientada a objetos</span></p>
                    </div>
                    <div>
                        <a href="[Enlace a la clase]" className="enlace-clase">Enlace de Zoom</a>
                    </div>
                    <div>
                        <button className="cancelar-cita">Cancelar cita</button>
                    </div>
                </div>
                <div>
                    <p><span className="paginas">Página 1 de 1 </span></p>
                </div>
            </main>
        </div>
    );
}

export default CitasAlumno;