const inputElement = document.getElementById('amigo');
const listElement = document.getElementById('listaAmigos');

// Validar solo letras y espacios con Regex.
const inputIsValid = (input) => /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(input);

let friends = [];

function agregarAmigo() {
    const friendName = inputElement.value.trim();

    if (!inputIsValid(friendName)) {
        alertShow('Por favor, ingrese un nombre válido.');
        return;
    }

    friends.push(friendName);
    inputElement.value = '';
    updateListFriends();
    return;
}

function alertShow(message) {
    alert(message);
    return;
}

function updateListFriends() {
    // Vaciar contenedor en forma segura.
    while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }

    // Crear fragmento y añadir elementos.
    const fragment = document.createDocumentFragment();
    friends.forEach((friend) => {
        const elementLi = document.createElement('li');
        elementLi.textContent = friend;
        fragment.appendChild(elementLi);
    });

    // Actualizar DOM en una sola operación.
    listElement.appendChild(fragment);
    return;
}
