// Ejercicio 1

/* Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].*/

function positive (arr){
  for (var i=0; i<arr.length; i++){
    if(arr[i]>0){
      arr[i] = "big"
    }
  }
  return arr;
}
x=positive([-1,3,5,-5]);
console.log(x);

// Ejercicio 2

/*Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números.
 La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. */

function maxMin(x){
  var min = x[0];
  var max = x[0];

  for (var i=0; i<x.length; i++){
    if(x[i]>max){
      max = x[i]
    }
    else if(x[i]<min){
      min = x[i]
    }
  }
  console.log(min)
  return max
}

y=maxMin([1,7,-30,8,2020])
console.log(y)

// Ejercicicio 3

/*Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números.
La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.*/

function penultimo(x){
  for(var i=0; i<x.length;i++){
    if(x[i]%2!==0){
      console.log(x[x.length-2]);
      return x[i]
    }
  }
}
array=penultimo([14,7,23,9,25,18])
console.log(array)

// Ejercicio 4

/* Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique.
Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. */

function doble(arr){
  for(var i=0; i<arr.length; i++){
    arr[i]*=2 //arr[i]=arr[i]*2
  }
  return arr
}
x=doble([1,2,3,4,5,6,7,8,9,10])
console.log(x);

//Ejercicio 5

/* Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el
número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original
y devuelve [-1,1,1,3].]*/

function positive(x){
  var count=0;
  for( var i=0; i<x.length; i++){
    if(x[i]>0){
      count=count +1
      x[x.length-1]=count
    }
  }
  return x;
}
y=positive([-1,1,1,1]);
console.log(y)

// Ejercicio 6

/* Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos,
imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.*/
//REVISAR
function parImpar(x){
  var countImpar = 0;
  var countPar = 0;
  for(var i=0; i<x.length;i++){
    if(x[i]%2!==0){
      countImpar ++
      if(countImpar===3){
        console.log("¡Que imparcial!")
      }
    }
    else if(x[i]%2===0){
      countPar ++
      if(countPar===3)
      console.log("¡Es para bien!")
    }
  }
  return x
}
y=parImpar([8,10,14,79,97,81])
//console.log(y);

// Ejercicio 7

/* Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento,
específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc).
Luego, console.log cada valor del array y devuelve arr. */

function incrementa(arr){
  for(var i=0; i<arr.length; i++){
    if(i%2!==0){
      arr[i]=arr[i]+1
    }
  }
  return arr;
}
x=incrementa([1,2,3,4,5,6,7,8,9,10])
console.log(x);

// Ejercicio 8

/* Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings,
reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior.
Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4].
Pista: ¿For loops solo puede ir hacia adelante?*/

// Opcion 1
function longitud(x){
  for(var i=x.length-1; i>0; i--){
    var temp = x[i-1] //obtengo el string anterior
    var temp2 = temp.length //obtengo la longitud del string anterior
    x[i]=temp2;
  }
  return x
}
y=longitud(["programar", "dojo", "genial"])
console.log(y);

// Opcion 2
function longitud(x){
  for(var i=x.length-1; i>0; i--){
    x[i]=x[i-1].length;
  }
  return x
}
y=longitud(["programar", "dojo", "genial"])
console.log(y);

// Ejercicio 9

/* Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original,
 pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3)
  debería devolver [8,9,10] en un nuevo array. */

function siete(x){
  var arr=[]
  for (var i=0; i<x.length; i++){
    x[i]=x[i]+7;
    arr.push(x[i])
  }
  return arr
}
y=siete([1,2,3,4,5,6,7,8,9,10])
console.log(y)

// Ejercicio 10

/* Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar.
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3].
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).*/
//REVISAR

//Opcion 1
function swap(x){
  for(var i=0; i<x.length/2; i++){
    var temp = x[i]
    x[i]=x[x.length-1-i]
    x[x.length-1-i]=temp
  }
  return x
}
y=swap([3,1,6,4,2])
console.log(y)

// Opcion 2
function inverso(array){
  var newArray=[]
  for (var i=array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}
  return newArray
}
x=inverso([3,1,6,4,2]);
console.log(x)

// Opcion 3 (código limitante(funciona para esta longuitud de array))
function swap(arr) {
    [arr[0],arr[1],arr[2],arr[3], arr[arr.length - 1]] = [arr[arr.length - 1],arr[3],arr[2],arr[1], arr[0]];
    return arr;
}
console.log(swap([3,1,6,4,2]));

// Ejercicio 11

/*Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original,
pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].*/

function perspectiva(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i]>0){
      arr[i]= arr[i]*-1
    }
  }
  return arr;
}
x=perspectiva([1,-3,5,6,7,8,9,10])
console.log(x);


// Ejercicio 12

/*Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy”
cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.*/

function food(arr){
  var comida=0;
  for(var i=0; i<arr.length; i++){
    if(arr[i]==="comida"){
      comida=1
      console.log("yummy")
    }
  }
  if(comida===0){
    console.log("tengo hambre")
  }
}
x=food(['pan','cereal','galleta','comida','leche'])

//Ejercicio 13

/*Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc.
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true].
cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.*/

function swap(x){
  for(var i=0; i<x.length/2; i=+2){
    var temp = x[i]
    x[i]=x[x.length-1-i]
    x[x.length-1-i]=temp
  }
  return x
}
y=swap([1,2,3,4,5,6])
z=swap([true, 42, 'ada', 2, 'pizza'])
console.log(y,z)

// Ejercicio 14

/*Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num,y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].*/

  function escala(arr,num){
    for(var i=0; i<arr.length; i++){
      arr[i]=arr[i]*num
    }
    return arr
  }
  y=escala([1,2,3],3)
  console.log(y)
