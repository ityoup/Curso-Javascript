const producto = "Monitor 20 Pulgadas"


//Metodo para reemplazar palabras de un string
console.log(producto);
console.log(producto.replace("Pulgadas", '"'));
console.log(producto.replace("Monitor", 'Monitor curvo'));

//.slice para cortar
console.log(producto.slice(0 , 10))

//Alternativa a slice, esta si le pasas un valor mas grande al inicio, simplemente los intercambia
console.log(producto.substring)


const usuario = "Juan"
//Con este metodo puedes cortar solo la primera letra
console.log(usuario.substring(0,1));
//Puedes con este otro metodo, hacer lo mismo pero mas facil
console.log(usuario.charAt(0));