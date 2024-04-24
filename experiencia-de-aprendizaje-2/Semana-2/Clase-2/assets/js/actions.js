//Que es jquery? jQuery es una biblioteca de JavaScript que simplifica la interacción con el DOM (Document Object Model) y ofrece una amplia gama de funciones para realizar tareas comunes en el desarrollo web.

//Escribe menos haz más

//Que es el DOM?El DOM es como un mapa mental de un documento web que permite a los programas acceder y modificar su contenido de manera dinámica. 

/*Que nos permite realizar Jquery

Manipulación HTML/DOM
Manipulación de CSS
métodos de eventos HTML
Efectos y animaciones.
AJAX
Utilidades

Existen muchas empresas que utilizan Jquery, ejemplo 

Google, Microsoft, IBM, netflix entre otras
*/

//Cómo utilizar jquery? descargar desde jquery.com o por cdn por cdnjs.com
$(document).ready(function() {
    // Esta función se ejecuta cuando el documento HTML ha cargado completamente
  
    // .load()
    $("#cargar-contenido").click(function() {
      // Cuando se hace clic en el botón con el id "cargar-contenido"
      $("#contenido-principal").load("contenido.html", function(response, status, xhr) {
        // Se carga el contenido del archivo "contenido.html" en el elemento con el id "contenido-principal"
        // La función de devolución de llamada (callback) recibe tres argumentos:
        // response: El contenido HTML cargado desde el archivo
        // status: El estado de la solicitud ("success" o "error")
        // xhr: El objeto XMLHttpRequest utilizado para la solicitud
  
        if (status === "error") {
          // Si el estado de la solicitud es "error"
          $("#contenido-principal").html("Error al cargar el contenido: " + xhr.status + " " + xhr.statusText);
          // Se muestra un mensaje de error en el elemento "contenido-principal" con el código de estado y el texto del estado
        }
      });
    });
  
    // .get()
    $("#obtener-datos").click(function() {
      // Cuando se hace clic en el botón con el id "obtener-datos"
      $.get("https://jsonplaceholder.typicode.com/posts/1", function(data) {
        // Se realiza una solicitud GET a la URL "https://jsonplaceholder.typicode.com/posts/1"
        // Cuando se recibe la respuesta "data", se ejecuta esta función
        $("#contenido-get").html("<h3>" + data.title + "</h3><p>" + data.body + "</p>");
        // Se inserta el título y el cuerpo de la respuesta en el elemento con el id "contenido-get"
      });
    });
  
    // .post()
    $("#formulario-post").submit(function(event) {
      // Cuando se envía el formulario con el id "formulario-post"
      event.preventDefault();
      // Se previene el comportamiento por defecto del formulario (recargar la página)
      var formData = $(this).serialize();
      // Se serializa los datos del formulario en una cadena de consulta
      $.post("https://jsonplaceholder.typicode.com/posts", formData, function(data) {
        // Se realiza una solicitud POST a la URL "https://jsonplaceholder.typicode.com/posts" con los datos del formulario
        // Cuando se recibe la respuesta "data", se ejecuta esta función
        $("#respuesta-post").html("<h3>Respuesta del servidor:</h3><pre>" + JSON.stringify(data, null, 2) + "</pre>");
        // Se muestra la respuesta del servidor en formato JSON en el elemento con el id "respuesta-post"
      });
    });
  
    // .ajax()
    $("#realizar-ajax").click(function() {
      // Cuando se hace clic en el botón con el id "realizar-ajax"
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        // URL a la que se realizará la solicitud Ajax
        type: "GET",
        // Tipo de solicitud (GET, POST, PUT, DELETE, etc.)
        success: function(data) {
          // Función que se ejecuta si la solicitud Ajax es exitosa
          $("#contenido-ajax").html("<h3>" + data.title + "</h3><p>" + data.body + "</p>");
          // Se inserta el título y el cuerpo de la respuesta en el elemento con el id "contenido-ajax"
        },
        error: function() {
          // Función que se ejecuta si ocurre un error en la solicitud Ajax
          $("#contenido-ajax").html("<p>Error al realizar la solicitud Ajax.</p>");
          // Se muestra un mensaje de error en el elemento con el id "contenido-ajax"
        }
      });
    });
  });