 // Obtener referencias a los elementos del formulario
 let nombre = document.getElementById("nombre");
 let password = document.getElementById("password");
 let nombreError = document.getElementById("nombreError");
 let passwordError = document.getElementById("passwordError");
 let form = document.getElementById("myForm");

 // Agregar un evento submit al formulario
 form.addEventListener("submit", function(event) {
   event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
   validarFormulario(); // Llamar a la función de validación
 });

 // Función para validar el formulario
 function validarFormulario() {
   // Reiniciar los mensajes de error
   nombreError.textContent = "";
   passwordError.textContent = "";

   // Validar el campo de nombre
   if (nombre.value === null || nombre.value.trim() === "") {
     nombreError.textContent = "Por favor, ingresa tu nombre.";
   }

   // Validar el campo de contraseña
   if (password.value === null || password.value.trim() === "") {
     passwordError.textContent = "Por favor, ingresa tu contraseña.";
   }

   // Si no hay errores, procesar el formulario
   if (nombreError.textContent === "" && passwordError.textContent === "") {
     // Aquí puedes agregar el código para procesar el formulario
     alert("Formulario enviado correctamente");
   }
 }