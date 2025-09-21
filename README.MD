Hola. Bienvenido a mi proyecto del amigo secreto. Un ejercicio muy simple pero efectivo para poder practicar mi logica de programacion y aplicar los conocimientos que he ido desarrollando a los largo de los primeros cursos de logica.

El programa comienza con la declaración de un array vacío llamado amigos, que servirá como almacén principal para todos los nombres que los usuarios vayan ingresando. Esta variable es global, lo que significa que todas las funciones del programa pueden acceder y modificar su contenido según sea necesario.

La función agregarAmigo() se encarga de gestionar el proceso de añadir nuevos nombres. Primero obtiene el valor del campo de texto y lo limpia de espacios innecesarios. Si el campo está vacío, muestra una alerta al usuario; de lo contrario, añade el nombre al array, limpia el campo de entrada para facilitar nuevos ingresos y actualiza la lista visual llamando a otra función.

La función actualizarListaAmigos() tiene la responsabilidad de mantener sincronizada la interfaz visual con el array de amigos. Limpia completamente la lista existente en el HTML y luego recorre el array recreando todos los elementos de lista necesarios. Por cada nombre en el array, crea un nuevo elemento <li>, le asigna el texto correspondiente y lo agrega a la lista visible en la página.

Finalmente, la función sortearAmigo() se activa cuando el usuario decide realizar el sorteo. Verifica primero que existan amigos en la lista y, si los hay, genera un índice aleatorio usando operaciones matemáticas que garantizan la aleatoriedad dentro del rango válido del array. Una vez seleccionado el nombre correspondiente al índice aleatorio, actualiza el contenido HTML para mostrar el resultado del sorteo al usuario de manera clara y visible.

Este flujo de funciones working together crea una aplicación cohesiva donde los usuarios pueden agregar nombres, verlos en una lista organizada y finalmente realizar un sorteo justo y aleatorio que selecciona un ganador entre todos los participantes registrados.
