"use strict"; 

/* ================= SETTING UP THE DRAWING BOARD ================= */

let svgWidth = 1000; // I want my drawing space to be 1000 pixels wide.
let svgHeight = 700; // I want my drawing space to be 700 pixels tall.

let margin = {
    top: 60,    // 60 pixels of empty space at the top
    right: 100, // 100 pixels of empty space on the right
    bottom: 80, // 80 pixels of empty space at the bottom
    left: 80    // 80 pixels of empty space on the left
};

// Calculate the actual space we have left after removing the margins.
let width = svgWidth - margin.left - margin.right;
let height = svgHeight - margin.top - margin.bottom;

let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Create a group and shift it inside the margins so everything stays aligned properly
let viz = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/* ================= DATA ================= */

let data = [
    {commitments:4, hours:7, unexpected:1, effectiveness:4},
    {commitments:3, hours:5, unexpected:0, effectiveness:5},
    {commitments:2, hours:6.5, unexpected:0, effectiveness:5},
    {commitments:1, hours:3, unexpected:4, effectiveness:3},
    {commitments:2, hours:2.5, unexpected:6, effectiveness:1},
    {commitments:1, hours:3, unexpected:0, effectiveness:5},
    {commitments:3, hours:6, unexpected:5, effectiveness:1},
    {commitments:2, hours:4.5, unexpected:0, effectiveness:4},
    {commitments:4, hours:8, unexpected:3, effectiveness:2},
    {commitments:2, hours:6, unexpected:0, effectiveness:4},
    {commitments:3, hours:8.5, unexpected:1, effectiveness:3},
    {commitments:4, hours:5, unexpected:3, effectiveness:2},
    {commitments:2, hours:4, unexpected:5, effectiveness:3},
    {commitments:3, hours:9, unexpected:5, effectiveness:1},
    {commitments:2, hours:5, unexpected:0, effectiveness:5},
    {commitments:4, hours:8, unexpected:5, effectiveness:1},
    {commitments:4, hours:7, unexpected:0, effectiveness:5}
];

/* ================= SCALES ================= */

// Scales convert data values into pixel positions on the screen

// X-axis scale (commitments → horizontal position)
let xScale = d3.scaleLinear()
    .domain([0, 6]) // data values range
    .range([0, width]); // pixel range

// Y-axis scale (effectiveness → vertical position)
// Note: range is reversed because SVG starts from the top
let yScale = d3.scaleLinear()
    .domain([0, 5.5])
    .range([height, 0]);

// Radius scale (unexpected events → bubble size)
// sqrt makes sizes look bigger
let radiusScale = d3.scaleLinear()
    .domain([0, 6])
    .range([5, 50]);

// Color scale (hours → color)
// Low hours = blue, high hours = red
let colorScale = d3.scaleLinear()
    .domain([2.5, 9])
    .range(["blue", "red"]);

/* ================= AXES ================= */

// Create axis 
let xAxis = d3.axisBottom(xScale).ticks(6);
let yAxis = d3.axisLeft(yScale).ticks(5);

// Draw X-axis at bottom
viz.append("g")
    .attr("transform", "translate(0," + height + ")")
    .attr("class", "axis")
    .call(xAxis);

// Draw Y-axis on left
viz.append("g")
    .attr("class", "axis")
    .call(yAxis);

/* ================= LABELS ================= */

// X-axis label
viz.append("text")
    .attr("x", width / 2)
    .attr("y", height + 50)
    .attr("text-anchor", "middle")
    .attr("class", "axisLabel")
    .text("Number of Scheduled Commitments");

// Y-axis label
viz.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -50)
    .attr("text-anchor", "middle")
    .attr("class", "axisLabel")
    .text("Time Management Effectiveness (1-5)");

/* ================= BUBBLES ================= */

// Bind data and create one circle per data point
viz.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return xScale(d.commitments); }) // horizontal position
    .attr("cy", function(d) { return yScale(d.effectiveness); }) // vertical position
    .attr("r", function(d) { return radiusScale(d.unexpected); }) // size
    .attr("fill", function(d) { return colorScale(d.hours); }) // colour
    .attr("opacity", 0.7)
    .attr("stroke", "black");

/* ================= COLOR LEGEND ================= */

// Create gradient for color legend
let defs = svg.append("defs");

let gradient = defs.append("linearGradient")
    .attr("id", "gradient");

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "blue");

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "red");

// Draw gradient bar
svg.append("rect")
    .attr("x", margin.left)
    .attr("y", svgHeight - 40)
    .attr("width", 300)
    .attr("height", 15)
    .style("fill", "url(#gradient)");

// Label min/max values
svg.append("text")
    .attr("x", margin.left)
    .attr("y", svgHeight - 45)
    .text("2.5h");

svg.append("text")
    .attr("x", margin.left + 300)
    .attr("y", svgHeight - 45)
    .attr("text-anchor", "end")
    .text("9h");

/* ================= SIZE LEGEND ================= */

// Create group for size legend
let sizeLegend = svg.append("g")
    .attr("transform", "translate(" + (svgWidth - 180) + ", 140)");

// Example values for size
let sizeValues = [1, 3, 6];

// Draw circles
sizeLegend.selectAll("circle")
    .data(sizeValues)
    .enter()
    .append("circle")
    .attr("cy", function(d, i) { return i * 70; })
    .attr("r", function(d) { return radiusScale(d); })
    .attr("fill", "none")
    .attr("stroke", "black");

// Labels for circles
sizeLegend.selectAll("text")
    .data(sizeValues)
    .enter()
    .append("text")
    .attr("x", 60)
    .attr("y", function(d, i) { return i * 70; })
    .attr("dy", "0.35em")
    .text(function(d) {
        if (d === 1) return "Small (0–2)";
        if (d === 3) return "Medium (3–4)";
        return "Large (5–6)";
    })
    .style("font-size", "12px");

// Title for size legend
svg.append("text")
    .attr("x", svgWidth - 180)
    .attr("y", 110)
    .text("Size")
    .style("font-weight", "bold");