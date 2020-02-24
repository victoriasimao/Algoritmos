// Jugando con Objetos

/* Practica iterar por medio de un array de objetos/diccionarios.
  Imagina que se te entrega un array de objetos. Por ejemplo, */

  var users = [
      {name: "Michael", age:37, sport:'run',},
      {name: "John", age:30, sport:'futbol'},
      {name: "David", age:27, sport:'tennis'},
      {name: "Alex", age:16, sport:'swim'}
  ];

  // ¿Cómo harías print/log de la edad de John?
  for(var i in users){
     if(users[i].name =="John")
      console.log(users[i].age)
  }

  //¿Cómo harías print/log del nombre del primer objeto?
  console.log(users[0].name)

  // ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
  for(var i in users){
    console.log(users[i].name.concat(' - ',users[i].age))
  }

  //¿Cómo harías para imprimir el nombre de los mayores de edad?
  for (var i in users){
    if(users[i].age>18)
    console.log(users[i].name)
  }

  //¿Cómo harías para imprimir el nombre de los menores de edad?
  for (var i in users){
    if(users[i].age<18)
    console.log(users[i].name)
  }

  //¿Cómo harías para imprimir el todos los deportes?
  for (var i in users){
    if(users[i].sport)
    console.log(users[i].sport)
  }

  //¿Cómo harías para imprimir los deportes que utilizan pelota?
  for (var i in users){
    if(users[i].sport=='futbol' || users[i].sport=='tennis')
    console.log(users[i].sport)
  }

  //¿Cómo harías para imprimir la frase "Soy John tengo 30 años y me gusta practicar futbol"?
  console.log( 'Soy '.concat(users[1].name,' tengo ',users[1].age,' años ', 'y me gusta practicar ',users[1].sport))

  //¿Cómo harías para imprimir los nombres mas largos del array?
  for (var i in users){
    if(users[i].name.length>4){
  console.log(users[i].name)
    }
  }

  //¿Cómo harías para imprimir la suma de todas las edades?
  var suma=0;
  for(var i in users){
    suma +=users[i].age
  }
  console.log(suma)
