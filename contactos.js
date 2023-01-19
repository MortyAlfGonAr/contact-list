// 1. Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
let listaContactos = ['Graciela González', 'Cristian Martínez', 'Juan Tula', 'Otto Arrieta'];

// 2. Crea una función para añadir un nuevo contacto a una lista
function agregarContacto(nombreContacto){
    listaContactos.push(nombreContacto);
}

// 3. Crea una función para borrar un contacto existente de la lista
function borrarContacto(nombreContacto){
    let indiceContacto = listaContactos.indexOf(nombreContacto);
    listaContactos.splice(indiceContacto, 1);
}
// 4. Crea una función para imprimir en consola los contactos presentes en la lista
// Usando el método sort() los ordeno alfabéticamente: 

function mostrarContactos(){
    for (const contacto of listaContactos.sort()) {
        console.log(contacto);
    }
}