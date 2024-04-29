// alert("hola DUOC")
// Muestra una alerta con el mensaje "hola DUOC" cuando se descomenta.

// escribe tu JS o JQUERY personalizado
$(document).ready(function(){
    // Esta línea utiliza la función $(document).ready() de jQuery para asegurarse de que el código
    // se ejecute una vez que el documento HTML esté completamente cargado.
  
    $("#mover").click(function(){
      // Esta línea selecciona el elemento con el id "mover" y agrega un evento de clic utilizando
      // la función click() de jQuery.
  
      $("div").animate({left: '250px'});
      // Cuando se hace clic en el elemento con el id "mover", esta línea selecciona todos los
      // elementos <div> y aplica una animación utilizando la función animate() de jQuery.
      // La animación mueve los elementos <div> 250 píxeles hacia la derecha.
    });
    // Función para agregar texto al hacer clic en el botón
    // Este comentario describe la siguiente función.
  
    $('#add-text-btn').click(function() {
      // Esta línea selecciona el elemento con el id "add-text-btn" y agrega un evento de clic
      // utilizando la función click() de jQuery.
      var newText = 'Este es un nuevo texto agregado dinámicamente.';
      // Se declara una variable llamada "newText" y se le asigna el texto que se agregará dinámicamente.
  
      // Agregar el nuevo texto al final del contenedor
  
      $('#container').append('<p>' + newText + '</p>');
      // Cuando se hace clic en el elemento con el id "add-text-btn", esta línea selecciona el elemento
      // con el id "container" y agrega un nuevo elemento <p> al final de su contenido utilizando la
      // función append() de jQuery. El nuevo elemento <p> contiene el texto almacenado en la variable "newText".
    });
  });