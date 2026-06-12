const participantes = [
    "Bastián Abarca",
    "Stefany Aguilera",
    "María Cárdenas",
    "Yerica Cortés",
    "Francisca Fernández",
    "Francisco Fuentealba",
    "Kamila González",
    "Vesna Guerra",
    "Williams Jacobs",
    "Daniela Martínez",
    "Ellymar Mendoza",
    "Sebastián Ortega",
    "Jesus Pereira",
    "Diego Pinilla",
    "Alan Rodríguez",
    "Brigitte Rudas",
    "Daniel Schnettler",
    "Nadia Sepúlveda",
    "Ronald Stark",
    "Rodolfo Moreno",
    "Cristóbal Estrada",
    "Kevin Reyes",
    "Babinsky Magloire",
    "Pablo Canto",
    "Damazo Sepúlveda"
];

const colores = [
    "azul",
    "rojo",
    "violeta",
    "morado"
]

function lanzarRuleta(min, max) {
    const numeroAleatorio = Math.random() // entre 0 y <1

    const resultado = Math.floor(numeroAleatorio * (max - min + 1)) + min

    return resultado
}

function aleatorioDesdeArreglo(arreglo) {
    // CORRECCIÓN: Se guarda el índice aleatorio para saber la posición exacta del participante seleccionado.
    const index = lanzarRuleta(0, arreglo.length - 1)

    // CORRECCIÓN: Se guarda el nombre del participante antes de eliminarlo del arreglo.
    const elementoArreglo = arreglo[index]

    // CORRECCIÓN: Se elimina del arreglo al participante seleccionado para que no pueda repetirse en futuros lanzamientos.
    arreglo.splice(index, 1)

    return elementoArreglo
}

function renderizarResultado(idElement, texto) {
    const elementoARenderizar = document.getElementById(idElement)

    elementoARenderizar.textContent = texto
}

const getRandomButton = document.querySelector("#getRandom")

getRandomButton.addEventListener("click", () => {
    // CORRECCIÓN: Antes de elegir un participante, se valida si la lista ya está vacía.
    if (participantes.length === 0) {
        // CORRECCIÓN: Si todos ya participaron, se muestra el mensaje solicitado en pantalla.
        renderizarResultado("resultado", "¡Todos participaron!")

        // CORRECCIÓN: Se desactiva el botón para evitar nuevos clics mientras se reinicia el juego.
        getRandomButton.disabled = true

        // CORRECCIÓN: Se recarga la página después de 2 segundos para restaurar el arreglo original de participantes.
        setTimeout(() => {
            window.location.reload()
        }, 2000)

        return
    }

    const resultado = aleatorioDesdeArreglo(participantes)
    renderizarResultado("resultado", resultado)

    // CORRECCIÓN: Después de seleccionar al último participante, se avisa que todos participaron y luego se reinicia.
    if (participantes.length === 0) {
        // CORRECCIÓN: Se desactiva el botón para evitar clics adicionales mientras se muestra el último resultado.
        getRandomButton.disabled = true

        // CORRECCIÓN: Se espera un momento para que se alcance a ver el último participante seleccionado.
        setTimeout(() => {
            renderizarResultado("resultado", "¡Todos participaron!")

            // CORRECCIÓN: Se recarga la página para reiniciar el juego con todos los participantes nuevamente disponibles.
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }, 1500)
    }
})
