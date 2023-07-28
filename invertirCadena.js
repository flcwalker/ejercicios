function invertirCadena(cadena) {
    const caracteres = cadena.split('');

    const caracteresInvertidos = caracteres.reverse();

    const cadenaInvertida = caracteresInvertidos.join('');

    return cadenaInvertida;
}

const texto = "Hola a todos mi nombres es Nicolás Echavarría.";
const textoInvertido = invertirCadena(texto);
console.log(textoInvertido);