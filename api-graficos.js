// Datos ficticios de porcentajes por país y ciudad
var datosPorcentajes = {
    "Argentina": {
        "Buenos Aires": Math.floor(Math.random() * 100), // Genera un número aleatorio entre 0 y 100
        "Córdoba": Math.floor(Math.random() * 100),
        "Rosario": Math.floor(Math.random() * 100)
    },
    "España": {
        "Madrid": Math.floor(Math.random() * 100),
        "Barcelona": Math.floor(Math.random() * 100),
        "Sevilla": Math.floor(Math.random() * 100)
    }
};

var mapa = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(mapa);

function agregarMarcador(direccion, porcentaje) {
    var coordenadas = obtenerCoordenadas(direccion);
    if (coordenadas) {
        L.circleMarker(coordenadas, {
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.5,
            radius: Math.sqrt(porcentaje) * 5
        }).addTo(mapa);

        // Crear contenedor para mostrar la información de la ciudad
        var info = document.getElementById('info');
        var ciudadInfo = document.createElement('div');
        ciudadInfo.className = 'ciudad-info';
        var canvasId = direccion.replace(/\s/g, '') + "-chart";
        ciudadInfo.innerHTML = "<b>" + direccion + "</b><br><div id='" + canvasId + "' style='height: 20px; width: 200px; background-color: rgba(255, 99, 132, 0.2);'><div id='" + canvasId + "-bar' style='height: 100%; width: " + porcentaje + "%; background-color: rgba(255, 99, 132, 1);'></div></div><br><span>" + porcentaje + "%</span>"; // Añadimos un div para mostrar la barra de porcentaje
        info.appendChild(ciudadInfo);
    } else {
        console.error('No se pudieron encontrar las coordenadas para:', direccion);
    }
}

function obtenerCoordenadas(direccion) {
    // Se deberían tener coordenadas predefinidas para las ciudades
    var coordenadas = {
        "Buenos Aires, Argentina": [-34.6037, -58.3816],
        "Córdoba, Argentina": [-31.4201, -64.1888],
        "Rosario, Argentina": [-32.9442, -60.6505],
        "Madrid, España": [40.4168, -3.7038],
        "Barcelona, España": [41.3851, 2.1734],
        "Sevilla, España": [37.3891, -5.9845],
        // Agregar más coordenadas según sea necesario
    };
    return coordenadas[direccion];
}

// Función para actualizar los porcentajes cada cierto tiempo
function actualizarPorcentajes() {
    setInterval(function() {
        // Limpiar el contenedor de información
        document.getElementById('info').innerHTML = '';

        // Iterar sobre los datos y agregar marcadores con nuevos porcentajes
        for (var pais in datosPorcentajes) {
            for (var ciudad in datosPorcentajes[pais]) {
                var nuevoPorcentaje = Math.floor(Math.random() * 100); // Generar un nuevo porcentaje aleatorio
                datosPorcentajes[pais][ciudad] = nuevoPorcentaje; // Actualizar el porcentaje en los datos
                agregarMarcador(ciudad + ', ' + pais, nuevoPorcentaje); // Agregar el marcador con el nuevo porcentaje
            }
        }
    }, 5000); // Actualizar cada 5 segundos (5000 milisegundos)
}

// Llamar a la función para iniciar la actualización de porcentajes
actualizarPorcentajes();
