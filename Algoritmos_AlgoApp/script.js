
//Ejercicios Challenge AlgoApp

/* Ejercicio 1
Escriba una función que devuelva una matriz con todos los números del 1 al 255.
Puede usarla función push () para este ejercicio.
*/

function get_array(y) {
    var arr = [];

    for(var i=1; i<=y; i++){
        arr.push(i);
    }

    return arr;
}

y=get_array(255);
console.log(y);


/* Ejercicio 2
Escribe una función que obtenga el suma de todos los números pares del 1 al 1000.
Puede usar un operador de módulo para este ejercicio.
*/

function sum_even_numbers(y){

    var sum= 0;

    for(var i=1; i<=y; i++){
      if(i % 2===0 ){
        sum= sum + i;
      }

    }
  return sum
 }
 y = sum_even_numbers(1000);
 console.log(y);


 /* Ejercicio 3
 Escribe una función que devuelva la suma de todos los números impares del 1 al 5000.
(por ejemplo, 1 + 3 + 5 + ... + 4997 + 4999)
 */

 function sum_odd_5000(y){

    var sum= 0;

    for(var i=1; i<=y; i++){
      if(i % 2!==0 ){
        sum= sum + i;
      }

    }
  return sum
 }
 y = sum_odd_5000(5000);
 console.log(y);


 /* Ejercicio 4
 Escriba una función que devuelva la suma de todos los valores dentro de una matriz.
 (por ejemplo, [1,2,5] devuelve 8, [-5,2,5,12] devuelve 14)
 */

 function iterArr(arr) {
  var sum= 0;

  for(var i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }

    return sum;
}

console.log(iterArr([1,2,3,17,-3,-5]));


/* Ejercicio 5
Dada una matriz con múltiples valores, escriba una función que devuelva el número máximo en la matriz.
(por ejemplo, para [-3,3,5,7] max es 7)
*/

//opcion1

function findMax(arr) {
  var max=0;

  for(var i=0; i<arr.length; i++){
    if(max < arr[i]){
      max= arr[i];
    }
  }
    return max;
}

console.log(findMax([-3,-3,95,-7,-100,-2020]));

//opcion2

function findMax(arr) {
  var max=arr[0];

  for(var i=1; i<arr.length; i++){
    if(max < arr[i]){
      max= arr[i];
    }
  }
  return max;
}

console.log(findMax([-3,3,95,-7,-100,2020]));


/* Ejercicio 6
Dada una matriz con múltiples valores, escriba una función que devuelva el promedio de los valores en la matriz. (por ejemplo, para [1,3,5,7,20] el promedio es 7.2)
*/

function findAvg(arr) {
      var sum=0;
      var avg= 0;

  for(var i=0; i<arr.length; i++){
    sum= sum + arr[i];
    avg= sum / arr.length;
  }
    return avg;
}
console.log(findAvg([1,3,5,7,20]));


/* Ejercicio 7
Escriba una función que devuelva una matriz de todos los números impares entre 1 y 50. (ej. [1,3,5, ...., 47,49]). Sugerencia: utilice el método 'push'.
*/

function oddNumbers(y){

    var arr=[];

    for(var i=1; i<=y; i++){
      if(i % 2!==0 ){
        arr.push(i);
      }
    }
  return arr
 }

 y = oddNumbers(50);
 console.log(y);

 /* Ejercicio 8
 Dado el valor de Y, escriba una función que tome una matriz y devuelva el número de valores que son mayores que Y. Por ejemplo, si arr = [1, 3, 5, 7] e Y = 3, su función devolverá 2. ( Hay dos valores en la matriz mayores que 3, que son 5, 7).
 */

 function greaterY(arr, Y) {
    var count= 0;

  for(var i=0; i<arr.length; i++){
    if(arr[i] > Y){
      count++;
    }
  }
    return count;
}

Y=3;
greaterY([1, 3, 5, 7]);
