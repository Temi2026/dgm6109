<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project 2-3 Credit Card Verification</title>
</head>

<body>

<h2>Credit Card Verification</h2>

<form>
    <label for="cardType">Credit Card Type:</label><br>
    <select id="cardType">
        <option value="">-- Select --</option>
        <option value="charicard">Charicard</option>
        <option value="gengcard">Gengcard</option>
    </select>
    <br><br>

    <label for="cardNumber">Credit Card Number:</label><br>
    <input type="text" id="cardNumber">
    <br><br>

    <label for="validationCode">Validation Code (4 digits):</label><br>
    <input type="text" id="validationCode">
    <br><br>

    <label for="zipCode">ZIP Code:</label><br>
    <input type="text" id="zipCode">
    <br><br>

    <button type="button" onclick="processCard()">Submit</button>
</form>

<p id="output"></p>

<!-- Only load ONE JS file -->
<script src="main.js" defer></script>

</body>
</html>
