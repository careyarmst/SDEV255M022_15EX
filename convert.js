window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    let button = document.getElementById("convertButton");
    button.addEventListener('click', convertCtoF);
    button.addEventListener('click', convertFtoC);
}

function convertCtoF() {
    degreesCelsius = parseFloat(document.getElementById("cInput").value);
    degreesFahrenheit = degreesCelsius * 9 / 5 + 32;
    console.log(degreesFahrenheit);
}

function convertFtoC() {
    degreesFahrenheit = parseFloat(document.getElementById("fInput").value);
    degreesCelsius = (degreesFahrenheit - 32) * 5/9
    console.log(degreesCelsius);
}