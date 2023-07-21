import CustomChip from "./CustomChip";

export default function ScoreDescription({
    index = 0,
    title = "Sin título",
    description = "Sin Descripción",
}) {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <CustomChip style="secondary" text={index}/>
                <span style={{ marginLeft: "16px" }}>{title}</span>
            </div>
            <p style={{ marginLeft: "56px", marginTop: "1rem" }}>
                {description}
            </p>
        </div>
    );
}
