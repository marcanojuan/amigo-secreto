/*
Challenge - Juego del Amigo secreto
G8-ONE | Alura-Latam
*/

const inputName = document.getElementById('amigo');
const btnAdd = document.querySelector('.button-add');
const ulNames = document.getElementById('listaAmigos');
const ulResult = document.getElementById('resultado');
const btnDraw = document.querySelector('.button-draw');

let friends = [];

function initEventListeners() {
    inputName.addEventListener('click', inputClick);
    btnAdd.addEventListener('click', addFriend);
    btnDraw.addEventListener('click', drawFriend);
}

function inputClick() {
    cleanElement(ulResult);
}

function addFriend() {
    const friendName = inputName.value.trim();

    if (!inputIsValid(friendName)) {
        dialogShow('Por favor, ingrese un nombre válido.');
        return;
    }

    if (friends.includes(friendName)) {
        dialogShow('¡El amigo ya está en la lista!');
        return;
    }

    friends.push(friendName);
    dialogShow('¡Tu amigo ha sido agregado a la lista del sorteo!');
    cleanElement(inputName);
    updateListFriends();
}

function drawFriend() {
    if (friends.length <= 1) {
        dialogShow('No hay suficientes amigos para sortear.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends.splice(randomIndex, 1)[0];
    
    updateListFriends();
    dialogShow(`El amigo sorteado es: ${selectedFriend}.`);
}

function inputIsValid(input) {
    // Validar entrada con solo letras y espacios.
    const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    return regex.test(input);
}

function dialogShow(message) {
    ulResult.textContent = message;
}

function cleanElement(element) {
    if (element instanceof HTMLInputElement) {
        element.value = '';
    } else if (element instanceof HTMLUListElement) {
        element.textContent = '';
    }
}

function updateListFriends() {
    const fragment = document.createDocumentFragment();

    ulNames.innerHTML = '';

    friends.forEach((friend) => {
        const li = document.createElement('li');
        li.textContent = friend;
        fragment.appendChild(li);
    });

    ulNames.appendChild(fragment);
}

initEventListeners();
