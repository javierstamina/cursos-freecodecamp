//Números aleatorios en JavaScript.
function generarFraccionAleatoria() {
  // Generar y retornar número entre 0 y 1
  // 0 inclusive. 1 no está incluido en los posibles resultados.
  return Math.random();
}

console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());

var numeroAleatorio = Math.random();
console.log(numeroAleatorio);

console.log("*******");
//Números enteros aleatorios en JavaScript.
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
function generarEnteroAleatorio(limiteSuperior) {
  // Generar un número aleatorio entre 0 y el límite
  // superior (sin incluirlo).
  return Math.floor(Math.random() * limiteSuperior);
}
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));

// Con un ciclo
for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(5));
}

console.log("*******");
//Números enteros aleatorios en un rango.
function rangoAleatorio(limiteInferior, limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}
  console.log(rangoAleatorio(3, 8));
  // Con un ciclo
  for (var i = 0; i < 15; i++) {
    console.log(rangoAleatorio(3, 8));
  }
  