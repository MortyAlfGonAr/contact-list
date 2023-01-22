let persona1 = {
    id: 1051,
    nombres: 'Otto Alfonso',
    apellidos: 'Arrieta Vásquez',
    telefono: '300-000-1111',
    ubicaciones: {
        ciudad: 'San Juan',
        direccion: 'cra 11 # 14 - 27'
    }
}

let persona2 = {
    id: 1071,
    nombres: 'Juan de Dios',
    apellidos: 'Tula Martínez',
    telefono: '301-700-2222',
    ubicaciones: {
        ciudad: 'Barranquilla',
        direccion: 'Calle del Comercio'
    }
}

let listaContactos = [persona1, persona2];

function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion){
    let contacto = {
        id,
        nombres,
        apellidos,
        telefono,
        ubicaciones: {
            ciudad,
            direccion
        }
    }
    listaContactos.push(contacto);
}

function borrarContactoPorId(id){
    for (let i = 0; i < listaContactos.length; i++) {
        if (listaContactos[i].id === id) {
            listaContactos.splice(i, 1);
        }
    }
}

function borrarContactoPorNombres(nombres){
    for (let i = 0; i < listaContactos.length; i++) {
        if (listaContactos[i].nombres === nombres) {
            listaContactos.splice(i, 1);
        }
    }
}

function mostrarContactos(){
    for (const contacto of listaContactos) {
        console.log(contacto);
    }
}

//Aqui les dejo para que comprueben que todo sirve, los quiero mucho :3
// agregarContacto(1234, 'Isaac David', 'Lozada González', '321-213-7777','Cartagena','Los Corales')
// agregarContacto(214, 'Homero José', 'Simpson Rodríguez', '302-418-2211','Springfield','Avenida Siempreviva 742')
// borrarContactoPorId(1234)
// borrarContactoPorNombres('Homero José')
// borrarContactoPorId(1071)
// console.log(mostrarContactos())