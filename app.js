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

//esta funcion no retorna nada
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

function par_impar(numx){
    if(numx%2==0){
        return true

    }
    return false
}

contp=0
conti=0
for(i = 0; i <= 25; i++){
    resultado = par_impar(i)
    if(resultado){
        contp = contp+1
        sumap = sumap+i
    }else{
        conti = conti+1
        sumai = sumai+i
    }

}

console.log("La cantidad de pares es = ",contp)
console.log("La cantidad de Impares es = ",conti)
console.log("El promedio de los numeros pares es ",sumap/contp)
console.log("El promedio de los numeros Impares es ",sumai/conti)

//Modifique el codigo para que muestre
//