# Juego del Amigo Secreto

Este es un sencillo juego interactivo de "Amigo Secreto" desarrollado con JavaScript, que permite a los usuarios agregar nombres a una lista y realizar un sorteo aleatorio.

## Características

- Agregar nombres a la lista de participantes.
- Validación de nombres para evitar duplicados o entradas inválidas.
- Sorteo aleatorio de un amigo secreto.
- Mensajes de retroalimentación para mejorar la experiencia del usuario.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript

## Instalación y ejecución

1. Clona este repositorio:
   ```bash
   git clone https://github.com/marcanojuan/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador.

## Uso

1. Ingresa el nombre de un participante en el campo de texto.
2. Haz clic en el botón "Añadir" para agregarlo a la lista.
3. Cuando haya al menos dos participantes, haz clic en "Sortear amigo" para elegir un amigo secreto.

## Código Principal

El código principal maneja la lógica del juego:

```javascript
let friends = [];

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

## Mejoras futuras

- Implementar una interfaz gráfica más atractiva con CSS.
- Permitir exportar los resultados del sorteo.
- Agregar la funcionalidad para reiniciar el juego sin recargar la página.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`feature-nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios a tu fork (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT.

---

¡Diviértete con el sorteo del Amigo Secreto!

El README es esencial para comunicar cómo utilizar y entender un proyecto. Este archivo es el punto de referencia inicial para cualquier persona interesada en entender tu proyecto. Un buen README incluye información sobre la instalación, dependencias, cómo ejecutar el proyecto, y posibles problemas o soluciones.

Como reto adicional, crea un README para tu proyecto de "Amigo Secreto" detallando sus funcionalidades, incluyendo capturas de pantalla o videos que muestren cómo agregar nombres y realizar el sorteo. Esta práctica mejorará la documentación, y hará que tu proyecto sea más accesible y profesional para la comunidad.

[Cómo escribir un README increíble en tu Github](https://www.aluracursos.com/blog/como-escribir-un-readme-increible-en-tu-github)
