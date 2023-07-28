function calcularEdadActual(añoNacimiento) {
    let añoActual = new Date().getFullYear();
    let edadActual = añoActual - añoNacimiento;

    return edadActual;
}

let añoNacimiento = 1994;
let edadActual = calcularEdadActual(añoNacimiento);

console.log(edadActual);