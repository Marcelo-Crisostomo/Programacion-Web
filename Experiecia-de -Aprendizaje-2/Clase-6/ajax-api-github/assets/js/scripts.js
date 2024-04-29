  // Función para obtener los datos de un usuario de GitHub
  function obtenerDatosUsuario(username) {
    // URL de la API de GitHub para obtener información de un usuario
    const url = `https://api.github.com/users/${username}`;

    // Realizar la solicitud AJAX utilizando fetch()
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Mostrar los datos del usuario en la consola
        console.log(data);

        // Actualizar el contenido HTML con los datos del usuario
        document.getElementById('nombre').textContent = data.name;
        document.getElementById('bio').textContent = data.bio;
        document.getElementById('seguidores').textContent = data.followers;
        document.getElementById('repositorios').textContent = data.public_repos;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  // Llamar a la función obtenerDatosUsuario con un nombre de usuario de GitHub
  obtenerDatosUsuario('Marcelo-Crisostomo');