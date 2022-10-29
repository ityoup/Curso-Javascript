// Unir dos objetos
const persona = {
    nombre: "Juan",
    apellido: "Lizarraga",
    edad: 21,
    
}

const medidas = {
    altura: "1.80m",
    peso: "82kg"
}


console.log(persona);
console.log(medidas);

//Juta los dos objetos en uno solo
const resultado = Object.assign(persona, medidas);

console.log(resultado);

// Hay otra manera de hacerlo
// Spread Operator o Rest Operator
//Es lo que se usa mas, los 3 puntos son para copiar
const resultado2 = {...persona, ...medidas}
console.log(resultado2);