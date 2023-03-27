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

// *******************
//Objetos complejos en JavaScript. 

var ordenesDePizzas = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "paraLlevar": false
  }
];

console.log(ordenesDePizzas[0]);
console.log(ordenesDePizzas[1]);

console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[0]["tipo"]);

console.log(ordenesDePizzas[0].precio);
console.log(ordenesDePizzas[0]["precio"]);


//*************
//Objetos anidados.
console.log("******************");
var miReceta = {
  "descripcion": "mi postre favorito",
  "costo": 15.6,
  "ingredientes": {
    "masa": {
      "harina": "100 grs",
      "sal": "1 cucharadita",
      "agua": "1 taza"
    },
    "cobertura": {
      "azucar": "120 grs",
      "chocolate": "4 cucharadas",
      "mantequilla": "200 grs"
    }
  }
};

console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);

console.log(miReceta.ingredientes.masa);

console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);

console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa["agua"]);

console.log(miReceta.ingredientes.cobertura);

console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);



//***************
// Arreglos anidados.


var misPlantas = [
  {
    tipo: "flores",
    lista: [
      "rosas",
      "tulipanes",
      "dientes de león"
    ]
  },
  {
    tipo: "árboles",
    lista: [
      "abeto",
      "pino",
      "abedul"
    ]
  }
];

var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);

var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);
