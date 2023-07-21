import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "./PInicio.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {URL_API} from "./constants";

const PInicio = () => {
  const dispatch = useDispatch();

  const [ universidad, setUniversidad ] = useState("");
  const [nuevaUniversidad, setNuevaUniversidad ] = useState("");
  const [ universidadA, setUniversidadA ] = useState("");
  const [ universidadP, setUniversidadP ] = useState("");
  const [ cursoP, setCursoP ] = useState("");
  const  [ nuevoCursoP, setNuevoCursoP ] = useState("");
  const [ nuevaUniversidadA, setNuevaUniversidadA ] = useState("");
  const [ CarreraA, setCarreraA ] = useState("");
  const [ nuevaCarreraA, setNuevaCarreraA ] = useState("");

  const [ universidades, setUniversidades ] = useState([]);
  const [ carreras, setCarreras ] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [ showUniversityModal, setShowUniversityModal ] = useState(false);
  const [ showCareerModal, setShowCareerModal ] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);

  const [ formStudentData, setFormStudentData ] = useState({
    name: "",
    lastname: "",
    dni: "",
    university: "",
    career: "",
    user: "",
    password: "",
    type: "student"
  });

  const handleFormStudentChange = (event) => {
    const { name, value } = event.target;
    setFormStudentData((prevFormStudent) => ({
      ...prevFormStudent,
      [name]: value,
    }));
  }

  const handleFormStudentSubmit = async (event) => {
    event.preventDefault();

    formStudentData.university = universidadA;
    formStudentData.career = CarreraA;
    setFormStudentData(formStudentData);

    if (Object.values(formStudentData).some((value) => value === '')) {
      alert("Complete bien los datos");
      return;
    }

    const createApiResponse = await fetch(`${URL_API}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formStudentData)
    });

    if (createApiResponse.ok) {
      console.log("Alumno agregado con éxito");
      const response = await createApiResponse.json();
      dispatch({ type: "UPDATE_USER", payload: response });
      window.location.href = "/adrproximascitasAlumno";
    }
  }

  const [ formTeacherData, setFormTeacherData ] = useState({
    name: "",
    lastname: "",
    dni: "",
    grade: "",
    profession: "",
    university: "",
    course: "",
    presentation: "",
    user: "",
    password: "",
    type: "teacher"
  });

  const handleFormTeacherChange = (event) => {
    const { name, value } = event.target;

    setFormTeacherData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleFormTeacherSubmit = async (event) => {
    event.preventDefault();

    formTeacherData.university = universidadP;
    formTeacherData.course = cursoP;
    setFormTeacherData(formTeacherData);

    if (Object.values(formTeacherData).some((value) => value === '')) {
      console.log(formTeacherData);
      alert("Complete bien los datos")
      return;
    }

    const createApiResponse = await fetch(`${URL_API}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formTeacherData)
    });

    if (createApiResponse.ok) {
      console.log("Profesor agregado con éxito");
      const response = await createApiResponse.json();
      dispatch({ type: "UPDATE_USER", payload: response });
      window.location.href = "/adrproximascitasProfesor"
    }
  }
  const getInitialConfig = async () => {
    const apiResponse = await fetch(`${URL_API}/get_initial_config`);
    const response = await apiResponse.json();
    setUniversidades(response.universities ?? []);
    setCarreras(response.careers ?? []);
    setCursos(response.courses ?? [])
  }

  useEffect(() => {
    getInitialConfig();
  }, []);

  const handleSelectUniversityChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption !== 'otroA') {
      setUniversidadA(selectedOption);
    } else {
      setShowUniversityModal(true);
    }
  }

  const handleUniversidadPChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue !== 'otra') {
      setUniversidadP(selectedValue);
    } else {
      setShowUniversityModal(true);
    }
  };

  const handleNuevaUniversidadChange = (event) => {
    setNuevaUniversidad(event.target.value)
  }

  const handleNuevoCursoPChange = (event) => {
    setNuevoCursoP(event.target.value);
  }
  const handleUniversityModalClose = () => {
    setShowUniversityModal(false);
    setNuevaUniversidad("");
  }

  const handleCareerModalClose = () => {
    setShowCareerModal(false);
    setNuevaCarreraA("");
  }

  const handleCourseModalClose = () => {
    setShowCourseModal(false);
    setNuevoCursoP("");
  }

  const handleDo = () => {
    const x = document.getElementById("Docente");
    const y = document.getElementById("Estudiante");
    const z = document.getElementById("efecto");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  }

  const handleEst = () => {
    const x = document.getElementById("Docente");
    const y = document.getElementById("Estudiante");
    const z = document.getElementById("efecto");
    const b = document.getElementById("BarraDeFondo");

    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "100px";
  }

  const handleCursoPChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue !== 'otro') {
      setCursoP(selectedValue);
    } else {
      setShowCourseModal(true);
    }
  };

  const handleSelectCareersChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue !== "otraAC") {
      setCarreraA(selectedValue);
    } else {
      setShowCareerModal(true);
    }
  }

  const handleNuevaCarreraAChange = (event) => {
    setNuevaCarreraA(event.target.value);
  };

  const handleLinkClick = () => {
    window.location.href = '/';
  };

  const handleCreateNewUniversity = async (event) => {
    event.preventDefault();

    const createApiResponse = await fetch(`${URL_API}/universities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nuevaUniversidad })
    });

    if (createApiResponse.ok) {
      console.log("Universidad agregada con éxito");
      await getInitialConfig();
    }
    handleUniversityModalClose();
  }

  const handleCreateNewCareer = async (event) => {
    event.preventDefault();

    const createApiResponse = await fetch(`${URL_API}/career`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nuevaCarreraA })
    });

    if (createApiResponse.ok) {
      console.log("Carrera agregada con éxito");
      await getInitialConfig();
    }
    handleCareerModalClose();
  }

  const handleCreateNewCourse = async (event) => {
    event.preventDefault();

    const createApiResponse = await fetch(`${URL_API}/course`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nuevoCursoP, description: "" })
    });

    if (createApiResponse.ok) {
      console.log("Curso agregado con éxito");
      await getInitialConfig();
    }
    handleCourseModalClose();
  }

  return (
      <div className="BarraInicial2">
        {/*<div className="BarraDeFondo2">*/}
        <div className={`BarraDeFondo2 ${universidadP === 'otra' || cursoP === 'otro' ? 'Espaciado' : ''}`}>
          <div id="Elegir">
            <div id="efecto"></div>
            <button type="button" id="seleccion" className="presionar" onClick={handleDo}>Docente</button>
            <button type="button" id="seleccion" className="presionar" onClick={handleEst}>Estudiante</button>
          </div>
          <form id="Docente" className="Registro" onSubmit={handleFormTeacherSubmit}>
            {/*<div id="Docente" className={`Registro ${this.state.universidadP === 'otra' || this.state.cursoP === 'otro' ? 'otro' : ''}`}>*/}
            <input type="text" id="NombreCompletoP" className="estilo" placeholder="Nombres" name="name" value={formTeacherData.name} onChange={handleFormTeacherChange} />
            <input type="text" id="ApellidoP" className="estilo" placeholder="Apellidos" name="lastname" value={formTeacherData.lastname} onChange={handleFormTeacherChange} />
            <input type="text" id="DNIP" className="estilo" placeholder="Documento de identidad" name="dni" value={formTeacherData.dni} onChange={handleFormTeacherChange}/>
            <select id="grade" className="estilo" placeholder="Grado alcanzado" name="grade" value={formTeacherData.grade} onChange={handleFormTeacherChange}>
              <option value="" selected>Seleccione</option>
              <option value="Bachiller">Bachiller</option>
              <option value="Magister">Magister</option>
              <option value="Doctor">Doctor</option>
            </select>
            <input type="text" id="ProfesionP" className="estilo" placeholder="Profesión" name="profession" value={formTeacherData.profession} onChange={handleFormTeacherChange} />
            <select name="select" id="universidadesP" className="estilo" placeholder="Universidad principal donde dicta clases" onChange={handleUniversidadPChange}>
              <option selected>Universidad donde dicta</option>
              {universidades.map((university) => (
                  <option key={university.id} value={university.name}>{university.name}</option>
              ))}
              <option value="otra">Crear nueva institución</option> {/* Opción para añadir una nueva universidad */}
            </select>

            <select name="select" id="cursosP" className="estilo" placeholder="Universidad principal donde dicta clases" onChange={handleCursoPChange}>
              <option selected>Curso de especialidad</option>
              {cursos.map((curso) => (
                  <option key={curso.id} value={curso.name}>{ curso.name }</option>
              ))}
              <option value="otro">Crear curso</option> {/* Opción para añadir un nuevo curso de especialidad */}
            </select>

            <input type="text" id="PresentacionP" className="estilo" placeholder="Presentación del docente" name="presentation" value={formTeacherData.presentation} onChange={handleFormTeacherChange} />
            <input type="text" id="UsuarioP" className="estilo" placeholder="Usuario" name="user" value={formTeacherData.user} onChange={handleFormTeacherChange}/>
            <input type="password" id="ContraP" className="estilo" placeholder="Contraseña" name="password" value={formTeacherData.password} onChange={handleFormTeacherChange}/>
            <button id="Boton" className="Boton">Registarse</button>
            <Link to="/" onClick={handleLinkClick}>Regresar Inicio</Link>
          </form>

          <form id="Estudiante" className="Registro" onSubmit={handleFormStudentSubmit}>
            <input type="text" id="NombreA" className="estilo" placeholder="Nombres" name="name" value={formStudentData.name} onChange={handleFormStudentChange}/>
            <input type="text" id="ApellidoA" className="estilo" placeholder="Apellidos" name="lastname" value={formStudentData.lastname} onChange={handleFormStudentChange}/>
            <input type="text" id="DNIA" className="estilo" placeholder="Documento de identidad" name="dni" value={formStudentData.dni} onChange={handleFormStudentChange}/>
            <select name="universidadA" id="universidadA" className="estilo" placeholder="Universidad principal donde dicta clases" onChange={handleSelectUniversityChange}>
              <option value="" selected>Universidad de procedencia</option>
              {universidades.map((university) => (
                  <option key={university.id} value={university.name}>{university.name}</option>
              ))}
              <option value="otroA">Crear nueva institución</option> {/* Opción para añadir un nuevo curso de especialidad */}
            </select>
            <select name="CarreraA" id="CarreraA" className="estilo" placeholder="Universidad principal donde dicta clases" onChange={handleSelectCareersChange}>
              <option value="" selected>Carrera que estudia</option>
              {carreras.map((carrera) => (
                  <option key={carrera.id} value={carrera.name}>{carrera.name}</option>
              ))}
              <option value="otraAC">Agregar carrera</option> {/* Opción para añadir un nuevo curso de especialidad */}
            </select>
            <input type="text" id="UsuarioA" className="estilo" placeholder="Usuario" name="user" value={formStudentData.user} onChange={handleFormStudentChange} />
            <input type="password" id="ContraA" className="estilo" placeholder="Contraseña" name="password" value={formStudentData.password} onChange={handleFormStudentChange} />
            <button type="submit" id="BotonA" className="Boton">Registarse</button>
            <Link to="/" onClick={handleLinkClick}>Regresar Inicio</Link>

            <Modal show={showCareerModal} onHide={handleCareerModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Crear nueva carrera</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleCreateNewCareer}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Ingresa nombre de la carrera:</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" value={nuevaCarreraA} onChange={handleNuevaCarreraAChange} />
                  </Form.Group>
                  {/* Agrega aquí otros campos del formulario si es necesario */}
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCareerModalClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </form>

          <Modal show={showUniversityModal} onHide={handleUniversityModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Crear nueva universidad</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleCreateNewUniversity}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Ingresa nombre de la universidad:</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" value={nuevaUniversidad} onChange={handleNuevaUniversidadChange} />
                </Form.Group>
                {/* Agrega aquí otros campos del formulario si es necesario */}
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleUniversityModalClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>


          <Modal show={showCourseModal} onHide={handleCourseModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Crear nuevo curso</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleCreateNewCourse}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Ingresa nombre del curso:</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" value={nuevoCursoP} onChange={handleNuevoCursoPChange} />
                </Form.Group>
                {/* Agrega aquí otros campos del formulario si es necesario */}
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCourseModalClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
  );
}

export default PInicio;