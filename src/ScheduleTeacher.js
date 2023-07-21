import {useDispatch, useSelector} from "react-redux";
import IMF from "./img/user.png";
import React, {useEffect, useState} from "react";
import ScheduleDescription from "./Components/ScheduleDescription";
import {URL_API} from "./constants";
import FormatHour from "./utils/formatHour";
import CustomChip from "./Components/CustomChip";
import {useParams} from "react-router-dom";
import * as querystring from "querystring";

const ScheduleTeacher = ({ match }) => {
    // Acceder al valor del parámetro "id" desde props.match.params
    const { id } = useParams();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    if (!user) {
        window.location.href = "/";
    }

    const [schedules, setSchedules] = useState([]);
    const [teacher, setTeacher] = useState({
        name: "Prueba",
        lastname: "Web"
    });
    const getSchedules = async (teacherId) => {
        const queryString = querystring.stringify({ showAvailability: true });
        const apiResponse = await fetch(`${URL_API}/teacher/${teacherId}/schedule/list?${queryString}`);
        const response = await apiResponse.json();
        setSchedules(response ?? []);
    }

    const getTeacher = async (teacherId) => {
        const apiResponse = await fetch(`${URL_API}/teacher/${teacherId}`);
        const response = await apiResponse.json();
        console.log(response);
        setTeacher(response);
    }

    useEffect(() => {
        Promise.allSettled([
            getSchedules(id),
            getTeacher(id)
        ])
    }, []);

    const signOut = () => {
        dispatch({ type: "UPDATE_USER", payload: null });
        window.location.href = "/";
    }

    const getTitle = (day, initHour, endHour) => {
        const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1)
        const formattedInitHour = FormatHour(initHour)
        const formattedEndHour = FormatHour(endHour)
        return `${capitalizedDay} de ${formattedInitHour} a ${formattedEndHour}`
    }

    function getNextDayOfWeekAndTime(dayOfWeek, timeString) {
        const now = new Date();
        const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
        const targetDayIndex = daysOfWeek.findIndex(day => day === dayOfWeek.toLowerCase());

        if (targetDayIndex === -1) {
            throw new Error('Día de la semana no válido. Por favor, usa uno de los siguientes: domingo, lunes, martes, miércoles, jueves, viernes, sábado.');
        }

        const [hour, minute] = timeString.split(':');

        const targetDate = new Date(now);
        targetDate.setDate(now.getDate() + ((targetDayIndex + 7 - now.getDay()) % 7)); // Avanza al próximo día de la semana
        targetDate.setHours(Number(hour));
        targetDate.setMinutes(Number(minute));
        targetDate.setSeconds(0);
        targetDate.setMilliseconds(0);

        if (now.getDay() === targetDayIndex && now.getHours() * 60 + now.getMinutes() < Number(hour) * 60 + Number(minute)) {
            // Si hoy es el mismo día de la semana y la hora actual es menor a la hora especificada, se mantiene la fecha actual
            targetDate.setDate(now.getDate());
        }

        return targetDate;
    }

    const onCreateAdvisory = async (schedule) => {
        const deleteApiResponse = await fetch(`${URL_API}/advisory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                teacher_id: teacher.user_id,
                teacher_name: `${teacher.name} ${teacher.lastname}`,
                student_id: user.user_id,
                student_name: `${user.name} ${user.lastname}`,
                date_timestamp: getNextDayOfWeekAndTime(schedule.day, schedule.initHour).getTime(),
                link: schedule.link
            })
        });

        if (deleteApiResponse.ok) {
            const response = await deleteApiResponse.json();
            console.log(response);
            await getSchedules();
        }
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
                    <img alt="aa" src={IMF} style={{ height: "40px", width: "40px" }}></img>
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
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <p><a className="custom-link" href="/" onClick={signOut}>Cerrar Sesión</a></p>
                </aside>
                <div style={{ flex: 1, height: "100%", padding: "16px" }}>
                    <div className="container">
                        <h3>Citas</h3>
                        <hr></hr>

                        <div
                            style={{
                                padding: "16px",
                                backgroundColor: "#F3EDF7",
                                minHeight: "35vh",
                            }}
                        >
                            <div className="container">
                                <div className="row">
                                    <div
                                        className="p-relative"
                                        style={{
                                            height: "80px",
                                            border: "1px solid #CAC4D0",
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <div
                                            className="flex items-center bg-white"
                                            style={{ padding: "16px" }}
                                        >
                                            <CustomChip text={`${teacher.name[0]}${teacher.lastname[0]}`}/>
                                            <div style={{ marginLeft: "16px" }}>
                                                <div style={{ fontWeight: "bold" }}>{`${teacher.name} ${teacher.lastname}`}</div>
                                                <div>{`${teacher.grade} en ${teacher.profession}`}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h5>Presentación</h5>
                                        <p>{teacher.presentation}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <h5>Curso</h5>
                                    <p>{teacher.course}</p>
                                </div>
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
                                <h3>Horarios disponibles</h3>
                                <div>
                                    {schedules.map((item, idx) => (
                                        <ScheduleDescription
                                            key={idx} index={idx + 1}
                                            title={getTitle(item.day, item.initHour, item.endHour)}
                                            iconMessage={item.available ? "Reservar" : ""}
                                            onDelete={async () => await onCreateAdvisory(item)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleTeacher;