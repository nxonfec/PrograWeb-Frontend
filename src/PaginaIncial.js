import React, {useState} from "react";
import imagen1 from './usuario.png';
import "./PInicio.css";
import { Link } from 'react-router-dom';
import {URL_API} from "./constants";
import {useDispatch} from "react-redux";

const PInicio = () => {
  const dispatch = useDispatch();

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  //Nose si funcionara
  const [errorUsuarioContraseña, setErrorUsuarioContraseña] = useState("");
  const [errorDatosIncompletos, setErrorDatosIncompletos] = useState("");
  const handleLinkClick = () => {
    window.location.href = '/CrearPagina';
  };

  const toggleMostrarContraseña = () => {
    setMostrarContraseña((prevMostrarContraseña) => !prevMostrarContraseña);
  };

  const handleChangeUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handleChangeContraseña = (e) => {
    setContraseña(e.target.value);
  };


  //AGREGADOR RECIENTEMENTE, NO SE SI FUNCIONE
  const IniciarCuenta = async (e) => {
    e.preventDefault();

    // Reiniciar los mensajes de error
    setErrorUsuarioContraseña("");
    setErrorDatosIncompletos("");

    // Verificar si los datos están completos
    if (usuario === "" || contraseña === "") {
      setErrorDatosIncompletos("Por favor llene los datos");
      return;
    }

    try {
      const loginApiResponse = await fetch(`${URL_API}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: usuario, password: contraseña })
          });

      if (loginApiResponse.ok) {
        const response = await loginApiResponse.json();
        dispatch({ type: "UPDATE_USER", payload: response });
        console.log(response);

        if (response.type === "student") {
          window.location.href = '/adrproximascitasAlumno';
        } else if (response.type === "teacher") {
          window.location.href = '/adrproximascitasProfesor';
        } else {
          setErrorUsuarioContraseña("Usuario y/o Contraseña Incorrectas");
        }
      } else {
        console.error('Error al realizar la solicitud HTTP');
      }
    } catch (error) {
      console.error(error);
      // Maneja el error de la solicitud HTTP, por ejemplo, mostrando un mensaje de error al usuario
    }
  };



  return (
      <div className="BarraInicial">
        <div className="BarraDeFondo">
          <div>
            <img src={imagen1} alt="imagen" className="imagen" />
          </div>
          <form id="miFormulario">
            <input
                id="Usuario"
                type="text"
                name="Username"
                className="estilo"
                placeholder="Usuario"
                value={usuario}
                onChange={handleChangeUsuario}
                required
            />
            <input
                id="Password"
                type={mostrarContraseña ? "text" : "password"}
                name="Password"
                className="estilo"
                placeholder="Contraseña"
                value={contraseña}
                onChange={handleChangeContraseña}
                required
            />
          </form>
          <div className="BarraSeleccionado">
            <input
                id="Mostrar"
                type="checkbox"
                name="MostrarContraseña"
                className="Mostrar"
                onClick={toggleMostrarContraseña}
            />
            Mostrar Contraseña
          </div>
          {errorUsuarioContraseña && <p className="error-message">{errorUsuarioContraseña}</p>}
          {errorDatosIncompletos && <p className="error-message">{errorDatosIncompletos}</p>}
          <br />
          <button id="Boton" className="Boton" onClick={IniciarCuenta}>
            Iniciar Sesión
          </button>
          <Link to="/CrearPagina" onClick={handleLinkClick}>Crear página</Link>
        </div>
      </div>
  );
};

export default PInicio;

