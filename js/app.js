// Variables
const divResultado = document.querySelector('#resultado');
const selectYear = document.querySelector('#year');
const selectMarca = document.querySelector('#marca');
const selectTransmision = document.querySelector('#transmision');
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

function llenarSelect(){
    llenarSelectYear();
    llenarSelectMarca();
    llenarSelectTransmision();
}

function llenarSelectYear() {
    const maxYear = new Date().getFullYear();
    const minYear = maxYear - 10;
    
    for(let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option); // Agrega las opciones de año al select
    }
}

function llenarSelectMarca(){
    const marcas = new Set();

    autos.forEach(auto => {
        marcas.add(auto.marca);
    });
    const arrayMarcas = [...marcas].sort();

    // Creando elemento option
    arrayMarcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        selectMarca.appendChild(option);
    })
    
}

function llenarSelectTransmision(){
    const transmisiones = new Set();

    autos.forEach(auto => {
        transmisiones.add(auto.transmision);
    });
    const arrayTransmision = [...transmisiones].sort();

    // Creando elemento option
    arrayTransmision.forEach(transmision => {
        const option = document.createElement('option');
        option.value = transmision;
        option.textContent = transmision;
        selectTransmision.appendChild(option);
    })
    
}
