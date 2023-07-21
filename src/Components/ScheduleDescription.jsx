import CustomChip from "./CustomChip";

export default function ScheduleDescription({
    index = 0,
    title = "Sin título",
    iconMessage = "x",
    onDelete = ()=>{console.log("ON DELETE")}
}) {
    return (
        <div
            className="p-relative flex items-center"
            style={{
                paddingLeft: "16px",
                height: "50px",
                width: "60%",
                marginTop: "4px",
                backgroundColor: "#FEF7FF",
            }}
        >
            <CustomChip style="secondary" text={index}/>
            <div style={{ marginLeft: "16px" }}>{title}</div>
            <div onClick={()=>onDelete()} className="p-absolute r-16">{iconMessage}</div>
        </div>
    );
}
