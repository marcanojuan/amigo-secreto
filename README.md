# Juego del Amigo Secreto



Sencillo juego interactivo de "Amigo Secreto", desarrollado con JavaScript, permite al usuario añadir nombres a una lista de participantes y realizar un sorteo aleatorio de un amigo.

## Característícas

- Permite añadir nombres a una lista, facilitando la inclusión de todos los jugadores.
- Verifica que los nombres ingresados sean válidos y evita duplicados, asegurando la integridad del sorteo.
- Realiza sorteos aleatorios para asignar un amigo secreto a cada participante, garantizando la imparcialidad del juego.
- Proporciona mensajes claros y oportunos durante el proceso, mejorando la experiencia del usuario y facilitando la comprensión de cada etapa.

## Tecnologías empleadas

- HTML
- CSS
- JavaScript
- Git
- GitHub

## Instalación y ejecución

1. Clonar este repositorio:
   
   ```bash
   git clone https://github.com/marcanojuan/amigo-secreto.git
   ```

2. Abrir el archivo `index.html` en el navegador de su preferencia.

## Uso

1. Ingrese el nombre de un participante en el campo de texto.
2. Hacer click en el botón "Añadir" para agregarlo a la lista.
3. Cuando haya al menos dos participantes, hacer click en "Sortear amigo" para elegir al amigo.

## Código Principal

Las funciones `addFriend` y `drawFriend` contienen la lógica principal del juego:

```javascript
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
```

```javascript
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
```

## Mejoras futuras

- Implementar la funcionalidad de reiniciar el juego, sin necesidad de recargar la página.
- Desarrollar un código organizado, modular, reutilizable y de fácil mantenimiento mediante la aplicación de conceptos como encapsulación con módulos basados en closures, funciones autoejecutables (IIFE), clases y módulos ES6.

---

¡Que la diversión te acompañe en el sorteo del Amigo Secreto!

[Cómo escribir un README increíble en tu Github](https://www.aluracursos.com/blog/como-escribir-un-readme-increible-en-tu-github)
