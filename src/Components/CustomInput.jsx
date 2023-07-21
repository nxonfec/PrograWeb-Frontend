export default function CustomInput({ label, type, onChange, value }){
    return (
        <div className="custom-floating-label-content">
            <input className="custom-floating-input" type={type} value={value} onChange={(ev) => onChange(ev.target.value)}/>
            <label className="custom-floating-label">{label}</label>
        </div>
      );
    
}