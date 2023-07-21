import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import PInicio from './PaginaIncial';
import CrearPagina from './PCrearPagina';
import MiPerfil from "./MiPerfil";
import MiPerfilDocente from "./MiPerfilDocente";
import Horario from "./HorarioDocente";
import CAlumno from "./CitasAlumno";
import CDocente from "./CitasDocente";
import CPasadas from "./CitasPasadas";
import CPasadasDocente from "./CitasPasadasDocente";
import NoCitas from "./NoCitas";
import ACitas from "./AtenciCitas";
import PPDocente from "./PPDocente";
import RatingForm from "./RatingForm";
import PPAlumno from "./PPAlumno";

import "./App.css";
import AppAdr from "./AppAdr";
import ScorePage from "./Pages/ScorePage";
import MySchedulesPage from "./Pages/MySchedulesPage";
import NextAppointmentsPage from "./Pages/NextAppointmentsPage";
import NextAppointmentsStudentPage from "./Pages/NextAppointmentsPageStudent";
import MyAppointmentsPage from "./Pages/MyAppointmentsPage";
import MiPerfil2 from "./Pages/MiPerfil2";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ScheduleTeacher from "./ScheduleTeacher";
function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            {/* <NavBar></NavBar> */}
            <Routes>
              {/* <Route path='/' element={<Home />}></Route> */}
              <Route path='/miperfil' element={<MiPerfil />}></Route>
              <Route path='/MiPerfilDocente' element={<MiPerfilDocente />}></Route>
              <Route path='/' element={<PInicio />}></Route>
              <Route path='/CrearPagina' element={<CrearPagina />}></Route>
              {/* <Route path='/HorarioDocente' element={<Horario />}></Route> */}
              <Route path='/CitasAlumno' element={<CAlumno />}></Route>
              <Route path='/CitasDocente' element={<CDocente />}></Route>
              <Route path='/CitasPasadas' element={<CPasadas />}></Route>
              <Route path='/CitasPasadasDocente' element={<CPasadasDocente />}></Route>
              <Route path='/NoCitas' element={<NoCitas />}></Route>
              {/* <Route path='/AtenciCitas' element={<ACitas />}></Route>
        <Route path='/PPDocente' element={<PPDocente />}></Route>
        <Route path='/RatingForm' element={<RatingForm />}></Route>
        <Route path='/PPAlumno' element={<PPAlumno />}></Route> */}

              <Route path='/adrScorePage' element={<ScorePage/>}></Route>
              <Route path='/adrMisHorarios' element={<MySchedulesPage />}></Route>
              <Route path='/adrproximascitasProfesor' element={<NextAppointmentsPage />}></Route>
              <Route path='/adrproximascitasAlumno' element={<NextAppointmentsStudentPage />}></Route>
              <Route path='/adrmiscitas' element={<MyAppointmentsPage />}></Route>
              <Route path="/scheduleTeacher/:id" element={<ScheduleTeacher/>}></Route>
              {/* <Route path='/adrmiperfil' element={<MiPerfil2 />}></Route> */}
            </Routes>


          </BrowserRouter>
        </PersistGate>
      </Provider>
  );
}

export default App;