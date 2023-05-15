function loadingWeatherReport() {
    alert("Loading weather report...");
}

function dismissCookies() {
    let cookiesBox = document.querySelector("#cookies-box");
    cookiesBox.style.display = "none";
}

// function convertToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// function convertToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// function handleConversion() {
//     const tempSelector = document.getElementById("convert_temps");
//     const selectedOption = tempSelector.options[tempSelector.selectedIndex].value;
//     const inputElement = document.getElementById("temperature-input");
//     const inputTemperature = Number(inputElement.value);
//     const outputElement = document.getElementById("converted-temperature");

//     if (selectedOption === "celsius") {
//         const convertedTemperature = convertToCelsius(inputTemperature);
//         outputElement.innerHTML = `${convertedTemperature.toFixed(0)}°C`;
//     } else {
//         const convertedTemperature = convertToFahrenheit(inputTemperature);
//         outputElement.innerHTML = `${convertedTemperature.toFixed(0)}°F`;
//     }
// }

// const inputElement = document.getElementById("temperature-input");
// inputElement.addEventListener("input", handleConversion);

// const tempSelector = document.getElementById("convert_temps");
// tempSelector.addEventListener("change", handleConversion);


function updateTemperatures() {
    // Select all the elements to be updated
    let targetedElements = document.querySelectorAll(".high-and-low-temps p");

    // Loop through each element and update its innerText
    targetedElements.forEach(function (element) {
        let fahrenheit = Number(element.innerText);
        let celsius = (fahrenheit - 32) * 5 / 9;
        element.innerText = celsius.toFixed(0) + "°";
    });
}


// function convertToFahrenheit() {
//     let tempSelector = document.getElementById("#convert_temps").value;
//     let targetedElements = document.querySelector(".high-and-low-temps p");
//     let celsius = Number(targetedElements.innerText);
//     let fahrenheit = (celsius * 9 / 5) + 32;
//     targetedElements.innerText = fahrenheit;

//     if (tempSelector == "fahrenheit") {
//         targetedElements.innerHTML = fahrenheit.toFixed(0) + "°";
//     }
//     else {
//         targetedElements.innerHTML = celsius + "°";
//     }
// }

// function convertToCelsius() {
//     let tempSelector = document.getElementById("convert_temps").value;
//     let targetedElements = document.querySelector(".high-and-low-temps p");
//     let fahrenheit = Number(targetedElements.innerText);
//     let celsius = (fahrenheit - 32) * 5 / 9;
//     targetedElements.innerText = fahrenheit;

//     if (tempSelector == "celsius") {
//         targetedElements.innerHTML = celsius.toFixed(0) + "°";
//     }
//     else {
//         targetedElements.innerHTML = fahrenheit + "°";
//     }
// }
