// "parseInt" en JavaScript.
console.log(parseInt("5"));
console.log(parseInt("-4.7"));

//Función "parseInt" con una base (radix).
console.log(parseInt("110111", 2)); // Binario

//Operador condicional (ternario).
var a = 15;
var b = 9;
console.log(a > b ? a + 2 : b * 3);


//Múltiples operadores condicionales (ternarios).
/*function compararNumeros(a, b) {
    if (a === b) {
      return "a y b son iguales";
    } else if (a > b) {
      return "a es mayor que b";
    } else {
      return "b es mayor que a";
    }
  }
  */
  // Con el operador condicional (ternario).
  
  function compararNumeros(a, b) {
    return a === b ? "a y b son iguales"
         : a > b ? "a es mayor que b"
         : "b es mayor que a";
  }
  console.log(compararNumeros(11, 27));

  //******************
console.log("*********");
  //var vs. let.
  // Con var podemos declarar una variable más de una vez.
/*var campista = "James";
var campista = "David";
console.log(campista);*/

// Con let no podemos declarar una variable más de una vez.
/*let campista = "James";
let campista = "David";
console.log(campista);*/

// Podemos cambiar el valor de la variable.
let campista = "James";
campista = "David";  	// sin let
console.log(campista);

console.log("*******************");
// ************************
//La palabra reservada const.
const MI_CONSTANTE = 35;
console.log(MI_CONSTANTE);

function calcularAreaCirculo(radio) {
  const PI = 3.14;

  if (radio < 0) {
      return undefined;
  }

  return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(5));
console.log(calcularAreaCirculo(10));

console.log("*******************");
// ************************
const MI_ARREGLO = [1, 2, 3, 4];

// MI_ARREGLO = [5, 6, 7, 8]; // Error porque usamos const

// Pero sí podemos mutar el arreglo con la notación de corchetes
MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;

console.log(MI_ARREGLO);

console.log("*******************");
// ************************
//Crear un objeto inmutable en JavaScript.
let colores = { 
  "verde": "#10e04b",
  "azul": "#1b50e0",
  "negro": "#000000",
  "blanco": "#ffffff"
}

Object.freeze(colores);
colores.amarillo = "#fff200"; // No se puede agregar nuevas propiedades.
colores.verde = "#345sg5";    // No se puede cambiar los valores.
delete colores.verde          // No se puede eliminar propiedades.
console.log(colores);


