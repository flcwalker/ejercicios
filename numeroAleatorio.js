function generarNumeroAleatorio(minimo, maximo) {
    // Calcula un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
    const aleatorio = Math.random();
  
    // Ajusta el número aleatorio para que esté dentro del rango deseado
    const rango = maximo - minimo;
    const numeroAleatorioEnRango = (aleatorio * rango) + minimo;
  
    // Usa Math.floor para asegurar que el resultado sea un número entero
    return Math.floor(numeroAleatorioEnRango);
  }
  
  // Ejemplo de uso:
  const numeroAleatorio = generarNumeroAleatorio(1, 100);
  console.log(`El número aleatorio es: ${numeroAleatorio}`);
  