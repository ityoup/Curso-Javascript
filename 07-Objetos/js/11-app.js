// Acceder a valores por medio del this, es una palabra reservada.

const persona = {
    nombre: "Juan",
    apellido: "Lizarraga",
    edad: 21,
    mostrarInfo: function(){
        console.log(`${this.nombre} tiene ${this.edad} años`)
    }
    
}

const producto = {
    nombre: "iPhone 14",
    precio: 35000,
    mostrariPhone: function(){
        console.log(`Este telefono es un ${this.nombre}, y tiene un precio de ${this.precio}`)
    }
}

persona.mostrarInfo();
producto.mostrariPhone();