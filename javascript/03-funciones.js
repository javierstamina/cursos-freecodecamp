function mostrarMensaje() {
    console.log("¡Hola, Mundo!");
  }
  mostrarMensaje();

  //Argumentos
  function sumar(a, b) {
    suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);
  }
  
  sumar(5, 3);

//Retornar un valor de una función.
function sumar1(a, b) {
  return a + b;
}
sumar1(5, 3); // No se muestra nada en la consola
console.log(sumar1(5, 3)); // Se muestra el valor retornado


/* En informática una COLA (queue) es una estructura de datos abstracta 
en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden 
añadir al final de la cola y los elementos previos se retiran del principio de la cola. 

Define una función proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) 
como argumentos. Agrega el número al final del arreglo y luego elimina el primer 
elemento del arreglo. La función proximoEnLaFila debe retornar el elemento 
que fue removido.
*/
console.log("********COLA********");
function proximoEnLaFila(arreglo, elemento) {
  arreglo.push(elemento); // Agregar al final del arreglo.
  return arreglo.shift(); // Remover el primer elemento y retornarlo.
}
  
var miArreglo = [1, 2, 3, 4, 5];
  
console.log("Antes: " + JSON.stringify(miArreglo));
console.log(proximoEnLaFila(miArreglo, 6));
console.log("Después: " + JSON.stringify(miArreglo));







