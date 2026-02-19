"use strict"

/* Configuration variables: drawing */
let svgWidth = 600;
let svgHeight = 400;
let margin = 50;

/* Resize div to match width of visualization */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw outer border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw margin border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

/* DATASET (12 observations) */
let dataset = [
    { commitments: 1, effectiveness: 2 },
    { commitments: 2, effectiveness: 3 },
    { commitments: 3, effectiveness: 3 },
    { commitments: 4, effectiveness: 4 },
    { commitments: 5, effectiveness: 5 },
    { commitments: 2, effectiveness: 2 },
    { commitments: 3, effectiveness: 4 },
    { commitments: 4, effectiveness: 3 },
    { commitments: 1, effectiveness: 1 },
    { commitments: 5, effectiveness: 4 },
    { commitments: 3, effectiveness: 2 },
    { commitments: 4, effectiveness: 5 }
];

/* SCALES */
let xScale = d3.scaleLinear()
    .domain([0, 5])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, 5])
    .range([svgHeight - margin, margin]);

/* DRAW POINTS */
svg.selectAll("circle")
    .data(dataset)
    .join("circle")
    .attr("r", 6)
    .attr("fill", "black")
    .attr("cx", function(d) {
        return xScale(d.commitments);
    })
    .attr("cy", function(d) {
        return yScale(d.effectiveness);
    });

/**** AXIS LABELS ****/

/* X Axis Label */
svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - 10)
    .attr("text-anchor", "middle")
    .text("Number of Scheduled Daily Commitments");

/* Y Axis Label */
svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", 15)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Time Management Effectiveness (1-5)");

/**** VALUE LABELS ****/

/* Origin label */
svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - margin + 15)
    .attr("text-anchor", "middle")
    .text("0");

/* Max X label */
svg.append("text")
    .attr("x", svgWidth - margin)
    .attr("y", svgHeight - margin + 15)
    .attr("text-anchor", "middle")
    .text("5");

/* Max Y label */
svg.append("text")
    .attr("x", margin - 15)
    .attr("y", margin)
    .attr("text-anchor", "middle")
    .text("5");
