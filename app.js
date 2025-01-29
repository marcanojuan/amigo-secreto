// Capturar el elemento de campo de entrada.
const inputElement = document.getElementById('amigo');

// Obtener el elemento de lista.
const listElement = document.getElementById('listaAmigos');

// Validar con Regex la entrada donde solo se aceptan letras y espacios.
const inputIsValid = (input) => /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(input);

let amigos = [];

function agregarAmigo() {
    // Obtener el valor del campo de entrada y limpiar espacios en blanco.
    const friendName = inputElement.value.trim();

    if (!inputIsValid(friendName)) {
        alertShow('Por favor, ingrese un nombre válido.');
        return;
    }

    // Actualizar arreglo de amigos.
    amigos.push(friendName);

    // Limpiar campo de entrada.
    inputElement.value = '';

    updateListFriends();
    return;
}

function alertShow(message) {
    alert(message);
    return;
}

function updateListFriends() {
    // Limpiar lista existente en forma segura.
    while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }

    // Crear fragmento para mejorar rendimiento.
    const fragment = document.createDocumentFragment();
    
    // Iterar sobre arreglo para crear elementos.
    amigos.forEach((friend) => {
        const elementLi = document.createElement('li');
        elementLi.textContent = friend;
        // Agregar elemento al fragmento.
        fragment.appendChild(elementLi);
    });

    // Agregar fragmento a la lista en el DOM en una sola operación.
    listElement.appendChild(fragment);
    return;
}
