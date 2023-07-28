function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;

}

const numero = 2;
if(esPrimo(numero)) {
    console.log(`${numero} es número primo.`);
} else {
    console.log(`${numero} no es número primo.`);
}