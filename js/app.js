// Variables
const div_resultado = document.querySelector('#resultado');


// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})

// Funciones
function mostrarAutos() {
    autos.forEach(auto => {
        // Se crea el elemento HTML
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: $ ${precio} - Color: ${color}
        `;
        // Se añade al DOM
        div_resultado.appendChild(autoHTML);
    });
}