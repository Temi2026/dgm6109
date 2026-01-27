function processForm() {
  if (validateData()) {
    evaluateAnswers();
  }
}

/*
  validateData
  ------------
  Checks that all user input follows the required format rules.
*/
function validateData() {
  var cardType = document.getElementById("cardType").value;
  var cardNumber = document.getElementById("cardNumber").value;
  var validationCode = document.getElementById("validationCode").value;
  var zipCode = document.getElementById("zipCode").value;

  // Credit card type must be selected
  if (cardType === "") {
    showOutput("Please select a credit card type.");
    return false;
  }

  // Credit card number must contain digits only
  if (!/^\d+$/.test(cardNumber)) {
    showOutput("Credit card number must contain only digits.");
    return false;
  }

  // Credit card number length depends on card type
  if (cardType === "Charicard" && cardNumber.length !== 6) {
    showOutput("Charicard numbers must be exactly 6 digits.");
    return false;
  }

  if (cardType === "Gengcard" && cardNumber.length !== 8) {
    showOutput("Gengcard numbers must be exactly 8 digits.");
    return false;
  }

  // Validation code must be exactly 4 digits
  if (!/^\d{4}$/.test(validationCode)) {
    showOutput("Please enter a 4-digit validation code.");
    return false;
  }

  // ZIP code must be exactly 5 digits
  if (!/^\d{5}$/.test(zipCode)) {
    showOutput("Please enter a 5-digit ZIP code.");
    return false;
  }

  return true;
}

/*
  evaluateAnswers
  ---------------
  Applies the project exception rules and displays final output.
*/
function evaluateAnswers() {
  var cardNumber = document.getElementById("cardNumber").value;
  var validationCode = document.getElementById("validationCode").value;
  var zipCode = document.getElementById("zipCode").value;

  // Sum of digits in credit card number
  var cardSum = 0;
  for (var i = 0; i < cardNumber.length; i++) {
    cardSum += parseInt(cardNumber[i]);
  }

  // First two digits of validation code
  var firstTwo = parseInt(validationCode.substring(0, 2));

  if (firstTwo !== cardSum) {
    showOutput("Your validation code does not match this credit card number.");
    return false;
  }

  // Sum of digits in ZIP code
  var zipSum = 0;
  for (var j = 0; j < zipCode.length; j++) {
    zipSum += parseInt(zipCode[j]);
  }

  // Last two digits of validation code
  var lastTwo = parseInt(validationCode.substring(2, 4));

  if (lastTwo !== zipSum) {
    showOutput("Your validation code does not match your address.");
    return false;
  }

  showOutput("Your credit card information has been saved successfully. Happy Shopping!");
  return true;
}
