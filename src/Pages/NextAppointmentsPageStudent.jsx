import AppointmentDescription from "../Components/AppointmentDescription";
import IMF from "../img/user.png";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {URL_API} from "../constants";
import * as querystring from "querystring";
const NextAppointmentsStudentPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    console.log(user);

    if (!user) {
        window.location.href = "/";
    }

    const signOut = () => {
        dispatch({ type: "UPDATE_USER", payload: null });
        window.location.href = "/";
    }

    const [ universidades, setUniversidades ] = useState([]);
    const [ carreras, setCarreras ] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [profesores, setProfesores] = useState([]);
    const [citas, setCitas] = useState([]);
    const [actualAppointments, setActualAppointments] = useState(true);

    const [universityFilter, setUniversityFilter] = useState("");
    const [courseFilter, setCourseFilter] = useState("");
    const [teacherFilter, setTeacherFilter] = useState("");

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
    const getInitialConfig = async () => {
        const apiResponse = await fetch(`${URL_API}/get_initial_config`);
        const response = await apiResponse.json();
        setUniversidades(response.universities ?? []);
        setCarreras(response.careers ?? []);
        setCursos(response.courses ?? [])
    }

    const getAppointments = async () => {
        const filters = {
            type: "student"
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
                fullName: item.teacher_name,
                date: formatTimestampToDateTime(parseInt(item.date_timestamp)),
                link: item.link
            }
        } )
        setCitas(citas);
    }

    const getTeachers = async (filters = {}) => {
        let url = `${URL_API}/teachers`;
        if (Object.keys(filters).length) {
            const queryParams = querystring.stringify(filters);
            url = `${url}?${queryParams}`;
        }

        console.log(url);
        const apiResponse = await fetch(url);
        const response = await apiResponse.json();
        setProfesores(response ?? []);
    }

    const handleSearchTeachers = async () => {
        const filters = {}

        if (universityFilter) {
            filters.university = universityFilter;
        }

        if (courseFilter) {
            filters.course = courseFilter;
        }

        if (teacherFilter) {
            filters.name = teacherFilter;
        }

        await getTeachers(filters);
    }

    useEffect(() => {
        Promise.allSettled([
            getInitialConfig(),
            getAppointments()
        ]);
    }, []);

    const handleUniversidadPChange = (event) => {
        const selectedValue = event.target.value;
        setUniversityFilter(selectedValue);
    };

    const handleCursoPChange = (event) => {
        setCourseFilter(event.target.value);
    }

    const handleTeacherFilterOnChange = (event) => {
        setTeacherFilter(event.target.value);
    }

    const onClearFilters = async () => {
        setUniversityFilter("");
        setCourseFilter("");
        setTeacherFilter("");

        await getTeachers();
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
          <img alt="aaaa" src={IMF} style={{ height: "40px", width: "40px" }}></img>
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
            <h3>Bienvenido, Alumno {user.name}!</h3>
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
                  <div className="col-sm-12 col-md-12 col-lg-6 mt-4" key={idx} onClick={() => { window.location.href = item.link }}>
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
                <div className='row'>
                    <div className='col-4'>
                        <h3>Buscar asesorías</h3>
                        <text>Solo se puede filtrar por una categoría. Si no selecciona ninguna, se mostrarán todos</text>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-4">
                        <h5>Buscar por universidad</h5>
                        <select
                            name="select"
                            id="universidadesP"
                            className="estilo"
                            placeholder="Universidad principal donde dicta clases"
                            value={universityFilter}
                            onChange={handleUniversidadPChange}
                            disabled={courseFilter !== "" && teacherFilter !== ""}
                        >
                            <option selected value=''>Seleccione</option>
                            {universidades.map((university) => (
                                <option key={university.id} value={university.name}>{university.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-4">
                        <h5>Buscar por curso</h5>
                        <select
                            name="select"
                            id="cursosP"
                            className="estilo"
                            placeholder="Universidad principal donde dicta clases"
                            value={courseFilter}
                            onChange={handleCursoPChange}
                            disabled={universityFilter !== "" && teacherFilter !== ""}
                        >
                            <option selected>Seleccione</option>
                            {cursos.map((curso) => (
                                <option key={curso.id} value={curso.name}>{ curso.name }</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-4">
                        <h5>Buscar por docente</h5>
                        <input type="text" id="NombreCompletoP" className="estilo" placeholder="Nombres, apellidos" name="name" value={teacherFilter} onChange={handleTeacherFilterOnChange} />
                    </div>
                    <div className='row mt-2'>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-outline-primary me-md-2" type="button" onClick={onClearFilters}>Limpiar filtros</button>
                            <button className="btn btn-primary" style={{background:'#6750A4'}} type="button" onClick={handleSearchTeachers}>Búsqueda por docente</button>
                        </div>
                    </div>
                    <div className="row">
                        {profesores.map((item, idx) => (
                            <div
                                className="col-sm-12 col-md-12 col-lg-6 mt-4"
                                key={idx}
                                onClick={(event) => { window.location.href = `/scheduleTeacher/${item.user_id}` }}>
                                <AppointmentDescription
                                    fullName={`${item.name} ${item.lastname}`}
                                    date={`${item.university} - ${item.course}`}
                                    src="/imgs/image3.png"
                                >
                                </AppointmentDescription>
                            </div>

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

export default NextAppointmentsStudentPage;
