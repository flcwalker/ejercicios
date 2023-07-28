function calcularEdadFutura(añosFuturos, añoNacimiento) {
    let añoActual = new Date().getFullYear();
    let añoFuturo = añoActual + añosFuturos;
    let edadFutura =  añoFuturo - añoNacimiento;

    return edadFutura;
}

let añosFuturos = 10;
let añoNacimiento = 1994;
let edadFutura = calcularEdadFutura(añosFuturos, añoNacimiento);

console.log(`Su edad en ${añosFuturos} años será de ${edadFutura} años de edad.`);