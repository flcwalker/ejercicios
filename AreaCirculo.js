function calcularAreaCirculo(radio) {
const pi = Math.PI;
const area = pi * Math.pow(radio, 2);
return area;
}

const radio = 5;
const areaCirculo = calcularAreaCirculo(radio);

console.log(`El área del círculo con radio ${radio} es de ${areaCirculo}`);