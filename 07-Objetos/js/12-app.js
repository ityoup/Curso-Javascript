const persona = {
    nombre: "Juan",
    apellido: "Lizarraga",
    edad: 21,
}

// Object Constructor

function Producto(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;

}

const persona2 = new Producto();