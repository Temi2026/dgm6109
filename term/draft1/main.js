"use strict";

let svgWidth = 1000;
let svgHeight = 700;

let margin = {
    top: 60,
    right: 100,
    bottom: 80,
    left: 80
};

let width = svgWidth - margin.left - margin.right;
let height = svgHeight - margin.top - margin.bottom;

let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let viz = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

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

let xScale = d3.scaleLinear()
    .domain([0, 6])
    .range([0, width]);

let yScale = d3.scaleLinear()
    .domain([0, 5.5])
    .range([height, 0]);

let radiusScale = d3.scaleSqrt()
    .domain([0, 6])
    .range([5, 80]);

let colorScale = d3.scaleLinear()
    .domain([2.5, 9])
    .range(["blue", "red"]);

/* ================= AXES ================= */

let xAxis = d3.axisBottom(xScale).ticks(6);
let yAxis = d3.axisLeft(yScale).ticks(5);

viz.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class", "axis")
    .call(xAxis);

viz.append("g")
    .attr("class", "axis")
    .call(yAxis);

/* ================= LABELS ================= */

viz.append("text")
    .attr("x", width / 2)
    .attr("y", height + 50)
    .attr("text-anchor", "middle")
    .attr("class", "axisLabel")
    .text("Number of Scheduled Commitments");

viz.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -50)
    .attr("text-anchor", "middle")
    .attr("class", "axisLabel")
    .text("Time Management Effectiveness (1-5)");

/* ================= BUBBLES ================= */

viz.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.commitments))
    .attr("cy", d => yScale(d.effectiveness))
    .attr("r", d => radiusScale(d.unexpected))
    .attr("fill", d => colorScale(d.hours))
    .attr("opacity", 0.7)
    .attr("stroke", "black");

/* ================= COLOR LEGEND ================= */

let defs = svg.append("defs");

let gradient = defs.append("linearGradient")
    .attr("id", "gradient");

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "blue");

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "red");

svg.append("rect")
    .attr("x", margin.left)
    .attr("y", svgHeight - 40)
    .attr("width", 300)
    .attr("height", 15)
    .style("fill", "url(#gradient)");

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

let sizeLegend = svg.append("g")
    .attr("transform", `translate(${svgWidth - 180}, 140)`);

// Values to represent small, medium, large
let sizeValues = [1, 3, 6];

sizeLegend.selectAll("circle")
    .data(sizeValues)
    .enter()
    .append("circle")
    .attr("cy", (d, i) => i * 70)
    .attr("r", d => radiusScale(d))
    .attr("fill", "none")
    .attr("stroke", "black");

sizeLegend.selectAll("text")
    .data(sizeValues)
    .enter()
    .append("text")
    .attr("x", 60)
    .attr("y", (d, i) => i * 70)
    .attr("dy", "0.35em")
    .text(d => d === 1 ? "Small (0–2)" :
               d === 3 ? "Medium (3–4)" :
               "Large (5–6)")
    .style("font-size", "12px");

// Legend title
svg.append("text")
    .attr("x", svgWidth - 180)
    .attr("y", 110)
    .text("Size")
    .style("font-weight", "bold");