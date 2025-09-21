let amigos = [];

 function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

if (nombre === '') {
        alert('Por favor ingresa un nombre válido');
        return;
    }
