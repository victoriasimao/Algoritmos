// Ejercicio 1

/* Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.*/

function num(x){
  var arr = [];
  for(var i = 1; i<=x; i++){
    arr.push (i);
  }
  return arr;
}

y = num(255);
console.log(y);

// Ejercicio 2

/* Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 -
Puedes usar un operador de módulo para este ejercicio. */

function sumPares(arr){
  var sum = 0;
  for( var i= 0; i<=arr; i++){
    if(i % 2 === 0){
      sum= sum + i
    }
  }
  return sum;
}

x= sumPares(1000);
console.log (x);

 // Ejercicio 3

 /* Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares
 entre 1 y 5000 (ej: 1+3+5+...+4997+4999). */

 function sumImpares(x){
  var sum = 0;
  for (var i= 1; i<x; i++){
    if( i % 2 ===1){
      sum = sum + i;
    }
  }
  return sum;
}
y = sumImpares(5000);
console.log(y);

 // Ejercicio 4

 /* Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array
 (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). */

 function suma (y){
  var sum = 0;
  for(var i = 0; i<y.length; i++){
    sum = sum + y[i];
  }
  return sum;
}
x = suma([-5,2,5,12]);
console.log(x);


 // Ejercicio 5

 /* Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el
 número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).*/

 function mayor (arr){
  var max = 0;
  for (var i= 0; i<arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
x = mayor([-3,3,5,7]);
console.log (x);


// Ejercicio 6

/* Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva
el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).*/

function promedio(x){
  var suma = 0;
  var avg = 0;

  for (var i = 0 ; i<x.length; i++){
    suma = suma + x[i];
    avg = suma / x.length;
  }
  return avg;
}

calculo = promedio([1,3,5,7,20]);
console.log(calculo);

// Ejercicio 7

/* Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50
(ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’. */

function impares(x){
  var arr = [];
  for (var i =1; i<=x; i++){
    if( i % 2 !==0 ){
      arr.push(i);
    }
  }
  return arr;
}
y = impares(50);
console.log (y);


// Ejercicio 8

/* Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y.
Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7)*/

function mayorY(arr, y){
  var cont = 0;
  for (var i = 0; i<arr.length; i++){
    if( arr[i]> y)
      cont = cont + 1;
  }
  return cont;
}
x = mayorY([1,3,5,7],3);
console.log(x);

 // Ejercicio 9

 /* Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado
 del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).*/

 function square (arr){
  for (var i = 0; i<arr.length; i ++){
    arr[i]= arr[i] * arr[i];
  }
  return arr;
}
y= square([1,5,10,-2]);
console.log(y);

// Ejercicio 10

/* Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0])*/

function negative(x){
  for(var i = 0; i<x.length; i++){
    if(x[i]<0){
      x[i]=0;
    }
  }
  return x;
}
y= negative([1,5,10,-2]);
console.log(y);

// Ejercicio 11

/* Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).*/

function calculo(arr){
    var max = arr[0];
    var min= arr[0];
    var sum= 0;
    var promedio= 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
          max=arr[i];
        }
        else if(arr[i]<min){
              min=arr[i];
        }
        sum= sum + arr[i];
        promedio= sum/arr.length;
    }
  return [max,min,promedio]
 }
arr = calculo([1,5,10,-2]);
console.log(arr);

// Ejercicio 12

/* Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).*/

function replace(x){
  var posInicial= x[0]
  var posFinal= x[x.length-1]
    x[0]= posFinal
    x[x.length-1]= posInicial

  return x;
}
y= replace([1,5,10,-2]);
console.log(y);


// Ejercicio 13

/* De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].*/

function replace(x){
  for (var i= 0; i<x.length; i++){
    if(x[i]<0){
      x[i]="Dojo";
    }
  }
  return x;
}
y= replace([-1,-3,2]);
console.log(y);
