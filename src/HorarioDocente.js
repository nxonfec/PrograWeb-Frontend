import React, { useState } from 'react';
import './horario.css';
import { Link } from 'react-router-dom';

const handleLinkClick = () => {
  window.location.href = '/PPDocente';
};
const handleLinkClick2 = () => {
  window.location.href = '/MiPerfilDocente';
};
const handleLinkClick3 = () => {
  window.location.href = '/HorarioDocente';
};

function App() {
  const [schedule, setSchedule] = useState([]);
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setSchedule(prevSchedule => [
      ...prevSchedule,
      { day, startTime, endTime, link }
    ]);

    setDay('');
    setStartTime('');
    setEndTime('');
    setLink('');
  };

  const handleDelete = (indexToDelete) => {
    setSchedule(prevSchedule => prevSchedule.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <section className="principal11">
        <section className="section" id="principal12">
          <div className="column">
          <Link to="/PPDocente" onClick={handleLinkClick}>Principal</Link>
          <Link to="/MiPerfilDocente" onClick={handleLinkClick2}>Perfil</Link>
          <Link to="/HorarioDocente" onClick={handleLinkClick3}>Horarios</Link>
          </div>
          <p className="parrafo">SACv1.0.1-alpha</p>
        </section>
      
        <section className="section" id="principal13">
          <h1>Mis Horarios</h1>
          <hr />
          <p>Agregue sus horarios de disponibilidad durante la semana</p>
          <div className="input-container">
            
          <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="day">Día de la semana:</label>
            <input type="text" id="day" placeholder="Lunes" value={day} onChange={e => setDay(e.target.value)} />
          </div>
        
          <div className="input-wrapper">
            <label htmlFor="start-time">Hora de inicio:</label>
            <input type="text" id="start-time" placeholder="08:00am" value={startTime} onChange={e => setStartTime(e.target.value)} />
          </div>
        
          <div className="input-wrapper">
            <label htmlFor="end-time">Hora de fin:</label>
            <input type="text" id="end-time" placeholder="10:00am" value={endTime} onChange={e => setEndTime(e.target.value)} />
          </div>
        
          <div className="input-wrapper">
            <label htmlFor="section-link">Enlace de sesión:</label>
            <input type="text" id="section-link" placeholder="" value={link} onChange={e => setLink(e.target.value)} />
          </div>
          <button className="submit-button" type="submit">Agregar</button>
        </div>
      </form>
            </div>
          
          <section className="tabla">
            <table>
              <tbody>
                {schedule.map((entry, index) => (
                  <tr key={index}>
                    <td><div className="circle">{index + 1}</div></td>
                    <td>{entry.day} de {entry.startTime} a {entry.endTime}</td>
                    <td><a href={entry.link}>Enlace de sesión</a></td>
                    <td><button onClick={() => handleDelete(index)}>Borrar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;

