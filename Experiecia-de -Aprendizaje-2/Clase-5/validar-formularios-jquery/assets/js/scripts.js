$(document).ready(function() {
    // Esta función se ejecuta cuando el documento HTML está completamente cargado.
    
    // Validación del formulario al enviar
    $('#formulario').submit(function(e) {
      // Se ejecuta cuando se envía el formulario con el ID "formulario".
      
      e.preventDefault();
      // Evita el envío del formulario por defecto, permitiendo realizar las validaciones.
      
      // Validación del campo de correo
      var correo = $('#correo').val();
      // Obtiene el valor del campo con el ID "correo".
      
      if (correo === '' || !isValidEmail(correo)) {
        // Si el campo de correo está vacío o no cumple con el formato válido de correo:
        $('#correo').addClass('is-invalid').fadeOut(100).fadeIn(100);
        // Agrega la clase 'is-invalid' al campo de correo y aplica efectos de fadeOut y fadeIn.
        return;
        // Detiene la ejecución de la función si el correo no es válido.
      } else {
        $('#correo').removeClass('is-invalid');
        // Si el correo es válido, se elimina la clase 'is-invalid' del campo de correo.
      }
      
      // Validación del campo de texto
      var texto = $('#texto').val();
      // Obtiene el valor del campo con el ID "texto".
      
      if (texto === '') {
        // Si el campo de texto está vacío:
        $('#texto').addClass('is-invalid').fadeOut(100).fadeIn(100);
        // Agrega la clase 'is-invalid' al campo de texto y aplica efectos de fadeOut y fadeIn.
        return;
        // Detiene la ejecución de la función si el texto está vacío.
      } else {
        $('#texto').removeClass('is-invalid');
        // Si el texto no está vacío, se elimina la clase 'is-invalid' del campo de texto.
      }
      
      // Validación del campo de RUT
      var rut = $('#rut').val();
      // Obtiene el valor del campo con el ID "rut".
      
      if (rut === '' || !isValidRUT(rut)) {
        // Si el campo de RUT está vacío o no cumple con el formato válido de RUT:
        $('#rut').addClass('is-invalid').fadeOut(100).fadeIn(100);
        // Agrega la clase 'is-invalid' al campo de RUT y aplica efectos de fadeOut y fadeIn.
        return;
        // Detiene la ejecución de la función si el RUT no es válido.
      } else {
        $('#rut').removeClass('is-invalid');
        // Si el RUT es válido, se elimina la clase 'is-invalid' del campo de RUT.
      }
      
      // Validación del checkbox
      var checkbox = $('#checkbox').prop('checked');
      // Obtiene el estado (marcado o no marcado) del checkbox con el ID "checkbox".
      
      if (!checkbox) {
        // Si el checkbox no está marcado:
        $('#checkbox-error').fadeIn(100);
        // Muestra el mensaje de error del checkbox con un efecto de fadeIn.
        return;
        // Detiene la ejecución de la función si el checkbox no está marcado.
      } else {
        $('#checkbox-error').fadeOut(100);
        // Si el checkbox está marcado, oculta el mensaje de error con un efecto de fadeOut.
      }
      
      // Si todos los campos son válidos, envía el formulario
      $('#formulario')[0].submit();
      // Envía el formulario si todos los campos han pasado las validaciones.
    });
    
    // Función para validar el formato de correo electrónico
    function isValidEmail(email) {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Expresión regular para validar el formato de correo electrónico.
      return regex.test(email);
      // Devuelve true si el correo cumple con el formato válido, false en caso contrario.
    }
    
    // Función para validar el formato de RUT
    function isValidRUT(rut) {
      var regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
      // Expresión regular para validar el formato de RUT.
      return regex.test(rut);
      // Devuelve true si el RUT cumple con el formato válido, false en caso contrario.
    }
  });