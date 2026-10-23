const prompt = require('prompt-sync')(); // constante para leer entrada por consola
console.log("---------------------------------------------------------------------------------------------------");
console.log("Hola y bienvenido al convertido de temperatura, por favor digite la temperatura en grados celsius.");
console.log("---------------------------------------------------------------------------------------------------");

let celcius;
let valido = false;

// se repite hasta que el usuario ingrese un valor numerico valido
while (!valido) {
    const entrada = prompt("Digitela ahora: ");
    celcius = Number(entrada);

    if (isNaN(celcius)) {
        console.log("---------------------------------------------------------------------------------------------------");
        console.log("Error: el valor ingresado no es un numero. Intentelo de nuevo.");
        console.log("---------------------------------------------------------------------------------------------------");

    } else {
        valido = true;
    }
}

// conversion de grados celsius a kelvin y fahrenheit
const kelvin = celcius + 273.15;
const fahrenheit = (celcius * 9 / 5) + 32;

console.log("---------------------------------------------------------------------------------------------------");
console.log(`Valor ingresado: ${celcius} C°`);
console.log(`Grados Kelvin: ${kelvin} K°`);
console.log(`Grados Fahrenheit: ${fahrenheit} F°`);
console.log("---------------------------------------------------------------------------------------------------");
console.log("Muchas gracias por usar el convertido de temperatura de Mauro Infante,espero que vuelva pronto!");
console.log("---------------------------------------------------------------------------------------------------");

