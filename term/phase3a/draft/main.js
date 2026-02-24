"use strict"

/* Configuration */
let svgWidth = 700;
let svgHeight = 450;
let margin = 70;

/* Resize container */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create SVG */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw borders */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

/* DATASET (12 observations, 3 properties) */
let dataset = [
    { commitments: 5, effectiveness: 4, stress: 5 },
    { commitments: 4, effectiveness: 5, stress: 4 },
    { commitments: 3, effectiveness: 4, stress: 4 },
    { commitments: 5, effectiveness: 5, stress: 5 },
    { commitments: 4, effectiveness: 3, stress: 3 },
    { commitments: 3, effectiveness: 3, stress: 3 },
    { commitments: 2, effectiveness: 2, stress: 2 },
    { commitments: 1, effectiveness: 1, stress: 1 },
    { commitments: 2, effectiveness: 3, stress: 2 },
    { commitments: 3, effectiveness: 2, stress: 3 },
    { commitments: 4, effectiveness: 4, stress: 4 },
    { commitments: 1, effectiveness: 2, stress: 1 }
];

/* Sort so largest circles draw first */
dataset.sort(function(a, b) {
    return b.stress - a.stress;
});

/* Scales */
let xScale = d3.scaleLinear()
    .domain([0, 5])
    .range([margin, svgWidth - margin - 120]);

let yScale = d3.scaleLinear()
    .domain([0, 5])
    .range([svgHeight - margin, margin]);

let radiusScale = d3.scaleLinear()
    .domain([1, 5])
    .range([5, 20]);

/* Draw circles */
svg.selectAll("circle.data")
    .data(dataset)
    .join("circle")
    .attr("class", "data")
    .attr("fill", "black")
    .attr("cx", function(d) {
        return xScale(d.commitments);
    })
    .attr("cy", function(d) {
        return yScale(d.effectiveness);
    })
    .attr("r", function(d) {
        return radiusScale(d.stress);
    });

/* Axis Labels */
svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - 20)
    .attr("text-anchor", "middle")
    .text("Number of Scheduled Daily Commitments");

svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", 25)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Time Management Effectiveness (1-5)");

/* Value Labels */
svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - margin + 20)
    .text("0");

svg.append("text")
    .attr("x", svgWidth - margin - 120)
    .attr("y", svgHeight - margin + 20)
    .text("5");

svg.append("text")
    .attr("x", margin - 20)
    .attr("y", margin)
    .text("5");

/* KEY (Legend) */
let keyX = svgWidth - 130;
let keyY = margin + 40;

svg.append("text")
    .attr("x", keyX)
    .attr("y", keyY - 20)
    .text("Stress Level");

let keyValues = [1, 3, 5];

keyValues.forEach(function(value, index) {

    svg.append("circle")
        .attr("cx", keyX)
        .attr("cy", keyY + (index * 60))
        .attr("r", radiusScale(value))
        .attr("fill", "black");

    svg.append("text")
        .attr("x", keyX + 35)
        .attr("y", keyY + (index * 60) + 5)
        .text("Stress = " + value);
});
