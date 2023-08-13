
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
  
const celsiusInput = prompt("Ingresa la temperatura en grados Celsius:");
const celsius = parseFloat(celsiusInput);
  
if (!isNaN(celsius)) {
    
    const fahrenheit = celsiusToFahrenheit(celsius);
  
    console.log(`${celsius} grados Celsius son equivalentes a ${fahrenheit.toFixed(2)} grados Fahrenheit.`);
} else {
    console.log("Por favor, ingresa un valor numérico válido.");
}
  