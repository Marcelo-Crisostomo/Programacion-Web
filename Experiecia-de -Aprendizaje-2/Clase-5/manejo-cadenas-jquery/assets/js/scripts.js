$(document).ready(function() {
    // Esta función se ejecuta cuando el documento HTML está completamente cargado
    // y listo para ser manipulado con jQuery.
  
    // Evento click para el botón "Contar caracteres"
    $('#contar').click(function() {
      // Obtiene el valor del textarea con el ID "texto"
      var texto = $('#texto').val();
      
      // Calcula la longitud del texto utilizando la propiedad length
      var longitud = texto.length;
      
      // Muestra el resultado en el elemento con el ID "resultado"
      // Concatena el texto "El texto tiene " con la longitud y " caracteres."
      $('#resultado').text('El texto tiene ' + longitud + ' caracteres.');
    });
  
    // Evento click para el botón "Convertir a mayúsculas"
    $('#mayusculas').click(function() {
      // Obtiene el valor del textarea con el ID "texto"
      var texto = $('#texto').val();
      
      // Convierte el texto a mayúsculas utilizando el método toUpperCase()
      var textoMayusculas = texto.toUpperCase();
      
      // Muestra el texto en mayúsculas en el elemento con el ID "resultado"
      $('#resultado').text(textoMayusculas);
    });
  
    // Evento click para el botón "Convertir a minúsculas"
    $('#minusculas').click(function() {
      // Obtiene el valor del textarea con el ID "texto"
      var texto = $('#texto').val();
      
      // Convierte el texto a minúsculas utilizando el método toLowerCase()
      var textoMinusculas = texto.toLowerCase();
      
      // Muestra el texto en minúsculas en el elemento con el ID "resultado"
      $('#resultado').text(textoMinusculas);
    });
  });