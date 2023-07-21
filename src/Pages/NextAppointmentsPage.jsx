import AppointmentDescription from "../Components/AppointmentDescription";
import IMF from "../img/user.png";
import {useDispatch, useSelector} from "react-redux";
import CustomInput from "../Components/CustomInput";
import ScheduleDescription from "../Components/ScheduleDescription";
import React, {useEffect, useState} from "react";
import FormatHour from "../utils/formatHour";
import {DAYS} from "../utils/constants";
import {URL_API} from "../constants";
import querystring from "querystring";
const NextAppointmentsPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    if (!user) {
        window.location.href = "/";
    }

    const signOut = () => {
        dispatch({ type: "UPDATE_USER", payload: null });
        window.location.href = "/";
    }

    const [schedules, setSchedules] = useState([]);
    const [citas, setCitas] = useState([]);
    const [actualAppointments, setActualAppointments] = useState(true);

    function formatTimestampToDateTime(timestamp) {
        const dateObj = new Date(timestamp);

        // Obtenemos los componentes de la fecha y hora
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // Los meses en JavaScript se indexan desde 0 (enero) hasta 11 (diciembre)
        const year = dateObj.getFullYear();
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();

        // Función para agregar un cero delante de los números menores a 10 (para que sea formato "08" en lugar de "8")
        const addLeadingZero = (num) => (num < 10 ? '0' : '') + num;

        // Función para obtener la cadena de "am" o "pm" según las horas
        const getAmPm = (hours) => (hours >= 12 ? 'pm' : 'am');

        // Formateamos la fecha y hora en el formato deseado
        const formattedDate = `${addLeadingZero(day)}/${addLeadingZero(month)}/${year}`;
        const formattedTime = `${addLeadingZero(hours)}:${addLeadingZero(minutes)} ${getAmPm(hours)}`;

        return `${formattedDate} ${formattedTime}`;
    }
    const getSchedules = async (teacherId) => {
        const apiResponse = await fetch(`${URL_API}/teacher/${user.user_id}/schedule/list`);
        const response = await apiResponse.json();
        setSchedules(response ?? []);
    }

    const getAppointments = async () => {
        const filters = {
            type: "teacher"
        }

        const date = new Date();

        if (actualAppointments) {
            filters.creationDateFrom = date.getTime();
        } else {
            filters.creationDateTo = date.getTime();
        }

        const queryString = querystring.stringify(filters);
        const apiResponse = await fetch(`${URL_API}/advisories/${user.user_id}?${queryString}`);
        const response = await apiResponse.json();
        console.log(response);
        const citas = response.map( (item) => {
            console.log(item);
            return {
                fullName: item.student_name,
                date: formatTimestampToDateTime(parseInt(item.date_timestamp)),
                link: item.link
            }
        } )
        setCitas(citas);
    }

    useEffect(() => {
        Promise.allSettled([
            getSchedules(),
            getAppointments()
        ]);
    }, []);

    const [scheduleForm, setScheduleForm] = useState(
        {
            day: '',
            initHour: '',
            endHour: '',
            link: ''
        }
    )

    const getTitle = (day, initHour, endHour) => {
        const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1)
        const formattedInitHour = FormatHour(initHour)
        const formattedEndHour = FormatHour(endHour)
        return `${capitalizedDay} de ${formattedInitHour} a ${formattedEndHour}`
    }

    const onAddSchedule = async (event) => {
        event.preventDefault();

        // Validaciones
        if(!DAYS.includes(scheduleForm.day.toLocaleLowerCase())){
            alert('El día está mal escrito o no es válido.')
            return;
        }
        if(scheduleForm.initHour == ""){
            alert('Digite una hora inicial')
            return;
        }
        if(scheduleForm.endHour == ""){
            alert('Digite una hora final')
            return;
        }
        if(scheduleForm.initHour > scheduleForm.endHour){
            alert('La hora inicial debe ser menor a la hora final')
            return;
        }
        if(scheduleForm.link == ""){
            alert('Escriba el link de la reunión')
            return;
        }

        const createApiResponse = await fetch(`${URL_API}/teacher/${user.user_id}/schedule`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scheduleForm)
        });

        if (createApiResponse.ok) {
            console.log("Horario agregada con éxito");
            await getSchedules();
        }

        setScheduleForm({
            day: '',
            initHour: '',
            endHour: '',
            link: ''
        })
    }

    const onDeleteSchedule = async (scheduleId) => {
        const deleteApiResponse = await fetch(`${URL_API}/teacher/${user.user_id}/schedule/${scheduleId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (deleteApiResponse.ok) {
            const response = await deleteApiResponse.json();
            console.log(response);
            await getSchedules();
        }
    }

    const onChangeInput = (value, type) => {
        setScheduleForm({...scheduleForm, [type]: value})
    }

    const onToggleAppointments = async (event) => {
        setActualAppointments(!actualAppointments);
        await getAppointments();
    }

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
          <img src={IMF} style={{ height: "40px", width: "40px" }}></img>
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
            <a className="custom-link" href="#">
              Principal
            </a>
          </p>
          <p>
            <a className="custom-link" href="/MiPerfilDocente">
              Perfil
            </a>
          </p>
          <p>
            <a className="custom-link" href="/CitasDocente">
              Citas
            </a>
          </p>
          <p>
            <a className="custom-link" href="/adrMisHorarios">
              Horario
            </a>
          </p>
          <p>
            <a className="custom-link" href="/adrScorePage">
              Calificacion
            </a>
          </p>
          <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/><br/><br/><br/><br/><br/><br/>
              <p><a className="custom-link" onClick={signOut}>Cerrar Sesión</a></p>
        </aside>
        <div style={{ flex: 1, height: "100%", padding: "16px" }}>
          <div className="container">
            <h3>Bienvenido, Profesor { user.name }!</h3>
            <hr></hr>

            <div
              style={{
                padding: "16px",
                backgroundColor: "#F3EDF7",
                minHeight: "35vh",
              }}
            >
                <h4>{ actualAppointments ? "Próximas": "Anteriores" } Citas</h4>

                <div className='row mt-2'>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-outline-primary me-md-2" type="button" onClick={onToggleAppointments}>Ver citas {actualAppointments ? "pasadas" : "próximas"}</button>
                    </div>
                </div>

              <div className="row">
                {citas.map((item, idx) => (
                  <div className="col-sm-12 col-md-12 col-lg-6 mt-4" key={idx}>
                    <AppointmentDescription
                      fullName={item.fullName}
                      date={item.date}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-4"
              style={{
                padding: "16px",
                backgroundColor: "#F3EDF7",
                minHeight: "35vh",
              }}
            >
                <div className="container">
                    <h3>Mis Horarios</h3>
                    <hr></hr>
                    <p>Agregue sus horarios de disponibilidad durante la semana</p>

                    <div className="row">
                        <div className="col-2">
                            <CustomInput label="Día de Semana" type="text" value={scheduleForm.day} onChange={(text) => onChangeInput(text, 'day')}/>
                        </div>
                        <div className="col-2">
                            <CustomInput label="Hora Inicio" type="time" value={scheduleForm.initHour} onChange={(text) => onChangeInput(text, 'initHour')}/>
                        </div>
                        <div className="col-2">
                            <CustomInput label="Hora Fin" type="time" value={scheduleForm.endHour} onChange={(text) => onChangeInput(text, 'endHour')}/>
                        </div>
                        <div className="col-2">
                            <CustomInput label="Enlace de Sesión" type="text" value={scheduleForm.link} onChange={(text) => onChangeInput(text, 'link')}/>
                        </div>
                        <div className="col-2">
                            <button onClick={onAddSchedule} className="custom-btn btn-secondary">Agregar</button>
                        </div>
                    </div>

                    <div>
                        {schedules.map((item, idx) => (
                            <ScheduleDescription
                                key={idx}
                                index={idx + 1}
                                title={getTitle(item.day, item.initHour, item.endHour)}
                                onDelete={async ()=> await onDeleteSchedule(item.id)}/>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextAppointmentsPage;
