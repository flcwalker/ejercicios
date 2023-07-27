let listaQuehaceres = [];

function agregarQuehacer(quehacer) {
    listaQuehaceres.push(quehacer);
    console.log(`Se agregó ${quehacer} a la lista de quehaceres`);
}

function verListaquehaceres() {
    console.log("Lista de quehaceres: ");
    listaQuehaceres.forEach((quehacer, index) => {
        console.log(`${index + 1}. ${quehacer}`);
    })
}

function completarQuehacer(index) {
    if (index >= 0 && index < listaQuehaceres.length) {
        console.log(`Se agregó ${listaQuehaceres[index]}`);
        listaQuehaceres.splice(index, 1);

    } else {
        console.log("Índice inválido, no se pudo completa el quehacer.");
    }
}

agregarQuehacer("JavaScript");
agregarQuehacer("Next.js");
agregarQuehacer("React.js");
agregarQuehacer("Angular.js");
agregarQuehacer("Nuxt.js");

verListaquehaceres();

completarQuehacer(0);

verListaquehaceres();