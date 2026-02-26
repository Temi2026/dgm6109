"use strict"

/* ============================= */
/* CONFIGURATION VARIABLES       */
/* ============================= */

let svgWidth = 800;
let svgHeight = 600;

let marginLeft = 90;
let marginRight = 220;
let marginTop = 70;
let marginBottom = 90;

/* Resize container */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create SVG */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* ============================= */
/* DATASET (21 observations)     */
/* ============================= */

let dataset = [
{ hours:7, effectiveness:4, stress:1, dayType:"Work" },
{ hours:5, effectiveness:5, stress:0, dayType:"School" },
{ hours:6.5, effectiveness:5, stress:0, dayType:"Weekend" },
{ hours:3, effectiveness:3, stress:4, dayType:"Weekend" },
{ hours:2.5, effectiveness:1, stress:6, dayType:"Weekend" },
{ hours:3, effectiveness:5, stress:0, dayType:"Weekend" },
{ hours:6, effectiveness:1, stress:5, dayType:"School" },
{ hours:4.5, effectiveness:4, stress:0, dayType:"Weekend" },
{ hours:8, effectiveness:2, stress:3, dayType:"Work" },
{ hours:6, effectiveness:4, stress:0, dayType:"Weekend" },
{ hours:8.5, effectiveness:3, stress:1, dayType:"School" },
{ hours:5, effectiveness:2, stress:3, dayType:"Work" },
{ hours:4, effectiveness:3, stress:5, dayType:"Weekend" },
{ hours:9, effectiveness:1, stress:5, dayType:"School" },
{ hours:5, effectiveness:5, stress:0, dayType:"Weekend" },
{ hours:8, effectiveness:1, stress:5, dayType:"Work" },
{ hours:7, effectiveness:5, stress:0, dayType:"Work" },
{ hours:6, effectiveness:1, stress:6, dayType:"School" },
{ hours:5, effectiveness:3, stress:3, dayType:"Weekend" },
{ hours:4, effectiveness:4, stress:0, dayType:"Weekend" },
{ hours:4.5, effectiveness:5, stress:0, dayType:"Work" }
];

/* Sort so largest bubbles draw first */
dataset.sort(function (a, b) {
    return b.stress - a.stress;
});

/* ============================= */
/* SCALES                        */
/* ============================= */

let xScale = d3.scaleLinear()
    .domain(d3.extent(dataset, d => d.hours))
    .range([marginLeft, svgWidth - marginRight]);

let yScale = d3.scaleLinear()
    .domain([0,5])
    .range([svgHeight - marginBottom, marginTop]);

let radiusScale = d3.scaleSqrt()
    .domain([0,6])
    .range([5,30]);

/* ============================= */
/* AXIS LINES                    */
/* ============================= */

svg.append("line")
    .attr("x1", xScale(d3.min(dataset, d => d.hours)))
    .attr("y1", yScale(0))
    .attr("x2", xScale(d3.max(dataset, d => d.hours)))
    .attr("y2", yScale(0))
    .attr("stroke", "black");

svg.append("line")
    .attr("x1", xScale(d3.min(dataset, d => d.hours)))
    .attr("y1", yScale(0))
    .attr("x2", xScale(d3.min(dataset, d => d.hours)))
    .attr("y2", yScale(5))
    .attr("stroke", "black");

/* ============================= */
/* DRAW CIRCLES                  */
/* ============================= */

svg.selectAll("circle.data")
    .data(dataset)
    .join("circle")
    .attr("class", "data")
    .attr("cx", d => xScale(d.hours))
    .attr("cy", d => yScale(d.effectiveness))
    .attr("r", d => radiusScale(d.stress))
    .attr("fill", function(d){
        if(d.dayType === "School") return "steelblue";
        else if(d.dayType === "Work") return "orange";
        else return "green";
    })
    .attr("opacity", 0.8);

/* ============================= */
/* AXIS LABELS                   */
/* ============================= */

svg.append("text")
    .attr("x", (svgWidth - marginRight + marginLeft)/2)
    .attr("y", svgHeight - 30)
    .attr("text-anchor", "middle")
    .text("Total Planned Hours Per Day");

svg.append("text")
    .attr("x", -svgHeight/2)
    .attr("y", 30)
    .attr("transform","rotate(-90)")
    .attr("text-anchor","middle")
    .text("Time Management Effectiveness (1-5)");

/* ============================= */
/* SIZE KEY                      */
/* ============================= */

let keyX = svgWidth - 180;
let keyY = marginTop + 20;

svg.append("rect")
    .attr("x", keyX - 20)
    .attr("y", keyY - 40)
    .attr("width", 170)
    .attr("height", 180)
    .attr("fill","none")
    .attr("stroke","black");

svg.append("text")
    .attr("x", keyX)
    .attr("y", keyY - 20)
    .text("Unexpected Events");

[1,3,6].forEach(function(value,i){
    svg.append("circle")
        .attr("cx", keyX)
        .attr("cy", keyY + i*50)
        .attr("r", radiusScale(value))
        .attr("fill","black");

    svg.append("text")
        .attr("x", keyX+40)
        .attr("y", keyY + i*50 +5)
        .text(value);
});

/* ============================= */
/* COLOR KEY                     */
/* ============================= */

let colorKeyY = keyY + 200;

svg.append("rect")
    .attr("x", keyX - 20)
    .attr("y", colorKeyY - 40)
    .attr("width", 170)
    .attr("height", 150)
    .attr("fill","none")
    .attr("stroke","black");

svg.append("text")
    .attr("x", keyX)
    .attr("y", colorKeyY - 20)
    .text("Commitment Level");

let categories = ["School","Work","Weekend"];
let colors = ["steelblue","orange","green"];

categories.forEach(function(value,i){
    svg.append("circle")
        .attr("cx", keyX)
        .attr("cy", colorKeyY + i*40)
        .attr("r", 10)
        .attr("fill", colors[i]);

    svg.append("text")
        .attr("x", keyX + 30)
        .attr("y", colorKeyY + i*40 +5)
        .text(value);
});