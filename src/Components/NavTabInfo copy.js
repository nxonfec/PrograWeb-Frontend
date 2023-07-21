import '../App.css'
import Select from 'react-select';
import React, { useState } from 'react';

const NavTabInfo = (props) => {
    const [selectCursos, setSelectedCursos] = useState([]);

    const [selectedUniversidades, setSelectedUniversidades] = useState([]);

    const [selectedCarreras, setSelectedCarreras] = useState([]);

    const cursos = [
        { value: 'p1', label: 'Programacion Video' },
        { value: 'p2', label: 'Programacion Web' },
        { value: 'p3', label: 'Programacion Orientada a Objetos' },
        { value: 'p4', label: 'Intro a la programacion' },

    ];

    const universidades = [
        { value: 'u1', label: 'Universidad de Lima' },
        { value: 'u2', label: 'PUCP' },
        { value: 'u3', label: 'UPC' },
        { value: 'u4', label: 'UP' },

    ];

    const carreras = [
        { value: 'c1', label: 'Ingenieria de sistemas' },
        { value: 'c2', label: 'Ingenieria Industrial' },
        { value: 'c3', label: 'Ingenieria Civil' },
        { value: 'c4', label: 'Administracion' },

    ];

    const handleSelectChangeCursos = (selectedCursos) => {
        setSelectedCursos(selectedCursos);
    };
    const handleSelectChangeUniversidades = (selectedOptions) => {
        setSelectedUniversidades(selectedOptions);
    };
    const handleSelectChangeCarreras = (selectedOptions) => {
        setSelectedCarreras(selectedOptions);
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
                                    <input type="text" className="form-control" id="userInput" placeholder=""></input>
                                    <label for="userInput">Usuario</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className="form-floating col-4">
                                    <input type="password" className="form-control" id="currentInput" placeholder=""></input>
                                    <label for="currentInput">Contraseña Actual</label>
                                </div>

                                <div className="form-floating col-4">
                                    <input type="password" className="form-control" id="newPassInput" placeholder=""></input>
                                    <label for="newPassInput">Nueva Contraseña</label>
                                </div>

                                <div className="form-floating col-4">
                                    <input type="password" className="form-control" id="repPassInput" placeholder=""></input>
                                    <label for="repPassInput">Repetir Contraseña</label>
                                </div>

                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className='container'>
                        <div className='row mt-3'>
                            <div className='col-6'>
                                <div className='row'>
                                    <Select
                                        options={universidades}
                                        value={selectedUniversidades}
                                        isMulti
                                        placeholder="Universidades"
                                        onChange={handleSelectChangeUniversidades}
                                    />
                                </div>

                                <div className='row mt-3'>
                                    <Select
                                        options={carreras}
                                        value={selectedCarreras}
                                        isMulti
                                        placeholder="Carreras"
                                        onChange={handleSelectChangeCarreras}
                                    />
                                </div>
                            </div>
                            <div className='col-1'>
                                <div class="vr h-100"></div>

                            </div>
                            <div className='col-5'>
                                <Select
                                    options={cursos}
                                    value={selectCursos}
                                    isMulti
                                    placeholder="Cursos"
                                    onChange={handleSelectChangeCursos}
                                />
                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                    <div className='container'>
                        <div className='row mt-3'>
                            <div className="form-floating input-group-lg">
                                <input type="text" className="form-control" id="titleInput" placeholder=""></input>
                                <label for="titleInput">Titulo</label>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className="form-floating input-group-lg">
                                <input type="text" className="form-control" id="presentationInput" placeholder=""></input>
                                <label for="presentationInput">Presentacion</label>
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