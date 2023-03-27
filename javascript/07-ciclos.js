//Ciclo "while" en JavaScript.

var i = 0;

while (i <= 3) {
  console.log("Hola, Mundo");
  i++;
}


// ***********
//Ciclo "for" en JavaScript.
console.log("******************");
// Ejemplo 1

var miArreglo = [];
for (var i = 0; i < 10; i++) {
  miArreglo.push(i);
}
console.log(miArreglo);

// Ejemplo 2

var miArreglo = [];

for (var i = 0; i < 10; i += 2) {
  miArreglo.push("A");
}
console.log(miArreglo);

// Ciclos "for": números impares.
miArreglo = [];
for (var i = 1; i < 20; i += 2) {
  miArreglo.push(i);
}
console.log(miArreglo);

// Ciclos "for": contar hacia atrás.
var miArreglo = [];
for (var i = 10; i > 0; i -= 2) {
    miArreglo.push(i);
}
console.log(miArreglo);

// Iterar sobre un arreglo con un ciclo "for".
var miArreglo = [4, 6, 8, 2];
var total = 0;
for (var i = 0; i < miArreglo.length; i++) {
    total += miArreglo[i];
}
console.log(total);

// Ejemplo

var lenguajes = ["JavaScript", "Python", "Java", "C++"];
for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}

// Ciclos "for" anidados.

var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Por cada arreglo anidado
for (var i = 0; i < miArreglo.length; i++) {
  var arregloAnidado = miArreglo[i];
  // Por cada elemento del arreglo anidado
  for (var j = 0; j < arregloAnidado.length; j++) {
    console.log(arregloAnidado[j]);
  }
}

console.log("******************");
//Ciclos "do...while" en JavaScript.
var x = 16;
do {
  console.log(x);
  x++;
} while (x < 10);

x = 16;

while (x < 10) {
  console.log(x);
  x++;
}


// **********************************************
console.log("*******************");
//Búsqueda de perfiles.
var contactos = [
  {
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "0543236543",
    "gustos": ["Pizza", "Programación"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["Casos interesantes", "Violín"]
  }
];

function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
        return contactos[i][propiedad] || "La propiedad no existe";
    }
  }
  return "El contacto no está en la lista";
}
  
console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));
console.log(buscarPerfil("Sherlock", "apellido"));

console.log(buscarPerfil("Nora", "dirección")); // La propiedad no existe.
console.log(buscarPerfil("Bob", "numero"));     // El contacto no existe.
