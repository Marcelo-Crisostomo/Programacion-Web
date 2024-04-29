// Función para cargar los datos del servicio web
function cargarDatos() {
    // Realizar la solicitud al servicio web utilizando fetch
    fetch('././data/datos.xml')
        .then(response => response.text())
        .then(data => {
            // Parsear el XML recibido
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');

            // Obtener los elementos "usuario" del XML
            const usuarios = xmlDoc.getElementsByTagName('usuario');

            // Obtener el tbody de la tabla
            const tablaBody = document.querySelector('#tablaUsuarios tbody');

            // Limpiar el contenido anterior de la tabla
            tablaBody.innerHTML = '';

            // Recorrer los usuarios y crear las filas de la tabla
            for (let i = 0; i < usuarios.length; i++) {
                const usuario = usuarios[i];
                const id = usuario.getElementsByTagName('id')[0].textContent;
                const nombre = usuario.getElementsByTagName('nombre')[0].textContent;
                const email = usuario.getElementsByTagName('email')[0].textContent;

                // Crear una nueva fila en la tabla
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${id}</td>
                    <td>${nombre}</td>
                    <td>${email}</td>
                `;

                // Agregar la fila al tbody de la tabla
                tablaBody.appendChild(fila);
            }
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
}

// Asignar el evento click al botón de cargar datos
document.querySelector('#btnCargar').addEventListener('click', cargarDatos);