window.addEventListener("DOMContentLoaded", domLoaded)

function domLoaded() {
    let button = document.getElementById("convertButton")
    button.addEventListener('click', getResults)
    button.addEventListener('click', getResults)
    usercelInpt = document.getElementById("cInput")
    userfahrInpt = document.getElementById("fInput")
    usercelInpt.addEventListener("input", function() {clearTextBox1(userfahrInpt)})
    userfahrInpt.addEventListener("input", function() {clearTextBox2(usercelInpt)})
}

function clearTextBox1() {
    userfahrInpt.value = ""

}
function clearTextBox2() {
    usercelInpt.value = ""

}
function convertCtoF(degreesCelsius) {
        return (degreesCelsius * 9 / 5) + 32
    }

function convertFtoC(degreesFahrenheit) {
    return (degreesFahrenheit - 32) * 5/9
}

function getResults() {
       usercelInpt = document.getElementById("cInput")
       userfahrInpt = document.getElementById("fInput")
       weatherpic = document.getElementById("weatherImage")
       errMsg = document.getElementById("errorMessage")
       errMsg.innerHTML = ""

if (usercelInpt.value.length > 0) {
    let getcel = parseFloat(usercelInpt.value)
    if (!isNaN(getcel)) {
        userfahrInpt.value = convertCtoF(getcel)
    } else {
        errMsg.innerHTML = "Please enter a valid number"
    }
} else if (userfahrInpt.value.length > 0) {
    let getfahr = parseFloat(userfahrInpt.value)
    if (!isNaN(getfahr)) {
        usercelInpt.value = convertFtoC(getfahr)
    } else {
        errMsg.innerHTML = userfahrInpt + "is not a number"
    }
} else {
    errMsg.innerHTML = usercelInpt + "is not a number"
}

fahrtemp = parseFloat(userfahrInpt.value)
    
    if (!isNaN(fahrtemp)) {
        if (fahrtemp < 32.0) {
            weatherpic.src = "cold.png"
            weatherpic.alt = "Cold"
        } else if (fahrtemp >= 32.0 && fahrtemp <= 50.0) { // Correct the logic and condition
            weatherpic.src = "cool.png"
            weatherpic.alt = "Cool"
        } else if (fahrtemp > 50.0) {
            weatherpic.src = "warm.png"
            weatherpic.alt = "Warm"
        } 
    }
}