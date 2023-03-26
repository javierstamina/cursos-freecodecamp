console.log("**** Sentencias condicionales ***");
if (true) {
    console.log("La condición es verdadera.");
  }

//Cláusula "else if" en sentencias condicionales.
function clasificarValor(valor) {
    if (valor % 2 == 0) {
      console.log("Divisible entre 2.");
    } else if (valor % 3 == 0) {
      console.log("Divisible entre 3.");
    } else {
      console.log("No es divisible entre las opciones.");
    }
  }
  
  clasificarValor(2);

//******************** 
//**********Sentencias switch ****
var producto = "hamburguesa";

switch (producto) {
  case "pizza":
    console.log("La pizza básica cuesta $10.55");
    break;
  case "hamburguesa":
    console.log("Las hamburguesas cuestan $6.78");
    break;
  case "helado":
    console.log("El helado cuesta $2.8");
    break;
}
//********************
function seleccionarIdioma(valor) {
    var idioma;
    switch (valor) {
      case 1:
        idioma = "Español";
        break;
      case 2:
        idioma = "Francés";
        break;
      case 3:
        idioma = "Italiano";
        break;
      default:
        idioma = "Inglés";
        break;
    }
    return idioma;
  }
  
  console.log(seleccionarIdioma(1));