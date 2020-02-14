//Algoritmos 2

//Ejercicio 1

/*Print 1 to x
Por favor, completa los siguientes códigos para que la función imprima (print) todos los enteros (integers) de 1 a x. Si x es negativo, haz que se muestre (print/log) “número negativo” y que la función devuelva falso.
*/

function printUpTo(x) {
  for(var i=1; i<=x; i++){
    console.log(i);
  }
  if(x<0){
    console.log("númeronegativo");
    return false;
  }
}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); // debería imprimir false


//Ejercicio 2

/*PrintSum
Completa el código de más abajo para que la función imprima enteros (integers) de 0 a x y donde cada entero imprima la suma (sum) parcial. Haz que la función entregue la suma final.
*/


function printSum(x) {
  var sum = 0;
  for (var i=1; i<=x; i++){
    console.log(i);
    sum=sum+i;
  }
  return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640


//Ejercicio 3

/*PrintSumArray
Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado.
*/

function printSumArray(x) {
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    sum=sum + x[i]
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // debería imprimir 6

//Ejercicio 4

/*LargestElement
Crea una función que entregue el elemento más grande (largest element) en un array. Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.
*/

function largestElement(x) {
  var largest = x[0];
  for(var i=0; i<x.length; i++) {
    if(x[i]>largest){
      largest=x[i];
    }
  }
  return largest;
}
x= largestElement([1,30,5,7])
console.log(x);
