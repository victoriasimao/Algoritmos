//Algoritmo 4

//Ejercicio 1

/* Dados un array y un valor Y, cuenta e imprime (print)
el número de valores del array que sean mayores que Y.
*/

//Opcion 1//

function greater(arr, Y) {
     var count= 0;

  for(var i=0; i<arr.length; i++){
    if(arr[i] > Y){
      count= count + 1; //count++
    }
  }
    return count;
}
arr= greater([1,2,5,7,10],1);
console.log(arr);

//Opcion 2//

var array = [1,2,5,7,10];
var y= 1;
var count= 0;

for(var i=0; i<array.length; i++){
  if(array[i] > y){
    count++;
  }
}
console.log('Esta es la cantidad de números mayores que Y = '+(count));

//Ejercicio 2

/* Dado un array, imprime los valores máximos (max),
mínimos (min) y promedio (average) para el array.
*/

//Opcion 1//

function calcular(arr){
    max = arr[0];
    min= arr[0];
    sum= 0;
    promedio= 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
          max=arr[i];
        }
        else if(arr[i]<min){
          min=arr[i];
        }
        sum= sum + arr[i]; //sum+=arr[i]
        promedio= sum/arr.length;
    }
 }

arr = calcular([3,6,9,10]);
console.log(max);
console.log(min);
console.log(promedio);

//Opcion 2//

var array = [3,6,9,10];
var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);
var sum= 0;
var promedio= 0;

for(var i=0; i<array.length; i++){
    sum+=array[i];
    promedio= sum/array.length;
}

console.log('soy el array' + ' ' + array);
console.log('Número mayor' + ' ' + max);
console.log('Número menor' + ' ' + min);
console.log('Suma del array' + ' ' + sum);
console.log('Promedio del array' + ' ' + promedio);



//Ejercicio 3

/*Dado un array de números, crea una función que dé
como resultado un nuevo array donde los valores
negativos se reemplacen por el texto (string)
‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5])
debiera devolver [1,2, “Dojo”, “Dojo”, 5].
*/

//Opcion 1//

function reemplazarNegativos(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i]<0){
      arr[i]='dojo';
    }
  }
  return arr;
}

arr= reemplazarNegativos([1,2,-3,-5,5]);
console.log(arr);


//Opcion 2//

var array = [1,2,-3,-5,5];
var dojo = 'dojo';

for(var i=0; i<array.length; i++){
    if(array[i]<0){
      array[i]= dojo;
    }
  }
console.log(array);


//Ejercicio 4

/*Dado un array y su respectivo índice, remueve
los valores en el rango del índice dado( acortando
  el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)
  debiera devolver [20,30,70].
*/

//Opcion 1//

var arr= [];
function removerRango(x,y,z){
  for( var i=0; i<x.length; i++){
        if(i < y || i > z){
          arr.push(x[i]);
        }
  }
    return arr
}

arr=removerRango([20,30,40,50,60,70],2,4);
console.log(arr)

//Opcion 2//

var array = [20,30,40,50,60,70];
var removed = array.splice(array.length - 4,3);
console.log(array);

//Opcion 3//
var array = [20,30,40,50,60,70];
var removed = array.splice(2,3);
console.log(array);
