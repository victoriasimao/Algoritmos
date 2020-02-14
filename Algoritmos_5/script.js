//Algoritmo 5

//Ejercicio 1

/*
Configura un array para que los valores negativos se transformen en 0.
Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].
*/

function resetNegativos(arr){
    for(var i=0; i<arr.length; i++){
      if(arr[i]<0){
        arr[i]= 0;
      }
    }
    return arr;
  }

  array= resetNegativos([1,2,-1,-3]);
  console.log(array);


//Ejercicio 2

/*
Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando
el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3])
debiera dar como resultado [2,3,0].
*/

//Opción 1

function moverAdelante(arr){
    var newArray=[];
    for(var i=0; i<arr.length; i++){
      newArray[i-1]=arr[i];
      newArray.push(0);

    }
    return newArray;
  }

  vector= moverAdelante([1,2,3]);
  console.log(vector);


//Opción 2

var array = [1,2,3];
var removed = array.splice(0,1);
var push = array.push(0);
console.log(array);


//Ejercicio 3

/*
Configura un array para que el resultado sean los valores en el orden contrario.
Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].
*/

function returnReverso(arr){
    var reverso=[];

      for(var i=arr.length-1; i>=0; i--){
        reverso.push(arr[i]);
      }
      return reverso;
    }

    arr= returnReverso([1,2,3]);
    console.log(arr);


//Ejercicio 4

/*
Crea una función que cambie un array repitiendo sus valores originales
(manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false])
debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
*/
function repetirValores(arr){
  var repeat= [];

  for(var i=0; i<arr.length; i++){
    repeat.push(arr[i]);
    repeat.push(arr[i]);
  }
  return repeat;
}

vector= repetirValores([4,'Ulysses', 42, false]);
console.log(vector);
