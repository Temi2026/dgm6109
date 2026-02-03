/*
    Project 2-3: Credit Card Verification
    Uses beginner-level JavaScript and follows course rules
*/

function processCard() {

    let cardType = document.getElementById("cardType").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let validationCode = document.getElementById("validationCode").value;
    let zipCode = document.getElementById("zipCode").value;

    let output = document.getElementById("output");
    output.innerHTML = "";

    // Check card type
    if (cardType == "") {
        output.innerHTML = "Please select a credit card type.";
        return;
    }

    // Check card number length
    if (cardType == "charicard") {
        if (cardNumber.length != 6) {
            output.innerHTML = "Charicard numbers must be exactly 6 digits.";
            return;
        }
    }

    if (cardType == "gengcard") {
        if (cardNumber.length != 8) {
            output.innerHTML = "Gengcard numbers must be exactly 8 digits.";
            return;
        }
    }

    // Check validation code length
    if (validationCode.length != 4) {
        output.innerHTML = "Validation code must be exactly 4 digits.";
        return;
    }

    // Check ZIP code length
    if (zipCode.length != 5) {
        output.innerHTML = "ZIP code must be exactly 5 digits.";
        return;
    }

    // Sum credit card digits
    let cardSum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        cardSum = cardSum + Number(cardNumber[i]);
    }

    // Compare first two validation digits
    let firstTwo = Number(validationCode[0] + validationCode[1]);
    if (firstTwo != cardSum) {
        output.innerHTML = "Your validation code does not match this credit card number.";
        return;
    }

    // Sum ZIP code digits
    let zipSum = 0;
    for (let j = 0; j < zipCode.length; j++) {
        zipSum = zipSum + Number(zipCode[j]);
    }

    // Compare last two validation digits
    let lastTwo = Number(validationCode[2] + validationCode[3]);
    if (lastTwo != zipSum) {
        output.innerHTML = "Your validation code does not match your address.";
        return;
    }

    // Success
    output.innerHTML = "Your credit card information has been saved successfully. Happy Shopping!";
}