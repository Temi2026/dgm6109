// Dataset
const data = [
{commitments:4,time:7,unexpected:1},
{commitments:3,time:5,unexpected:0},
{commitments:2,time:6.5,unexpected:0},
{commitments:1,time:3,unexpected:4},
{commitments:2,time:2.5,unexpected:6},
{commitments:1,time:3,unexpected:0},
{commitments:3,time:6,unexpected:5},
{commitments:2,time:4.5,unexpected:0},
{commitments:4,time:8,unexpected:3},
{commitments:2,time:6,unexpected:0},
{commitments:3,time:8.5,unexpected:1},
{commitments:4,time:5,unexpected:3},
{commitments:2,time:4,unexpected:5},
{commitments:3,time:9,unexpected:5},
{commitments:2,time:5,unexpected:0},
{commitments:4,time:8,unexpected:5},
{commitments:4,time:7,unexpected:0},
{commitments:3,time:6,unexpected:6},
{commitments:2,time:5,unexpected:3},
{commitments:2,time:4,unexpected:0}
];

// Using Array.sort() to organize by commitments
data.sort((a,b)=> a.commitments - b.commitments);

const svg = d3.select("svg");
const width = 700;
const height = 500;
const margin = 60;

const x = d3.scaleLinear()
.domain([0,5])
.range([margin,width-margin]);

const y = d3.scaleLinear()
.domain([0,10])
.range([height-margin,margin]);

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
.text("Number of Scheduled Commitments");

// Y Label
svg.append("text")
.attr("x",-height/2)
.attr("y",20)
.attr("transform","rotate(-90)")
.attr("text-anchor","middle")
.text("Time Spent on Planned Activities (Hours)");

// Points
svg.selectAll("circle")
.data(data)
.enter()
.append("circle")
.attr("cx",d=>x(d.commitments))
.attr("cy",d=>y(d.time))
.attr("r",d=>d.unexpected*2+4)
.attr("fill","steelblue")
.attr("opacity",0.7);