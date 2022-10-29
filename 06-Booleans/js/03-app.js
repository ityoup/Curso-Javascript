const autenticado = true;
//Buenas practicas para los valores booleanos

//No es recomendable comparar así, ya que ya está implicito.
if(autenticado === true ){
    console.log("si puedes ver netflix")
} else{
    console.log("No. no puedes ver")
}

//Podemos escribirlo así:
if(autenticado){
    console.log("si, si puedes ver netflix")
}else{
    console.log("no, no puedes verlo")
}

// Operador ternario
console.log(autenticado ? "Esta autenticado" : "No esta autenticado")