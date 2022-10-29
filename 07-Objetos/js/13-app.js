const persona = {
    nombre: "Juan",
    apellido: "Lizarraga",
    edad: 21,
}


// Retorna un arreglo con las llaves del objeto
console.log(Object.keys(persona));

// Te retorna los valores
console.log(Object.values(persona))

// Te retorna todo, llaves y objetos
console.log(Object.entries(persona))