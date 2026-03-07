const cartas = [
    {
        imagen: "Cartas/bidoff.png",
        precio: 30,
        duracion: "3 horas"
    },
    {
        imagen: "Cartas/cambio.png",
        precio: 20,
        duracion: "Al instante"
    },
    {
        imagen: "Cartas/candado.png",
        precio: 20,
        duracion: "1 hora y 30 minutos"
    },
    {
        imagen: "Cartas/cap.png",
        precio: 25,
        duracion: "Al instante"
    },
    {
        imagen: "Cartas/copia.png",
        precio: 60,
        duracion: "Al instante"
    },
    {
        imagen: "Cartas/especial.png",
        precio: 40,
        duracion: "3 horas"
    },
    {
        imagen: "Cartas/hembras.png",
        precio: 40,
        duracion: "2 horas"
    },
    {
        imagen: "Cartas/karateka.png",
        precio: 40,
        duracion: "3 horas"
    },
    {
        imagen: "Cartas/la_llamada.png",
        precio: 75,
        duracion: "Al instante"
    },
    {
        imagen: "Cartas/la_parca.png",
        precio: 75,
        duracion: "Al instante"
    },
    {
        imagen: "Cartas/machos.png",
        precio: 40,
        duracion: "2 horas"
    },
    {
        imagen: "Cartas/monotype.png",
        precio: 50,
        duracion: "3 horas"
    },
    {
        imagen: "Cartas/ruleta.png",
        precio: 25,
        duracion: "Al instante"
    },
    {
        imagen: "Cartas/tr.png",
        precio: 60,
        duracion: "Al instante"
    },
    {
        imagen: "Cartas/vetado.png",
        precio: 15,
        duracion: "3 hora"
    },
    {
        imagen: "Cartas/doble_o_nada.png",
        precio: "a tu elección",
        duracion: "Al instante"
    },
    {
        imagen: "Cartas/desarme.png",
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




