// Variables
const divResultado = document.querySelector('#resultado');
const selectYear = document.querySelector('#year');

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //Muestra los autos al cargar
    llenarSelect(); //Llena los campos de seleccion segun la informacion en la DB

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
        divResultado.appendChild(autoHTML);
    });
}

function llenarSelect() {
    for(let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option); // Agrega las opciones de año al select
    }
}