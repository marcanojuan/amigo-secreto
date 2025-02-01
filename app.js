class FriendDraw {
    constructor() {
        this.inputName = document.getElementById('amigo');
        this.btnAdd = document.querySelector('.button-add');
        this.ulNames = document.getElementById('listaAmigos');
        this.ulResult = document.getElementById('resultado');
        this.btnDraw = document.querySelector('.button-draw');
        this.friends = [];
        
        this.init();
    }

    init() {
        this.inputName.addEventListener('click', () => this.cleanElement(this.ulResult));
        this.btnAdd.addEventListener('click', () => this.addFriend());
        this.btnDraw.addEventListener('click', () => this.drawFriend());
    }

    addFriend() {
        const friendName = this.inputName.value.trim();

        if (!this.inputIsValid(friendName)) {
            this.dialogShow('Por favor, ingrese un nombre válido.');
            return;
        }

        this.friends.push(friendName);
        this.dialogShow('¡Tu amigo ha sido agregado a la lista del sorteo!');
        this.cleanElement(this.inputName);
        this.updateListFriends();
    }

    inputIsValid(input) {
        return /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(input);
    }

    dialogShow(message) {
        this.ulResult.textContent = message;
    }

    cleanElement(element) {
        if (element.tagName.toLowerCase() === 'input') {
            element.value = '';
        } else if (element.tagName.toLowerCase() === 'ul') {
            element.textContent = '';
        }
    }

    updateListFriends() {
        this.ulNames.innerHTML = '';
        const fragment = document.createDocumentFragment();
        this.friends.forEach(friend => {
            const li = document.createElement('li');
            li.textContent = friend;
            fragment.appendChild(li);
        });
        this.ulNames.appendChild(fragment);
    }

    drawFriend() {
        if (this.friends.length <= 1) {
            this.dialogShow('No hay suficientes amigos para sortear.');
            return;
        }

        const index = Math.floor(Math.random() * this.friends.length);
        const randomFriend = this.friends.splice(index, 1)[0];
        this.updateListFriends();
        this.dialogShow(`El amigo sorteado es: ${randomFriend}.`);
    }
}

// Instanciar la clase para que el código se ejecute
new FriendDraw();