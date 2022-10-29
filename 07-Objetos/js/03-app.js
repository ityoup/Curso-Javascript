// Agregar o eliminar propiedades
const persona = {
    nombre: "Juan",
    edad: 21,
    hobbie: "Programar"
}

//Agregar nuevas propiedades al objeto
persona.ciudad = "Puerto Vallarta";

//Eliminar propiedades al objeto
delete persona.hobbie;

console.log(persona);