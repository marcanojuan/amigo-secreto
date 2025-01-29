const inputElement = document.getElementById('amigo');
const listElement = document.getElementById('listaAmigos');
const resultElement = document.getElementById('resultado');

// Validar que solo haya letras y espacios.
const inputIsValid = (input) => /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(input);

let amigos = [];

function agregarAmigo() {
    // Obtener el valor del campo de entrada y limpiar espacios en blanco.
    const friendName = inputElement.value.trim();

    if (!inputIsValid(friendName)) {
        alertShow('Por favor, ingrese un nombre válido.');
        return;
    }

    amigos.push(friendName);

    inputElement.value = '';

    updateListFriends();
    return;
}

function alertShow(message) {
    alert(message);
    return;
}

function updateListFriends() {
    while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }

    // Usa un fragmento para evitar Repaint y Reflow innecesarios.
    const fragment = document.createDocumentFragment();
    
    // Iterar sobre arreglo para crear elementos.
    amigos.forEach((friend) => {
        const elementLi = document.createElement('li');
        elementLi.textContent = friend;
        fragment.appendChild(elementLi);
    });

    listElement.appendChild(fragment);
    return;
}

function sortearAmigo() {
    if (amigos.length <= 1) {
        alertShow('No hay suficientes amigos para sortear.');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    resultElement.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    return;
}
