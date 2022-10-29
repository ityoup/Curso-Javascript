//Destructuring de objetos

const persona = {
    nombre: "Juan",
    edad: 21,
    hobbie: "Programar"
}

console.log(persona.nombre);

//Si queremos asignar una propiedad de un objeto de una variable, se hace lo siguiente:
const nombre = persona.nombre;
console.log(nombre);

//Podemos extraer la propiedad, y que declare la vaiable de una:
const {edad, hobbie} = persona;
console.log(edad);
console.log(hobbie);