// Hacer que un objeto se comporte como una constante, o sea que nunca cambie

//Se activa el modo estricto
"use strict"
const persona = {
    nombre: "Juan",
    edad: 21,
    hobbie: "Programar",
        progenitores: {
            padre: "Juan Carlos",
                edadPadres:{
                    edadPadre: 40
                }
        }
}

//Congelamos el objeto persona
Object.freeze(persona);

persona.edad = 24;
// delete persona.nombre;

// console.log(persona.edad);

console.log(Object.isFrozen(persona));

