import '../App.css'
import Select from 'react-select';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {URL_API} from "../constants";
const NavTabInfo = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    console.log(user);

    if (!user) {
        window.location.href = "/";
    }

    const [selectCurso, setSelectedCurso] = useState({
        value: user.course, label: user.course
    });

    const [selectedUniversidad, setSelectedUniversidad] = useState({
        value: user.university, label: user.university
    });

    const [selectedCarrera, setSelectedCarrera] = useState({
        value: user.career, label: user.career
    });


    const [ universidades, setUniversidades ] = useState([]);
    const [ carreras, setCarreras ] = useState([]);
    const [cursos, setCursos] = useState([]);
    const getInitialConfig = async () => {
        const apiResponse = await fetch(`${URL_API}/get_initial_config`);
        const response = await apiResponse.json();
        setUniversidades(response.universities.map((item) => ({ value: item.name, label: item.name })));
        setCarreras(response.careers.map((item) => ({ value: item.name, label: item.name })));
        setCursos(response.courses.map((item) => ({ value: item.name, label: item.name })))
    }

    useEffect(() => {
        getInitialConfig();
    }, []);

    const handleSelectChangeCursos = (selectedCursos) => {
        setSelectedCurso(selectedCursos);
    };
    const handleSelectChangeUniversidades = (selectedOptions) => {
        setSelectedUniversidad(selectedOptions);
    };
    const handleSelectChangeCarreras = (selectedOptions) => {
        setSelectedCarrera(selectedOptions);
    };

    return (
        <main style={{ background: '#FEF7FF' }}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Datos de Usuario</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Universidad</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Presentacion</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className='container'>
                        <div className='col-8'>
                            <div className=' row mt-3' >
                                <div className="form-floating col-4">
                                    <input type="text" className="form-control" id="userInput" placeholder="" value={user.user}></input>
                                    <label htmlFor="userInput">Usuario</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className="form-floating col-4">
                                    <input type="password" className="form-control" id="currentInput" placeholder="" value={user.password}></input>
                                    <label htmlFor="currentInput">Contraseña Actual</label>
                                </div>

                                <div className="form-floating col-4">
                                    <input type="password" className="form-control" id="newPassInput" placeholder=""></input>
                                    <label htmlFor="newPassInput">Nueva Contraseña</label>
                                </div>

                                <div className="form-floating col-4">
                                    <input type="password" className="form-control" id="repPassInput" placeholder=""></input>
                                    <label htmlFor="repPassInput">Repetir Contraseña</label>
                                </div>

                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className='container'>
                        <div className='row mt-3'>
                            <div className='col'>
                                {user.university && (<div className='row'>
                                    <Select
                                        options={universidades}
                                        value={selectedUniversidad}
                                        placeholder="Universidades"
                                        onChange={handleSelectChangeUniversidades}
                                    />
                                </div>) }

                                {user.career && (<div className='row mt-3'>
                                    <Select
                                        options={carreras}
                                        value={selectedCarrera}
                                        placeholder="Carreras"
                                        onChange={handleSelectChangeCarreras}
                                    />
                                </div>)}
                            </div>
                            <div className='col'>
                                <div className="vr h-100"></div>

                            </div>
                            {user.course && (<div className='col'>
                                <Select
                                    options={cursos}
                                    value={selectCurso}
                                    placeholder="Cursos"
                                    onChange={handleSelectChangeCursos}
                                />
                            </div>)}
                        </div>
                        <br></br>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                    <div className='container'>
                        <div className='row mt-3'>
                            <div className="form-floating input-group-lg">
                                <input type="text" className="form-control" id="titleInput" placeholder="" value={user.profession}></input>
                                <label htmlFor="titleInput">Titulo</label>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className="form-floating input-group-lg">
                                <input type="text" className="form-control" id="presentationInput" placeholder="" value={user.presentation}></input>
                                <label htmlFor="presentationInput">Presentacion</label>
                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default NavTabInfo;