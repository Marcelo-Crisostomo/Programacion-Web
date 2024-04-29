//Enteros o number
let numeroEntero = 1;
//Cadena de texto o string
let cadenaTexto = "Soy una cadena de texto";
//Booleanos o bollean
let verdadero = true; 
let falso = false;
//Undefined todas las variables que no tienen un datop definido: puede ser tipo de dato o un valor
let noDefinido;
noDefinido = undefined;
//Esta variable tiene un valor nulo. se puede usar en un tipo select tipo de dato null

let nulo = null;
//Constantes

let nombre = "John";
nombre = "Doe";
//para declarar una constante utilizamos const
const rut = "16178199-k";
//Tipado dinámico, es decir no es necesario declalar el tipo de dato. 
//Tipado estatico Java Tipado dinámico JavaScrpt
//como saber un tipo de dato, con typeof
console.log(typeof nombre);

//Objetos no respeta el orden
let estudiante = {
    nombre: "John",
    apellido: "Doe",
    edad: 10,
    carrera: "Ingeniería Informática"
};
console.log(estudiante);
console.log(estudiante.carrera);
console.log(estudiante["nombre"]);
//modificar agregar elemento
estudiante.edad =50;

delete estudiante.apellido;


//Array se respeta el orden
let utiles = ["lápiz","cuaderno"];
console.log(utiles);
console.log(utiles[0]);
utiles[2] = "estuche";
console.log(utiles);





