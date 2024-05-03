//funciones
function mensaje(){
    console.log("Buenas Tardes")
}

mensaje() //llama la funcion mensaje

//funciones con parametros

function saludo(nombre){
    console.log("Hola "+nombre)
}

saludo("Carlos")

function es_par(numero){
    if(numero%2==0){
        console.log("Es par")
    }else{
        console.log("Es impar")
    }
}

es_par(23)
es_par(4)
es_par("e")

// cree un programa que permita generar los
//numeros del 0 al 25
//muestre cuantos son pares
//muestre cuantos son impares
//utilice una funcion para saber si son pares o no