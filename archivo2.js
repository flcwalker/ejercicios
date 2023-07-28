let listaQuehaceres = [];

function agregarQuehacer(quehacer) {
    listaQuehaceres.push(quehacer);
    console.log(`Se agregó ${quehacer} a la lista:`);
}

function verListaQuehaceres() {
    console.log("Lista quehaceres: ")
    listaQuehaceres.forEach((quehacer, index) => {
        console.log(`${index + 1}. ${quehacer}`);
    });
}

function completarQuehacer(index) {
    if (index >= 0 && index < listaQuehaceres.length) {
        console.log(`Se completó ${listaQuehaceres[index]}.`);
        listaQuehaceres.splice(index);
    } else {
        console.log("Índice inválido, no se pudo completar el quehacer.");
    }
}

agregarQuehacer("quehacer1");
agregarQuehacer("quehacer2");
agregarQuehacer("quehacer3");

verListaQuehaceres();

completarQuehacer(2);

verListaQuehaceres();