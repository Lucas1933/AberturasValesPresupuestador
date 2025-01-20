const data = [
    { "medidas": { "ancho": 60, "alto": 40 }, "rejas": 17220, "entero": 33940, "repartido": 45570, "mosquitero": 18100 },
    { "medidas": { "ancho": 100, "alto": 40 }, "rejas": 18470, "entero": 44720, "repartido": 60440, "mosquitero": 20400 },
    { "medidas": { "ancho": 120, "alto": 40 }, "rejas": 19220, "entero": 51190, "repartido": 68460, "mosquitero": 22380 },
    { "medidas": { "ancho": 150, "alto": 40 }, "rejas": 20200, "entero": 60380, "repartido": 83270, "mosquitero": 23460 },
    { "medidas": { "ancho": 180, "alto": 40 }, "rejas": 21260, "entero": 67370, "repartido": 95790, "mosquitero": 25950 },
    { "medidas": { "ancho": 200, "alto": 40 }, "rejas": 24120, "entero": 69880, "repartido": 106470, "mosquitero": 29690 },
    { "medidas": { "ancho": 100, "alto": 80 }, "rejas": 27600, "entero": 59280, "repartido": 84000, "mosquitero": 24950, "persiana": 28270 },
    { "medidas": { "ancho": 100, "alto": 90 }, "rejas": 31040, "entero": 62580, "repartido": 90300, "mosquitero": 26930, "persiana": 30760 },
    { "medidas": { "ancho": 120, "alto": 90 }, "rejas": 37240, "entero": 68340, "repartido": 101480, "mosquitero": 29070, "persiana": 44330 },
    { "medidas": { "ancho": 150, "alto": 90 }, "rejas": 46550, "entero": 78590, "repartido": 113820, "mosquitero": 32420, "persiana": 55050 },
    { "medidas": { "ancho": 100, "alto": 110 }, "rejas": 37930, "entero": 71400, "repartido": 100800, "mosquitero": 30750, "persiana": 36760 },
    { "medidas": { "ancho": 120, "alto": 110 }, "rejas": 45340, "entero": 79840, "repartido": 111200, "mosquitero": 33110, "persiana": 43960 },
    { "medidas": { "ancho": 150, "alto": 110 }, "rejas": 56930, "entero": 90500, "repartido": 126740, "mosquitero": 36480, "persiana": 47350 },
    { "medidas": { "ancho": 180, "alto": 110 }, "rejas": 68270, "entero": 98620, "repartido": 142170, "mosquitero": 39370, "persiana": 55050 },
    { "medidas": { "ancho": 200, "alto": 110 }, "rejas": 75900, "entero": 105640, "repartido": 152570, "mosquitero": 42480, "persiana": 73390 },
    { "medidas": { "ancho": 120, "alto": 150 }, "rejas": 60700, "entero": 96020, "repartido": 138760, "mosquitero": 41850, "persiana": 57820 },
    { "medidas": { "ancho": 150, "alto": 150 }, "rejas": 77900, "entero": 107390, "repartido": 156450, "mosquitero": 46100, "persiana": 72580 },
    { "medidas": { "ancho": 180, "alto": 150 }, "rejas": 93080, "entero": 119280, "repartido": 174090, "mosquitero": 50400, "persiana": 86700 },
    { "medidas": { "ancho": 200, "alto": 150 }, "rejas": 103480, "entero": 126640, "repartido": 185950, "mosquitero": 53130, "persiana": 97290 },
    { "medidas": { "ancho": 120, "alto": 200 }, "rejas": 145950, "entero": 138340, "repartido": 187490, "mosquitero": 52260, "persiana": 79120 },
    { "medidas": { "ancho": 150, "alto": 200 }, "rejas": 164640, "entero": 154390, "repartido": 211830, "mosquitero": 57460, "persiana": 98230 },
    { "medidas": { "ancho": 180, "alto": 200 }, "rejas": 183000, "entero": 171350, "repartido": 229950, "mosquitero": 62000, "persiana": 118180 },
    { "medidas": { "ancho": 200, "alto": 200 }, "rejas": 193500, "entero": 184560, "repartido": 252400, "mosquitero": 65560, "persiana": 131640 }
];

const selectElement = document.getElementById("medidas");
data.forEach(item => {
    const option = document.createElement("option");
    option.value = `${item.medidas.ancho}x${item.medidas.alto}`;
    option.textContent = `${item.medidas.ancho}x${item.medidas.alto}`;
    selectElement.appendChild(option);
});

function actualizarPersiana() {
    const medida = document.getElementById("medidas").value;
    const seleccion = data.find(item => `${item.medidas.ancho}x${item.medidas.alto}` === medida);

    const persianaCheckbox = document.getElementById("persiana");
    if (seleccion && seleccion.persiana) {
        persianaCheckbox.disabled = false;
    } else {
        persianaCheckbox.disabled = true;
        persianaCheckbox.checked = false;
    }
}

function calcularCosto() {
    const medida = document.getElementById("medidas").value;
    const seleccion = data.find(item => `${item.medidas.ancho}x${item.medidas.alto}` === medida);

    if (!seleccion) {
        document.getElementById("resultado").innerText = "Medida no encontrada.";
        return;
    }

    let costoTotal = 0;

    if (document.getElementById("rejas").checked) costoTotal += seleccion.rejas;
    if (document.getElementById("entero").checked) costoTotal += seleccion.entero;
    if (document.getElementById("repartido").checked) costoTotal += seleccion.repartido;
    if (document.getElementById("mosquitero").checked) costoTotal += seleccion.mosquitero;
    if (document.getElementById("persiana").checked && seleccion.persiana) costoTotal += seleccion.persiana;

    document.getElementById("resultado").innerText = `Costo total: $${costoTotal.toFixed(2)}`;
}