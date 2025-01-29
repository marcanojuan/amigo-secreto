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
        dialogShow('Por favor, ingrese un nombre válido.');
        return;
    }

    amigos.push(friendName);
    dialogShow('¡Tu amigo ha sido agregado a la lista del sorteo!');
 
    inputElement.value = '';

    updateListFriends();
    return;
}

function dialogShow(message) {
    resultElement.textContent = message;
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
    const numberFriends = amigos.length;

    if (numberFriends <= 1) {
        dialogShow('No hay suficientes amigos para sortear.');
        return;
    }

    const index = Math.floor(Math.random() * numberFriends);
    const randomFriend = amigos[index];
    
    amigos.splice(index, 1);
    updateListFriends();

    dialogShow(`El amigo sorteado es: ${randomFriend}.`);
    return;
}

inputElement.addEventListener('click', () => {
    if (resultElement.textContent) dialogShow('');
    return;
});
