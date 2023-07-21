export default function CustomChip({style = 'primary', text = 'AA'}){
    return(
        <div className={`custom-chip custom-chip-${style}`}>{text}</div>
    )
}