let nombre = document.getElementById("nombre");
let password = document.getElementById("password");
let error = document.getElementById("error");
let form = document.getElementById("myForm");

error.style.color = "#e74c3c";

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  enviarFormulario();
});

function enviarFormulario() {
  let mensajesError = [];

  if (nombre.value === null || nombre.value === "") {
    mensajesError.push("ingresa tu nombre");
  }

  if (password.value === null || password.value === "") {
    mensajesError.push("ingresa tu contraseña");
  }

  error.innerHTML = mensajesError.join(", ");
}