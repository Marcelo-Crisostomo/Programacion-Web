// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
}

// Función para restar dos números
function restar(num1, num2) {
    return num1 - num2;
}

// Función para multiplicar dos números
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Función para dividir dos números
function dividir(num1, num2) {
    // Validar división por cero
    if (num2 === 0) {
        return "Error: No se puede dividir por cero";
    }
    return num1 / num2;
}

// Solicitar al usuario los números y la operación
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");

// Realizar la operación solicitada
let resultado;
switch (operacion) {
    case "+":
        resultado = sumar(numero1, numero2);
        break;
    case "-":
        resultado = restar(numero1, numero2);
        break;
    case "*":
        resultado = multiplicar(numero1, numero2);
        break;
    case "/":
        resultado = dividir(numero1, numero2);
        break;
    default:
        resultado = "Operación no válida";
}

// Mostrar el resultado
alert("El resultado es: " + resultado);
