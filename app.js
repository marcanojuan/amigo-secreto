let friends = [];

function addFriends() {
    const elementInput = document.getElementById('amigo');
    const friendName = elementInput.value.trim();

    if (!isValidInput(friendName)) {
        alert('Por favor, ingrese un nombre valido.');
        return;
    }

    friends.push(friendName);
    elementInput.value = '';
    updateFriendsList();
    return;
}

function isValidInput(input) {
    // Regex para validar que el input sea un string con solo letras y espacios.
    return /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(input);
}
