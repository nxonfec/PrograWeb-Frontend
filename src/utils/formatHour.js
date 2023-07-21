// Ejemplo de uso
// console.log(FormatHour('09:00'));  // Output: 09:00 am
// console.log(FormatHour('16:00'));  // Output: 04:00 pm
export default function FormatHour(hour){
    // Dividir la cadena en horas y minutos
    const [hours, minutes] = hour.split(':');
    
    // Convertir las horas a un número entero
    const numericHours = parseInt(hours, 10);
    
    // Verificar si es menor a 12 para determinar el período
    const period = numericHours < 12 ? 'am' : 'pm';
    
    // Convertir las horas al formato de 12 horas
    const convertedHours = numericHours > 12 ? numericHours - 12 : numericHours;
    
    // Formatear los minutos para asegurarse de tener dos dígitos
    const formattedMinutes = minutes.padStart(2, '0');
    
    // Crear la cadena final en el formato deseado
    const formattedHour = `${convertedHours}:${formattedMinutes} ${period}`;
    
    // Retornar la hora convertida
    return formattedHour;
}