$(document).ready(function() {
    // Validación del formulario al enviar
    $('#contactForm').on('submit', function(e) {
      e.preventDefault(); // Evitar el envío del formulario
  
      // Verificar campos requeridos
      if (!this.checkValidity()) {
        // Agregar la clase 'is-invalid' a los campos inválidos
        $(this).addClass('was-validated');
      } else {
        // Aquí puedes agregar el código para enviar el formulario
        alert('Formulario enviado correctamente');
        $(this).removeClass('was-validated');
      }
    });
  });