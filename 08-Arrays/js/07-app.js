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
const producto4 = {
    nombre: "Cosa",
    precio: 30
}

const producto5 = {
    nombre: "Cosa 2" ,
    precio: 30
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
carrito.push(producto5);

console.table(carrito);

//Eliminar ultimo elemento del arreglo
carrito.pop()
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift()
console.table(carrito);

//Eliminar cualquier elemento

carrito.slice(2, 2)
console.table(carrito)