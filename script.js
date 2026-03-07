const cartas = [
    {
        imagen: "cartas/bidoff.png",
        precio: 50,
        duracion: "3 horas"
    },
    {
        imagen: "cartas/cambio.png",
        precio: 80,
        duracion: "Al instante"
    },
    {
        imagen: "cartas/candado.png",
        precio: 120,
        duracion: "1 hora y 30 minutos"
    },
    {
        imagen: "cartas/cap.png",
        precio: 100,
        duracion: "Al instante"
    },
    {
        imagen: "cartas/copia.png",
        precio: 80,
        duracion: "Al instante"
    },
    {
        imagen: "cartas/especial.png",
        precio: 120,
        duracion: "5 horas"
    },
    {
        imagen: "cartas/hembras.png",
        precio: 50,
        duracion: "2 horas"
    },
    {
        imagen: "cartas/karateka.png",
        precio: 80,
        duracion: "3 horas"
    },
    {
        imagen: "cartas/la_llamada.png",
        precio: 120,
        duracion: "Al instante"
    },
    {
        imagen: "cartas/la_parca.png",
        precio: 50,
        duracion: "Al instante"
    },
    {
        imagen: "cartas/machos.png",
        precio: 80,
        duracion: "2 horas"
    },
    {
        imagen: "cartas/monotype.png",
        precio: 120,
        duracion: "2 horas"
    },
    {
        imagen: "cartas/ruleta.png",
        precio: 50,
        duracion: "Al instante"
    },
    {
        imagen: "cartas/TR.png",
        precio: 80,
        duracion: "Al instante"
    },
    {
        imagen: "cartas/vetado.png",
        precio: 120,
        duracion: "1 hora"
    },
    {
        imagen: "cartas/doble_o_nada.png",
        precio: "A tu elección",
        duracion: "Al instante"
    },
    {
        imagen: "cartas/desarme.png",
        precio: 40,
        duracion: "3 horas"
    }
]

const contenedor = document.getElementById("cards")

cartas.forEach(carta => {

    const precioHTML = typeof carta.precio === "number"
        ? `Precio ${carta.precio} <span class="moneda">$</span>`
        : `Precio ${carta.precio}`

    const div = document.createElement("div")
    div.className = "card"

    div.innerHTML = `
        <img src="${carta.imagen}">
        <div class="info">
            <div class="precio">
                ${precioHTML}
            </div>
            <div class="duracion">
                Duración: ${carta.duracion}
            </div>
            <button class="boton-ver">Ver carta</button>
        </div>
    `

    contenedor.appendChild(div)
})

const modal = document.getElementById("modal")
const imagenGrande = document.getElementById("imagen-grande")
const cerrar = document.querySelector(".cerrar")

document.addEventListener("click", function(e) {

    if (e.target.classList.contains("boton-ver")) {

        const imagen = e.target
            .closest(".card")
            .querySelector("img").src

        imagenGrande.src = imagen
        modal.style.display = "block"
    }

})

cerrar.onclick = function() {
    modal.style.display = "none"
}

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none"
    }
}
