// Esperar a que el documento esté listo
$(document).ready(function() {
    // Seleccionar todas las imágenes dentro de la clase 'gallery' y agregar eventos
    $('.gallery img').hover(function() {
        // Al pasar el mouse sobre la imagen, aplicar efecto de desvanecimiento
        $(this).fadeOut('fast');
    }, function() {
        // Al retirar el mouse, reaparecer la imagen con un efecto de desvanecimiento
        $(this).fadeIn('fast');
    });
});