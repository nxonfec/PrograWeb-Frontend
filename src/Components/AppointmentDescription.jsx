import CustomChip from "./CustomChip";

export default function AppointmentDescription({fullName = 'Sin Nombre', date = 'Sin Fecha', src = '/imgs/media.png'}) {
    return (
        <div
            className="p-relative"
            style={{
                height: "80px",
                border: "1px solid #CAC4D0",
                borderRadius: "12px",
                overflow: "hidden",
            }}
        >
            <div
                className="flex items-center bg-white"
                style={{ padding: "16px" }}
            >
                <CustomChip text={fullName[0]}/>
                <div style={{ marginLeft: "16px" }}>
                    <div style={{ fontWeight: "bold" }}>{fullName}</div>
                    <div>{date}</div>
                </div>
            </div>
            { src && (<img
                src={src}
                className="h-full p-absolute r-0 t-0"
                alt="Media"
            />) }
        </div>
    );
}
