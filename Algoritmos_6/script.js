/*Prepara un archivo de texto que  incluya tu predicción para cada problema y el output real. 
En la parte superior del archivo, señala cuántas predijiste correctamente de un total de 15.*/

//Ejercicio 1

function a(){
    return 35;
}
console.log(a())

//output 35


//Ejercicio 2
function a(){
    return 4;
}
console.log(a()+a());
//output 8


// Ejercicio 3
function a(b){
    return b;
}
console.log(a(2)+a(4));
// output 6


//Ejercicio 4
function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
//output 3
//output 9


//Ejercicio 5
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
//output 40


//Ejercicio 6
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// output 4

//Ejercicio 7
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// output 10
// output 3
// output 30

//Ejercicio 8
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// output 3
// output 4

//Ejercicio 9
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// output 2
// output 5
// output 8
// output 11


//Ejercicio 10
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//output 0,1,2,3,4,5,6,7,8,9,0
//output 0,1,2,3,4,5,6,7,8,9,0


//Ejercicio 11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// no se invoca la función


//Ejercicio 12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// no se invoca la función


//Ejercicio 13
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
// output 10


//Ejercicio 14
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//output 15 
//output 15 


//Ejercicio 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//output 15 
//output 15 
