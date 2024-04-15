//En JavaScript, una función es un bloque de código reutilizable que realiza una tarea específica. Las funciones permiten modularizar el código, lo que significa que puedes definir una función una vez y luego llamarla múltiples veces desde diferentes partes de tu programa.

//Las funciones en JavaScript pueden tomar cero o más parámetros (valores de entrada), realizar alguna operación basada en esos parámetros y opcionalmente devolver un resultado usando la palabra clave return.

function sumar (){
    resultadoSuma = 3+15;
    alert("Alert con resultado de suma : " + resultadoSuma);
}
sumar();
//función para sumar
function sumar(a, b) {
    return a + b;
  }
  
  // Llamando a la función y guardando el resultado en una variable
  let resultado = sumar(3, 5);
  console.log(resultado); // 

  /*
Actividad 1: Construir una Calculadora Interactiva en JavaScript

Objetivo: Practicar el uso de funciones en JavaScript para construir una calculadora básica que realice operaciones aritméticas simples.

Instrucciones:

Solicita al usuario que ingrese dos números y la operación que desea realizar (suma, resta, multiplicación o división).
Define funciones separadas para cada operación aritmética.
Utiliza las funciones definidas para realizar la operación solicitada por el usuario.
Muestra el resultado al usuario.
*/ 