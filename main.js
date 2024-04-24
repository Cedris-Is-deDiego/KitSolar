function calcularPaneles() {
    var wattsHora = parseFloat(document.getElementById('wattsHora').value);
    var wattsDia = parseFloat(document.getElementById('wattsDia').value);

    if (isNaN(wattsHora) || isNaN(wattsDia) || wattsHora <= 0 || wattsDia <= 0) {
        alert("Por favor, ingrese valores válidos para el consumo en Watts.");
        return;
    }

    var paneles = [
        { nombre: "Panel", watts: 550 },
        { nombre: "Panel", watts: 450 },
        { nombre: "Panel", watts: 375 },
        { nombre: "Panel", watts: 160 },
        { nombre: "Panel", watts: 120 }
    ];

    var inversores = [
        { nombre: "Inversor de", watts: 300 },
        { nombre: "Inversor de", watts: 500 },
        { nombre: "Inversor de", watts: 1000 },
        { nombre: "Inversor de", watts: 3000 },
        { nombre: "Inversor de", watts: 3500 },
        { nombre: "Inversor de", watts: 4200 },
        { nombre: "Inversor de", watts: 5000 },
        { nombre: "Inversor de", watts: 6000 }
    ];

    var baterias = [
        { nombre: "Batería 12V x 100Ah GEL", capacidad: 960 },
        { nombre: "Batería 12V x 150Ah GEL", capacidad: 1440 },
        { nombre: "Batería 12V x 200Ah GEL", capacidad: 1920 },
        { nombre: "Batería 12V x 110Ah Humeda", capacidad: 660 },
        { nombre: "Batería 12V x 160Ah Humeda", capacidad: 960 },
        { nombre: "Batería 12V x 220Ah Humeda", capacidad: 1320 }
    ];

    var resultadoInversor = "";
    for (var i = 0; i < inversores.length; i++) {
        if (inversores[i].watts >= wattsHora) {
            resultadoInversor = inversores[i].nombre + "  " + inversores[i].watts + " Watts";
            break;
        }
    }

    var resultadosHTML = "<h2>¡Necesitaras!</h2>";

    for (var i = 0; i < paneles.length; i++) {
        var produccionDiariaPanel = paneles[i].watts * 5 * 0.9;
        var cantidadPaneles = Math.ceil(wattsDia / produccionDiariaPanel);

        resultadosHTML += "<p>Necesitarás " + cantidadPaneles.toLocaleString() + paneles[i].nombre + " de " + paneles[i].watts.toLocaleString() + " Watts cada uno.</p>";
    }

    resultadosHTML += "<p>El inversor recomendado es: " + resultadoInversor + "</p>";

    resultadosHTML += "<p>Para cubrir el consumo diario de " + wattsDia.toLocaleString() + " Watts, necesitarás:</p>";
    for (var k = 0; k < baterias.length; k++) {
        var vecesUtilizado = Math.ceil(wattsDia / baterias[k].capacidad);

        resultadosHTML += "<p>" + vecesUtilizado.toLocaleString() + " veces la " + baterias[k].nombre + "</p>";
    }
    
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = resultadosHTML;
}
