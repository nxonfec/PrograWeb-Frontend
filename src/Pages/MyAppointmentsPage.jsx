import { useState } from "react";
import CustomCard from "../Components/CustomCard";
import CustomModalScore from "../Components/CustomModalScore";
import IMF from "../img/user.png";
import { useNavigate } from "react-router-dom";

const APPOINTMENTS = [
  {
    fullName: "Juan López",
    position: "Mg. Ingeniería de Software",
    date: "Lunes, 24 de abril de 2023 - 08:00 am",
    course: "Programación Web",
    link: "#",
    img: "/imgs/image3.png",
    score: 0,
  },
  {
    fullName: "Adriana Sánchez",
    position: "Mg. Ingeniería de Sistemas",
    date: "Jueves, 27 de abril de 2023 - 04:00 pm",
    course: "Programación orientada a objetos",
    link: "#",
    img: "/imgs/image2.png",
    score: 4.5,
  },
];

export default function MyAppointmentsPage() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState(APPOINTMENTS);
  const [selectedAppointment, setSelectedAppointment] = useState(0); //Se maneja el indice del appointment a calificar

  const onClickScore = (score) => {
    let copyAppointments = [...appointments]; //Se realiza una copia de appointments
    copyAppointments[selectedAppointment].score = score; //Se setea el score dado el índice
    setAppointments(copyAppointments);
    setShowModal(false);
  };

  const onScheduleAppointment = () => {
    //Especificar la ruta a la que debe redirigirse
    navigate("/#");
  };

  const onSeePastAppointments = () => {
    //Especificar la ruta a la que debe redirigirse
    navigate("/CitasAlumno");
  };

  const onClickCard = (page = "#") => {
    //Pasar como parámetro la página a la cuál debe redirigir la cita
    //Esto permite abrir en otra pestaña
    window.open("www.google.com", "_blank");
  };

  return (
    <div>
      <div
        style={{
          height: "64px",
          width: "100%",
          padding: "8px 4px",
          backgroundColor: "#F3EDF7",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <a href="./adrmiperfil" style={{ marginRight: "10px" }}>
          <img alt="Descripcion" src={IMF} style={{ height: "40px", width: "40px" }}></img>
        </a>
      </div>
      <div style={{ display: "flex", height: "calc(100vh - 64px)" }}>
        <aside
          style={{
            width: "146px",
            height: "100%",
            backgroundColor: "#D9D9D9",
            paddingLeft: "32px",
            paddingTop: "32px",
          }}
        >
          <p>
            <a className="custom-link" href="/adrproximascitasAlumno">
              Principal
            </a>
          </p>
          <p>
            <a className="custom-link" href="/miperfil">
              Perfil
            </a>
          </p>
          <p>
            <a className="custom-link" href="/adrmiscitas">
              Citas
            </a>
          </p>
        </aside>
        <div style={{ flex: 1, height: "100%", padding: "16px" }}>
          <div className="container">
            {showModal ? (
              <CustomModalScore
                onClickScore={(score) => {
                  onClickScore(score);
                }}
              />
            ) : (
              <></>
            )}
            <div className="flex items-center justify-between">
              <h3>Mis Citas</h3>
              <button className="custom-btn" onClick={onScheduleAppointment}>
                Programar una Cita
              </button>
            </div>
            <hr></hr>
            <div className="flex items-center justify-between">
              <span>Citas de asesoría reservadas:</span>
              <button
                className="custom-btn btn-secondary"
                onClick={onSeePastAppointments}
              >
                Ver citas futuras
              </button>
            </div>

            <div className="row">
              {appointments.map((item, idx) => (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-4" key={idx}>
                  <CustomCard
                    fullName={item.fullName}
                    position={item.position}
                    date={item.date}
                    course={item.course}
                    link={item.link}
                    img={item.img}
                    score={item.score}
                    onScore={() => {
                      setShowModal(true);
                      setSelectedAppointment(idx);
                    }}
                    onClickCard={() => onClickCard("#")} //Acá es donde se pasa el parámetro
                  />
                </div>
              ))}
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
