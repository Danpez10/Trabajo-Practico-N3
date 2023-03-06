//1- Promedio de los numeros

var lista = [9,0,99,5,7,9,30,0,25,3,1,8];
var Promedio=lista
console.log(Promedio)

function numeros(lista); {
    var i=0, sum=0, arraylen = lista.lenght;
    while (i<arraylen) (sum=sum+lista[i++]);
}
    return sum/arraylen;
    
//2- Mayor de los numeros
var arreglo = [9,0,99,5,7,9,30,0,25,3,1,8];
var i = Math.max.apply(null, arreglo);
console.log(i)

//3-Menor de los numeros

 var arreglo = [9,0,99,5,7,9,30,0,25,3,1,8];
 var i = Math.min.apply(null, arreglo);
 console.log(i)

//4, 5 y 6- Cantidad de numeros positivos, negativos y ceros

var lista = [9,0,99,5,7,9,30,0,25,3,1,8]
count = lista;
count = positivos = 0;
count = negativos = 0;
count = ceros = 0;
for (count  = 0; i < lista; i++);
if (lista > 0) {
    positivos++;
}
    if (lista < 0);{
        negativos++;
    }
    if (lista == 0);{
        ceros++;
    }
    console.log(lista)
