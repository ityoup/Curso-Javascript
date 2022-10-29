const carrito = [];

//Definir un producto
const producto = {
    nombre: "monitor 32 pulgadas",
    precio: 420
}

const producto2 = {
    nombre: "celular",
    precio: 800,
}
const producto3 = {
    nombre: "Mouse",
    precio: 30
}


// Forma declarativa
// Aqui basicamente lo que estamos haciendo es una copia del arreglo, y agregando nueva informacion
let resultado;

resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [producto3, ...resultado]

console.table(resultado)