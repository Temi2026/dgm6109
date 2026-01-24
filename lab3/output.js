"use strict";

/*
  output(text)
  Adds a line of text to the div with id="output"
*/

function output(text) {

    if (text === undefined) {
        console.log("WARNING: You did not provide anything to output");
        return;
    }

    let outputDiv = document.getElementById("output");

    let p = document.createElement("p");
    p.textContent = text;

    outputDiv.appendChild(p);
}
