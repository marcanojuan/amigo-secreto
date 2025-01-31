/*  INVESTIGAR, programación ... :

    - Modular basada en funciones y closures.
    - Con Clases o Módulos ES6
*/

const inputName = document.getElementById('amigo');
const btnAdd = document.querySelector('.button-add');
const ulNames = document.getElementById('listaAmigos');
const ulResult = document.getElementById('resultado');
const btnDraw = document.querySelector('.button-draw');

let friends = [];

function addFriend() {
    // Capturar el dato ingresado y eliminar los espacios innecesarios.
    const friendName = inputName.value.trim();

    if (!inputIsValid(friendName)) {
        dialogShow('Por favor, ingrese un nombre válido.');
        return;
    }

    friends.push(friendName);
    dialogShow('¡Tu amigo ha sido agregado a la lista del sorteo!');
    cleanElement(inputName);
    updateListFriends();
}

// Validar string con solo letras y espacios.
function inputIsValid(input) {
    return /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(input);
}

function dialogShow(message) {
    ulResult.textContent = message;
}

function cleanElement(element) {
    const tagName = element.tagName.toLowerCase();
    
    if (tagName === 'input') {
        element.value = '';
    } else if (tagName === 'ul') {
        element.textContent = '';
    }
}

function updateListFriends() {
    while (ulNames.firstChild) {
        ulNames.removeChild(ulNames.firstChild);
    }
    
    // Evita repaint y reflow mediante el uso de un fragment.
    const fragment = document.createDocumentFragment();
    
    // Iterar sobre el arreglo para generar los elementos li.
    friends.forEach((friend) => {
        const li = document.createElement('li');
        li.textContent = friend;
        fragment.appendChild(li);
    });

    ulNames.appendChild(fragment);
}

function drawFriend() {
    const numberFriends = friends.length;

    if (numberFriends <= 1) {
        dialogShow('No hay suficientes amigos para sortear.');
        return;
    }

    const index = Math.floor(Math.random() * numberFriends);
    const randomFriend = friends[index];
    
    friends.splice(index, 1);
    updateListFriends();
    dialogShow(`El amigo sorteado es: ${randomFriend}.`);
}

inputName.addEventListener('click', () => cleanElement(ulResult));
btnAdd.addEventListener('click', addFriend);
btnDraw.addEventListener('click', drawFriend);
