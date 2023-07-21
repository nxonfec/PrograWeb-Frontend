import { useState } from "react";
import CustomInput from "../Components/CustomInput";
import ScheduleDescription from "../Components/ScheduleDescription";
import FormatHour from "../utils/formatHour";
import { DAYS } from "../utils/constants";
import IMF from "../img/user.png"

const SCHEDULES = [
    {
        day: 'lunes',
        initHour: '08:00',
        endHour: '10:00',
        link: 'google.com'
    },
    {
        day: 'Martes',
        initHour: '04:00',
        endHour: '06:00',
        link: 'google.com'
    },
    {
        day: 'Jueves',
        initHour: '05:00',
        endHour: '08:00',
        link: 'google.com'
    }
]

export default function MySchedulesPage() {

    const [scheduleForm, setScheduleForm] = useState(
        {
            day: '',
            initHour: '',
            endHour: '',
            link: ''
        }
    )

    const [schedules, setSchedules] = useState(SCHEDULES)

    const getTitle = (day, initHour, endHour) => {
        const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1)
        const formattedInitHour = FormatHour(initHour)
        const formattedEndHour = FormatHour(endHour)
        return `${capitalizedDay} de ${formattedInitHour} a ${formattedEndHour}`
    }

    const onAddSchedule = () => {
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


        setSchedules([...schedules, scheduleForm])

        setScheduleForm({
            day: '',
            initHour: '',
            endHour: '',
            link: ''
        })
    }

    const onDeleteSchedule = (index) => {
        const copySchedules = [...schedules]; // Crear una copia del arreglo original
        copySchedules.splice(index, 1); // Eliminar el elemento en la posición indicada
        setSchedules(copySchedules)
    }

    const onChangeInput = (value, type) => {
        setScheduleForm({...scheduleForm, [type]: value})
    }

    // UseEffect () => {
        //ejecuta al refrescar la pagina
        // query
        //llamar los datos del backend 
        // acutalizar Scores
    //}
    

    return (
        
<div>
            <div style={{height:'64px', width:'100%', padding: '8px 4px', backgroundColor: '#F3EDF7', display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                <a href="./adrmiperfil" style={{marginRight: "10px"}}>
                    <img src={IMF} style={{height: "40px", width: "40px"}}></img>
                </a>
            </div>
            <div style={{display: 'flex', height: 'calc(100vh - 64px)'}}>
                <aside style={{width:'146px', height: '100%', backgroundColor: '#D9D9D9', paddingLeft: '32px', paddingTop: '32px'}}>
                <p><a className="custom-link" href="/adrproximascitasProfesor">Principal</a></p>
                <p><a className="custom-link" href="/MiPerfilDocente">Perfil</a></p>
                <p><a className="custom-link" href="#">Citas</a></p>
                <p><a className="custom-link" href="/adrMisHorarios">Horario</a></p>
                <p><a className="custom-link" href="/adrScorePage">Calificacion</a></p>
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
                <p><a className="custom-link" href="/">Cerrar Sesión</a></p>
                </aside>
                <div style={{flex: 1, height: '100%', padding: '16px'}}>


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
                    <ScheduleDescription key={idx} index={idx + 1} title={getTitle(item.day, item.initHour, item.endHour)} onDelete={()=>onDeleteSchedule(idx)}/>
                ))}
            </div>
        </div>
    
        </div>
    </div>
    </div>
    );
}
