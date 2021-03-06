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

// Contenedor de filtros para registrar cambios globalmente
const contenedorFiltros = document.querySelector('#filtros');


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
    mostrarAutos(autos); //Muestra los autos al cargar
    llenarSelect(); //Llena los campos de seleccion segun la informacion en la DB
})

// Event listener para los select de búsqueda
contenedorFiltros.addEventListener('change', () => {
    filtrarAuto();
})

selectMarca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
})
selectYear.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
})
selectMinimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = parseInt(e.target.value);
})
selectMaximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = parseInt(e.target.value);
})
selectPuertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
})
selectTransmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
})
selectColor.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
})

// Funciones

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

function mostrarAutos(autos) {
    limpiarResultados();

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

//Funcion que filtra en base a la búsqueda.
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultados();
    }
}

function noResultados() {
    limpiarResultados();
    const mensajeHTML = document.createElement('div');
    mensajeHTML.classList.add('alerta', 'error');
    mensajeHTML.textContent = 'No se encontraron resultados con las opciones de busqueda seleccionadas.'
    divResultado.appendChild(mensajeHTML);
}

function limpiarResultados() {
    while (divResultado.hasChildNodes()) {
        divResultado.firstChild.remove();
    }
}

// Filtros de busqueda
function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}

