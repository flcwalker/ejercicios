function adivinarEdadfutura(añosFuturos, añoNacimiento) {
    let añoActual = new Date().getFullYear();
    let añoFuturo = añosFuturos + añoActual;
    let edadFutura = añoFuturo - añoNacimiento;
    return edadFutura;
}

let añoNacimiento = 1994;
let añosFuturos = 10;
let edadFutura = adivinarEdadfutura(añosFuturos, añoNacimiento);

console.log(edadFutura); 