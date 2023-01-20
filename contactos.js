let listaContactos = ['Sherlock Holmes', 'Rick Sanchez', 'Homero Simpson'];

function agregarContacto(nombreContacto){
    listaContactos.push(nombreContacto);
}

function borrarContacto(nombreContacto){
    let indiceContacto = listaContactos.indexOf(nombreContacto);
    listaContactos.splice(indiceContacto, 1);
}

function mostrarContactos(){
    listaContactos.sort();
    for (const contacto of listaContactos) {
        console.log(contacto);
    }
}