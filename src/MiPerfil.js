import './MiPerfil.css';
import NavTabInfo from './Components/NavTabInfo.js';
import IMF from "./img/user.png";
import {useDispatch, useSelector} from "react-redux";

const MiPerfil = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    if (!user) {
        window.location.href = "/";
    }

    const signOut = () => {
        dispatch({ type: "UPDATE_USER", payload: null });
        window.location.href = "/";
    }

    var role = 'ALUMNO';
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
                    <img alt="Desc" src={IMF} style={{ height: "40px", width: "40px" }}></img>
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
                    <main className='container '>
                        <div className='row'>
                            <div className='col-4'>
                                <h3> Mi Perfil</h3>
                            </div>
                            <div className='col-8'>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button className="btn btn-outline-primary me-md-2" type="button">Cancelar</button>
                                    <button className="btn btn-primary" style={{background:'#6750A4'}} type="button">Guardar</button>
                                </div>
                            </div>
                        </div>
                        <hr></hr>

                        <h6>Informacion Personal</h6>
                        <div className='row'>
                            <div className='col-8'>

                                <div className='row' >
                                    <div className="form-floating col-4">
                                        <input type="text" className="form-control" id="nameInput" placeholder=""></input>
                                        <label htmlFor="nameInput">Nombres</label>
                                    </div>

                                    <div className="form-floating col-4">
                                        <input type="text" className="form-control" id="lastNameInput" placeholder=""></input>
                                        <label htmlFor="lastNameInput">Apellidos</label>
                                    </div>

                                    <div className="form-floating col-4">
                                        <input type="text" className="form-control" id="documentTypeInput" placeholder=""></input>
                                        <label htmlFor="documentTypeInput">Tipo de Documento</label>
                                    </div>

                                </div>

                                <div className='row mt-3' >
                                    <div className="form-floating col-4">
                                        <input type="text" className="form-control" id="rolInput" placeholder=""></input>
                                        <label htmlFor="rolInput">Rol</label>
                                    </div>
                                    {role === "PROFESOR"
                                        ?
                                        <div className=" col-4">
                                            <div className="form-floating">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                    <option value="1">Bachiller</option>
                                                    <option value="2">Magister</option>
                                                    <option value="3">Doctor</option>
                                                </select>
                                                <label htmlFor="floatingSelect">Maximo grado alcanzado</label>
                                            </div>
                                        </div>

                                        : <div className=" col-4">

                                        </div>
                                    }


                                    <div className="form-floating col-4">
                                        <input type="text" className="form-control" id="numberInput" placeholder=""></input>
                                        <label htmlFor="numberInput">Numero</label>
                                    </div>

                                </div>
                            </div>
                            <div className='col-4'>
                                <img src="https://media.istockphoto.com/id/157418797/es/foto/el-profesor.jpg?s=1024x1024&w=is&k=20&c=usanwEEySOx2FsOqpleCjcT6vOpUzMhwb7xkikE2j6E=" className="img-thumbnail mx-auto d-block" alt="..."></img>
                                <div className='text-center' ><a href=' ' className='text-decoration-none'><h6>Adjuntar Foto</h6></a></div>
                            </div>
                        </div>

                        <NavTabInfo></NavTabInfo>

                    </main>
                </div>
            </div>
        </div>
    )
}

export default MiPerfil;