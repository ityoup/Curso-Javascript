//concatener variables
const producto = "Monitor de 20\" ";
const precio = "30 USD";

console.log(producto.concat(precio));
console.log(producto.concat("EN DESCUENTO"))


//Tambien podemos concatenar variables con comas
console.log(producto , "Con un precio de" , precio);

// console.log("El producto " + producto + "Tiene un precio de: " + precio)

console.log(`El producto ${producto} tiene un precio de ${precio} `)