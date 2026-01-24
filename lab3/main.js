"use strict";

document.getElementById("submit")
    .addEventListener("click", function () {

        // Get Fahrenheit from input
        let fahrenheit = document.getElementById("inputF").value;
        let conversionType = document.getElementById("conversionChoice").value;

        // Convert input to number
        fahrenheit = Number(fahrenheit);

        // SAME calculations as Lab 1
        let celsius = (fahrenheit - 32) * 5 / 9;
        let kelvin = celsius + 273.15;

        // Always show original temperature
        output("Temperature (Fahrenheit): " + fahrenheit);

        // Conditional output
        if (conversionType === "c") {
            output("Temperature (Celsius): " + celsius);
        } else {
            output("Temperature (Kelvin): " + kelvin);
        }

    });
