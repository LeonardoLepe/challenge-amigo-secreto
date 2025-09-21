let amigos = [];

 function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

if (nombre === '') {
        alert('Por favor ingresa un nombre válido');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarListaAmigos();
  
function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // 2. Limpiar la lista existente
    lista.innerHTML = "";
    
    // 3. Iterar sobre el arreglo con un bucle for
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un nuevo elemento de lista <li>
        const li = document.createElement('li');
        
        // 5. Agregar el texto del amigo al elemento
        li.textContent = amigos[i];
        
        // 6. Agregar el elemento a la lista
        lista.appendChild(li);
    }
}
