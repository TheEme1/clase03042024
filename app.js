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
//el promedio de los numeros par e impares


//array

let array=[]

for(i = 0; i <= 20; i++){
    array.push(i)
}
console.log(array)

let arrayB=[]

for(i = 0; i <= 20; i++){
    arrayB.push(i*2)

}
console.log(arrayB)

//crear una funcion que permita
//mostrar el contenido de un arreglo

function datosArray(arreglo){
    console.log(arreglo)
}

let arr=[2,7,9,12,25]
let arre=["Carlos","Ana","Juan"]

datosArray(arr)
datosArray(arre)


// forEach

let numeros=[2,4,6,8]

numeros.forEach(function(elemento,i,arreglo){
    arreglo[i]=Math.pow(elemento,2)

})

console.log(numeros)

let suma=0
let numbers=[65,44,12,4]

numbers.forEach(myFunction)

function myFunction(item){
    suma=suma+item
    document.write("<br>" + "Valor "+item+" Total : "+suma)
}

//cree un arreglo con 10 elementos aleatorios
//Muestre el promedio de los valores del arreglo
//Muestre el mayor y el menor elemento del arreglo


  // let numAleatorio=[]
  // let sum=0
  // for(i=0;i<10;i++){
  //     numAleatorio[i]=Math.ceil(Math.random()*10)
  //     sum=sum+numAleatorio[i]
  //     if(i==0){
  //         mayor=numAleatorio[i]
  //         menor=numAleatorio[i]
  //     }else{
  //         if(numAleatorio[i]>mayor){
  //             mayor=numAleatorio[i]
  //         }
  //         if(numAleatorio[i]<menor)
  //             menor=numAleatorio[i]   
  //     }

  // }
  // console.log('cantidad de elementos del arreglo ',numAleatorio.length)
  // console.log('la suma es ' sum)
  // console.log('el promedio es ',sum/numAleatorio.length)
  // console.log(numAleatorio)
  // console.log('numero menor ',menor)
  // console.log('numero mayor ', mayor)
  
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣖⣛⠛⠛⠛⠛⠋⠉⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠛⠉⠉⠉⠈⠉⠙⢦⡀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠉⠛⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣄⠀⣀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀            
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏⠀⠀⠀⠀⠀⡷⠀⠀⠀⠀⠀⠀⠀⠀⣤⡘⠻⣥⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠃⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⢠⣄⠀⠀⠉⠁⠀⠀⠀⠀⠀⡉⠳⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠛⠁⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⠀⠀⠀⠈⠛⠁⠀⠀⠀⢠⣶⣿⠇⠀⣸⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⡇⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢉⡿⢿⡋⠉⢧⣼⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⣤⣀⣀⣀⣀⣤⠴⠛⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⡟⠀⠀⠙⠦⠀⢳⡀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠳⣄⡀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠰⠦⠤⣤⠤⠖⠋⠙⠦⢤⠼⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣤⣤⣀⣀⣀⣀⣀⣀⣠⣤⣾⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢻⡄⠀⠀⢀⣠⣤⣤⣤⣤⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠛⠉⣽⠀⠀⠀⠀⠀⠀⠀⢰⠋⠙⠛⠛⠛⠛⠛⠛⠋⠉⠁⠀⠀⠀⣇⢀⡴⠋⠀⠀⠀⢀⡿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⡾⠃⢀⡴⠞⠁⠀⠀⠀⠀⠀⠀⣠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠋⠀⠀⠀⢀⣠⠞⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⠟⠀⣰⠏⠀⠀⠀⠀⠀⠀⠀⠀⡴⠋⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⠀⠀⠀⠀⢸⠀⢀⡴⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⡟⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⡾⠀⠀⠀⠀⠀⠀⡀⠀⠀⠘⡇⠀⠀⠀⣾⡴⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣼⠁⢸⠃⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⢀⡼⠃⠀⠀⠀⠀⠀⠀⢿⠀⠀⠀⠻⠤⠴⠶⠿⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⠀⢸⡀⠀⠀⠀⠀⠀⣴⠋⠀⠀⠀⡾⠁⠀⠀⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠙⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢿⠀⠘⣇⠀⠀⠀⣠⠞⠁⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣀⣀⣀⣤⡤⢤⡀⠀⠀⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣇⠀⠙⠶⠶⠚⠁⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢀⡼⠁⠈⢳⣄⣀⣀⣽⠄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⣀⣀⣀⣠⠴⠋⠀⠀⠀⠀⠀⠀⡤⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⡟⠛⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⢀⡤⢞⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⠞⢁⣀⡴⠞⠉⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⣴⠾⠗⠺⡏⠁⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⣧⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⢿⡀⠀⠀⠀⢸⡀⠀⠀⠀⠸⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀⠀⠀⠀⠀⠈⢳⡀⠀⠀⠈⣧⠀⠀⠀⠀⠈⠙⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣆⠀⠀⠀⠀⠀⠀⠉⠳⡆⠀⠸⣤⣤⣤⣤⡤⠴⠋⠀⠀