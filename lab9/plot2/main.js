const data = [
{commitments:4,unexpected:1,effectiveness:4,time:7},
{commitments:3,unexpected:0,effectiveness:5,time:5},
{commitments:2,unexpected:0,effectiveness:5,time:6.5},
{commitments:1,unexpected:4,effectiveness:3,time:3},
{commitments:2,unexpected:6,effectiveness:1,time:2.5},
{commitments:1,unexpected:0,effectiveness:5,time:3},
{commitments:3,unexpected:5,effectiveness:1,time:6},
{commitments:2,unexpected:0,effectiveness:4,time:4.5},
{commitments:4,unexpected:3,effectiveness:2,time:8},
{commitments:2,unexpected:0,effectiveness:4,time:6},
{commitments:3,unexpected:1,effectiveness:3,time:8.5},
{commitments:4,unexpected:3,effectiveness:2,time:5},
{commitments:2,unexpected:5,effectiveness:3,time:4},
{commitments:3,unexpected:5,effectiveness:1,time:9},
{commitments:2,unexpected:0,effectiveness:5,time:5},
{commitments:4,unexpected:5,effectiveness:1,time:8},
{commitments:4,unexpected:0,effectiveness:5,time:7},
{commitments:3,unexpected:6,effectiveness:1,time:6},
{commitments:2,unexpected:3,effectiveness:3,time:5},
{commitments:2,unexpected:0,effectiveness:4,time:4}
];

// Using Array.filter() to keep only meaningful work days
const filtered = data.filter(d => d.time >= 4);

const svg = d3.select("svg");
const width = 700;
const height = 500;
const margin = 60;

const x = d3.scaleLinear()
.domain([0,7])
.range([margin,width-margin]);

const y = d3.scaleLinear()
.domain([1,5])
.range([height-margin,margin]);

const color = d3.scaleSequential()
.domain([1,4])
.interpolator(d3.interpolateBlues);

// X Axis
svg.append("g")
.attr("transform",`translate(0,${height-margin})`)
.call(d3.axisBottom(x));

// Y Axis
svg.append("g")
.attr("transform",`translate(${margin},0)`)
.call(d3.axisLeft(y));

// X Label
svg.append("text")
.attr("x",width/2)
.attr("y",height-10)
.attr("text-anchor","middle")
.text("Number of Unexpected Engagements");

// Y Label
svg.append("text")
.attr("x",-height/2)
.attr("y",20)
.attr("transform","rotate(-90)")
.attr("text-anchor","middle")
.text("Time Management Effectiveness (1–5)");

// Points
svg.selectAll("circle")
.data(filtered)
.enter()
.append("circle")
.attr("cx",d=>x(d.unexpected))
.attr("cy",d=>y(d.effectiveness))
.attr("r",6)
.attr("fill",d=>color(d.commitments))
.attr("opacity",0.8);