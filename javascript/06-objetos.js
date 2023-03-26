// Objetos
console.log("**** OBJETOS **")
var miPerro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle",
  };
  console.log(miPerro.nombre); // acceder
  console.log(miPerro["raza"]); //notacion corchetes

//  Actualizar las propiedades de un objeto.

var mochila = {
  "color": "azul",
  "tamaño": "mediano",
  "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); // azul
mochila.color = "verde";
console.log(mochila.color); // verde

console.log(mochila.contenido);
mochila.contenido.push("lápiz");
console.log(mochila.contenido);

mochila.contenido = [];
console.log(mochila.contenido);

//Añade nuevas propiedades a un objeto de JavaScript.
var curso = {
  "titulo": "Aprende JavaScript desde Cero",
  "idioma": "Español",
  "duracion": 30
};

// Notación de punto
console.log(curso.vistas); // undefined
curso.vistas = 34500;
console.log(curso.vistas);

//Eliminar propiedades en un objeto de JavaScript.

console.log(curso.duracion); // 30
delete curso.duracion;
console.log(curso.duracion); // undefined

//Objetos para hacer búsquedas.
function buscarElementoQuimico(simbolo) {
       var simbolosQuimicos = {
         "Al": "Aluminio",
         "S": "Azufre",
         "Cl": "Cloro",
         "He": "Helio",
         "B": "Boro",
         "Li": "Litio"
       };
       return simbolosQuimicos[simbolo];
    }
    console.log(buscarElementoQuimico("Cl"));

//Verificar las propiedades de un objeto.
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
  };

console.log(miCuaderno.hasOwnProperty("origen"));
// o
function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
      return "Propiedad: " + obj[propiedad];
    } else {
      return "El objeto no tiene esta propiedad";
    }
  }
  
console.log(verificarPropiedad(miCuaderno, "color"));