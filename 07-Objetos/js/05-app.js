// Objetos dentro de objetos
const persona = {
    nombre: "Juan",
    edad: 21,
    hobbie: "Programacion",
    informacion: {
        medidas: {
            peso: "82kg",
            estatura: "1.85m"
        },
        padres: {
            padre: "Juan Carlos",
            madre: "Monica Judith"
    }
    }
}

//De igual manera podemos llamarlos de manera normal
console.log(persona);
console.log(persona.informacion.peso)
console.log(persona.informacion.padres.madre)