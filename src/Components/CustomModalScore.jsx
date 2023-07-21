const SCORE = [1, 2, 3, 4, 5];
export default function CustomModalScore({onClickScore = () => {console.log("ON CLICK SCORE")}}) {
    return (
        <div
            style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100}}
            className="flex justify-center items-center p-absolute t-0 l-0 w-full h-full"
        >
            <div
                style={{
                    width: "295px",
                    height: "200px",
                    borderRadius: "28px",
                    backgroundColor: "#ECE6F0",
                    padding:'16px'
                }}
            >
                <h4>Califica la atención</h4>
                <p style={{fontSize: '1rem'}}>
                    Es muy importante para nosotros saber cómo te fue en tu
                    sesión de asesoría.
                </p>
                <div className="flex w-full justify-between">
                    {SCORE.map((item, idx) => (
                        <div
                            key={item}
                            style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "20px",
                                backgroundColor: "#D9D9D9",
                                cursor: 'pointer'
                            }}
                            onClick={()=>onClickScore(item)}
                            className="flex justify-center items-center"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
