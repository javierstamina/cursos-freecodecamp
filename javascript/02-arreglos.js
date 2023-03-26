var miArreglo = ["John", 24];
console.log(miArreglo);

//Arreglos anidados
var listaDeEstudiantes = [["Nora", 97], ["Gino", 78]];
console.log(listaDeEstudiantes);

//Manipular arreglos con .push()
var estaciones = ["Invierno", "Otoño", "Primavera"]; // Orden alfabético
console.log(estaciones);
estaciones.push("Verano");  // Agregar al final del arreglo
console.log(estaciones);

//Manipular arreglos con .pop().
var estaciones1;
estaciones1 = ["Invierno", "Otoño", "Primavera", "Verano"];
estacion = estaciones1.pop();
console.log(estaciones1);
console.log(estacion);

//Manipular arreglos con .shift().
var estaciones2 = ["Invierno", "Otoño", "Primavera"]; 
estaciones2.shift();  // Remover primer elemento del arreglo
console.log(estaciones2);

//Manipular arreglos con .unshift().
var estaciones3 = ["Invierno", "Otoño", "Primavera"]; 
estaciones3.unshift("Verano");   // Agregar al principio del arreglo
console.log(estaciones3);