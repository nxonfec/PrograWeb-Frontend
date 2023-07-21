import { getInitials } from "../utils/getInititals";
import CustomChip from "./CustomChip";

export default function CustomCard({
    fullName = "Sin Nombre",
    position = "Sin Cargo",
    date = "Sin Fecha",
    course = "Sin Curso",
    link = "#",
    img = "",
    score = 0,
    onScore = () => {console.log("CALIFICAR")},
    onClickCard = () => {console.log("ON CLICK CARD")}
}) {
    return (
        <div
            className="w-full p-relative"
            style={{ height: "420px", borderRadius: "12px", border: "1px solid #CAC4D0"}}
        >
            <div style={{zIndex:50}} className="p-absolute w-full h-full t-0 l-0" onClick={onClickCard}></div>
            <div
                className="flex items-center w-full"
                style={{ height: "72px", padding: "16px" }}
            >
                <CustomChip text={getInitials(fullName)} />
                <div style={{ marginLeft: "16px" }}>
                    <div style={{ fontWeight: "bold" }}>{fullName}</div>
                    <div>{position}</div>
                </div>
            </div>
            <div
                className="flex justify-center w-full"
                style={{ height: "148px", backgroundColor: "#CAC4D0" }}
            >
                <img src={img} alt="Foto de Perfil" />
            </div>
            <div
                className="w-full p-relative"
                style={{ height: "200px", padding: "16px" }}
            >
                <p>{date}</p>
                <p>Curso: {course}</p>

                <a className="custom-link" href={link} target="_blank">
                    Enlace de Zoom
                </a>
                <br/>
                <p>{score === 0 ? "No Calificado" : `Calificación: ${score}`}</p>
                <button
                    style={{zIndex: 100}}
                    className="custom-btn btn-secondary p-absolute b-16 r-16"
                    onClick={()=>onScore()}
                >
                    Calificar
                </button>
            </div>
        </div>
    );
}
