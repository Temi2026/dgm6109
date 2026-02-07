"use strict";

// Select SVG canvas
const svg = d3.select("#svgCanvas");

// Button click event
document.getElementById("drawButton").onclick = drawCaterpillar;

function drawCaterpillar() {

    // Clear previous drawing
    svg.selectAll("*").remove();

    // Read user input values
    let x = Number(document.getElementById("xInput").value);
    let y = Number(document.getElementById("yInput").value);

    /*
        Call caterpillar function
        true = show origin point
        change to false if you do not want the origin displayed
    */

    caterpillar(svg, x, y, true);
}
