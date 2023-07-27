function adivinarEdadActual(añoNacimiento) {
let añoActual = new Date().getFullYear();
let edadActual = añoActual - añoNacimiento;
return edadActual;
}

let añoNacimiento = 1994;
let edadActual = adivinarEdadActual(añoNacimiento);

console.log(edadActual);