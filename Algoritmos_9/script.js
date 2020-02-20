// Ejercicio 1

/* Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos
(incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).*/

function sigma (num){
  var sum=0
  for (var i=1; i<=num; i++){
    sum = sum + i; //sum+=i
  }
  return sum;
}
x=sigma(3);
y=sigma(5)
console.log(x,y);

// Ejercicio 2

/* Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos
los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).*/

function factorial (num){
  var producto= 1
  for (var i=1; i<=num; i++){
    producto= producto * i //producto *=i
  }
  return producto;
}
x=factorial(3);
y=factorial(5)
console.log(x,y);

// Ejercicio 3

/* Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática,
cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento,
un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc).
Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. */

function fibonacci (num){
  var numeros= [0,1]
  for (var i=2; i<=num; i++){
    numeros[i]= numeros[i-1] + numeros[i-2]
  }
  return numeros;
}
x=fibonacci(7);
console.log(x);

// Ejercicio 4

/* Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”.
Si el array es muy pequeño, devuelve null.  */

function penultimo(x){
  for(var i=0; i<x.length;i++){
    if(x.length==1){
    return null
    }
    else{
     x[i]=(x[x.length-2]);
     return x[i]
    }
  }
}
console.log(penultimo([42,true,4,'Liam',7]))

// Ejercicio 5

/* Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 4. Si el array es muy pequeño,
  devuelve null. */

  function N(x,n){
    if(x.length<n){
    return null
    }
    else{
     x=(x[x.length-n]);
     return x
    }
  }
console.log(N([5,2,3,6,4,9,7],3))

// Ejercicio 6

/* Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.Si el array es muy pequeño, devuelve null.*/

function segundoMayor(x){
var pri= x[0]
var seg= 0
 if(x.length===1){
    return null
  }
for(var i=0; i<x.length; i++){

  if(x[i]>pri){
    seg=pri
    pri=x[i]
  }
  else if(x[i]>seg){
    seg=x[i];
  }
}
return seg
}
y=segundoMayor([42,1,4,3.14,7,10,23,14,65,98,50,43,93,70])
console.log(y)


// Ejercicio 7

/* Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par,y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", 42, 42, false].*/

function doblePar(x){
  var repeat=[]
  for (var i= 0; i<x.length; i++){
    if(i%2===0){
      repeat.push(x[i]);
      repeat.push(x[i]);
    }
    else{ // (i%2===1)
      repeat.push(x[i])
    }
  }
  return repeat
}
console.log(doblePar([4, "Ulysses", 42, false, true, null,8]))
