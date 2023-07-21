import ScoreDescription from "../Components/ScoreDescription";
import IMF from "../img/user.png"

const Scores = [
    {
        title: "Mario Lopez -  24 de abril de 2024 - 5 estrellas",
        description:
            "“El profesor fue muy claro y supo darme buenos consejos. Muchas gracias!”",
    },
    {
        title: "Sandra Sanchez -  23 de abril de 2024 - 4.5 estrellas",
        description:
            "“Por lo general estuvo bien, pero algunas cosas no entendi”.",
    },
    {
        title: "Sandra Sanchez -  23 de abril de 2024 - 4.5 estrellas",
        description:
            "“Por lo general estuvo bien, pero algunas cosas no entendi”.",
    }
];

export default function ScorePage() {

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
                <p><a className="custom-link" href="/CitasDocente">Citas</a></p>
                <p><a className="custom-link" href="/adrMisHorarios">Horario</a></p>
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
                <div style={{flex: 1, height: '100%', padding: '16px'}}></div>
        <div className="container">
            <h3>Calificaciones</h3>
            <hr></hr>
            {Scores.map((item, idx) => (
                <ScoreDescription
                    key={idx}
                    index={idx + 1}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
        
            </div>
        </div>
    );
}
