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
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Mouse",
    precio: 30
}

//Pone al elemento al inicio
carrito.unshift(producto3)

console.table(carrito)