function calcularAreaTriangulo(base, altura) {
    if (base <= 0 || altura <= 0) {
        return "Error: la base y la altura deben ser números positivos."
    }
    
    const area = (base * altura) / 2;
    
    return area;
    }
    
    const baseTriangulo = 5;
    const alturaTriangulo = 8;
    const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
    console.log(`El área del tríangulo con base ${baseTriangulo} y altura ${alturaTriangulo} es de: ${areaTriangulo}`);