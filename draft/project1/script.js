/* ===============================
   Base position variables
   =============================== */
let caterpillarX = 120;
let caterpillarY = 260;

/* ===============================
   Select SVG
   =============================== */
let svg = d3.select("svg");

/* ===============================
   Caterpillar body segments
   =============================== */
let body1 = svg.append("ellipse")
    .attr("cx", caterpillarX)
    .attr("cy", caterpillarY)
    .attr("rx", 30)
    .attr("ry", 25)
    .attr("fill", "green");

let body2 = svg.append("ellipse")
    .attr("cx", caterpillarX + 50)
    .attr("cy", caterpillarY)
    .attr("rx", 30)
    .attr("ry", 25)
    .attr("fill", "green");

let body3 = svg.append("ellipse")
    .attr("cx", caterpillarX + 100)
    .attr("cy", caterpillarY)
    .attr("rx", 30)
    .attr("ry", 25)
    .attr("fill", "green");

let body4 = svg.append("ellipse")
    .attr("cx", caterpillarX + 150)
    .attr("cy", caterpillarY)
    .attr("rx", 30)
    .attr("ry", 25)
    .attr("fill", "green");

/* ===============================
   Caterpillar head
   =============================== */
let head = svg.append("ellipse")
    .attr("cx", caterpillarX - 45)
    .attr("cy", caterpillarY)
    .attr("rx", 35)
    .attr("ry", 30)
    .attr("fill", "limegreen");

/* ===============================
   Eyes
   =============================== */
let leftEye = svg.append("ellipse")
    .attr("cx", caterpillarX - 55)
    .attr("cy", caterpillarY - 10)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", "black");

let rightEye = svg.append("ellipse")
    .attr("cx", caterpillarX - 35)
    .attr("cy", caterpillarY - 10)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", "black");

/* ===============================
   Mouth
   =============================== */
let mouth = svg.append("line")
    .attr("x1", caterpillarX - 55)
    .attr("y1", caterpillarY + 10)
    .attr("x2", caterpillarX - 35)
    .attr("y2", caterpillarY + 10)
    .attr("stroke", "black")
    .attr("stroke-width", 1);

/* ===============================
   Antennae
   =============================== */
let leftAntenna = svg.append("line")
    .attr("x1", caterpillarX - 60)
    .attr("y1", caterpillarY - 30)
    .attr("x2", caterpillarX - 75)
    .attr("y2", caterpillarY - 60)
    .attr("stroke", "black");

let rightAntenna = svg.append("line")
    .attr("x1", caterpillarX - 30)
    .attr("y1", caterpillarY - 30)
    .attr("x2", caterpillarX - 15)
    .attr("y2", caterpillarY - 60)
    .attr("stroke", "black");

/* ===============================
   Feet (small circles)
   =============================== */
let foot1 = svg.append("ellipse")
    .attr("cx", caterpillarX)
    .attr("cy", caterpillarY + 30)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", "black");

let foot2 = svg.append("ellipse")
    .attr("cx", caterpillarX + 50)
    .attr("cy", caterpillarY + 30)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", "black");

let foot3 = svg.append("ellipse")
    .attr("cx", caterpillarX + 100)
    .attr("cy", caterpillarY + 30)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", "black");

let foot4 = svg.append("ellipse")
    .attr("cx", caterpillarX + 150)
    .attr("cy", caterpillarY + 30)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", "black");
