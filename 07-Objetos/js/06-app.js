// Objetos dentro de objetos
//Destructuring con objetos anidados
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

//Aqui hicimos la variable edad. PERO, como quiero la variable peso, esta está dentro de información
// y medidas dentro de informacion, por lo cual se usa esta sintaxis
const {edad, informacion: {medidas: {peso}}} = persona;
console.log(peso)
console.log(edad)

const {nombre, informacion: {padres: {madre}}} = persona
console.log(madre);