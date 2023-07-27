function calcularAreaCirculo(radio) {
    const pi = Math.PI;
    const area = pi * Math.pow(radio, 2);
    return area;
}

const radioDelCirculo = 12;
const areaDelCirculo = calcularAreaCirculo(radioDelCirculo);
console.log(`El área del círculo con radio ${radioDelCirculo} es: ${areaDelCirculo}`);


