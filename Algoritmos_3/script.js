//Parte 2


//Ejercicio 1
function printAverage(x){
    sum = 0;
    promedio= 0;

    for(var i=0; i<x.length; i++){
        sum= sum + x[i];
        promedio= sum/x.length;

    }
    return promedio
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5


//Ejercicio 2

function returnOddArray(y){
    
    var arr=[];

    for(var i=1; i<=y; i++){
      if(i % 2!=0 ){
        arr.push(i);     
      }
      
    }
  return arr
 }
 y = returnOddArray(255);
 console.log(y); 
 

 
//Ejercicio 3

function squareValue(x){
  
    for(var i=0; i<x.length; i++){
      x[i]= x[i]*x[i]; 
     }
   
    return x;
 }
 
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]

 //Ejercicio 1 AlgoApp
/*
Write a function that returns an array with 
all the numbers from 1 to 255. You may use 
the push() function for this exercise.
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

 //Ejercicio 2 AlgoApp
 /*
 Write a function that would get the 
 sum of all the even numbers from 1 to 1000. 
 You may use a modulus operator for this exercise.
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

 //Ejercicio 3 AlgoApp
 /*
 Write a function that returns the sum
  of all the odd numbers from 1 to 5000. 
  (e.g. 1+3+5+...+4997+4999)
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