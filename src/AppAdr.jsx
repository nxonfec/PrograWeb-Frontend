import {
    BrowserRouter as Router,
    Route,
    Routes,
    BrowserRouter
  } from "react-router-dom";

import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import MiPerfil2 from "./Pages/MiPerfil2";
import ScorePage from "./Pages/ScorePage";
import MySchedulesPage from "./Pages/MySchedulesPage";
import MyAppointmentsPage from "./Pages/MyAppointmentsPage";
import NextAppointmentsPage from "./Pages/NextAppointmentsPage";
import NextAppointmentsStudentPage from "./Pages/NextAppointmentsPageStudent";
import IMF from "./img/user.png"

export default function AppAdr() {
    return(
        <div>
            <div style={{height:'64px', width:'100%', padding: '8px 4px', backgroundColor: '#F3EDF7', display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                <a href="./adrmiperfil" style={{marginRight: "10px"}}>
                    <img src={IMF} style={{height: "40px", width: "40px"}}></img>
                </a>
            </div>
            <div style={{display: 'flex', height: 'calc(100vh - 64px)'}}>
                <aside style={{width:'146px', height: '100%', backgroundColor: '#D9D9D9', paddingLeft: '32px', paddingTop: '32px'}}>
                <p><a className="custom-link" href="#">Principal</a></p>
                <p><a className="custom-link" href="/adrmiperfil">Perfil</a></p>
                <p><a className="custom-link" href="/adrmiscitas">Citas</a></p>
                </aside>
                <div style={{flex: 1, height: '100%', padding: '16px'}}>

                    <Route path='calificaciones' element={<ScorePage />}></Route>
                    <Route path='/mishorarios' element={<MySchedulesPage />}></Route>
                    <Route path='/adrproximascitasProfesor' element={<NextAppointmentsPage />}></Route>
                    <Route path='/adrproximascitasAlumno' element={<NextAppointmentsStudentPage />}></Route>
                    <Route path='/adrmiscitas' element={<MyAppointmentsPage />}></Route>
                    <Route path='/adrmiperfil' element={<MiPerfil2 />}></Route>
                    <Route path='/*' element={<Home />}></Route>
                </div>
            </div>
        </div>
    )
}