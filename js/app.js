// Variables
const selectMarca = document.querySelector('#marca');
const selectYear = document.querySelector('#year');
const selectMinimo = document.querySelector('#minimo');
const selectMaximo = document.querySelector('#maximo');
const selectPuertas = document.querySelector('#puertas');
const selectTransmision = document.querySelector('#transmision');
const selectColor = document.querySelector('#color');

// Contenedor para los resultados.
const divResultado = document.querySelector('#resultado');



// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //Muestra los autos al cargar
    llenarSelect(); //Llena los campos de seleccion segun la informacion en la DB

})

// Event listener para los select de búsqueda
selectMarca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    console.log(datosBusqueda);
})

selectYear.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value;
})
selectMinimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
})
selectMaximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
})
selectPuertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;
})
selectTransmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
})
selectColor.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
})

// Funciones
function mostrarAutos() {
    autos.forEach(auto => {
        // Se crea el elemento HTML
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: $ ${precio} - Color: ${color}
        `;
        // Se añade al DOM
        divResultado.appendChild(autoHTML);
    });
}

function llenarSelect() {
    llenarSelectYear();
    llenarSelectMarca();
    llenarSelectTransmision();
}

function llenarSelectYear() {
    const maxYear = new Date().getFullYear();
    const minYear = maxYear - 10;

    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option); // Agrega las opciones de año al select
    }
}

function llenarSelectMarca() {
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

function llenarSelectTransmision() {
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
