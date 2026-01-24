// Select SVG canvas
const svg = d3.select("#svgCanvas");

// Button click event
document.getElementById("drawButton").onclick = drawCaterpillar;

function drawCaterpillar() {
  // Clear previous drawing
  svg.selectAll("*").remove();

  // Read user inputs
  let caterpillarX = Number(document.getElementById("xInput").value);
  let caterpillarY = Number(document.getElementById("yInput").value);
  let mouthChoice = document.getElementById("mouthChoice").value;

  /*
  Origin point:
  caterpillarX and caterpillarY represent the center of the first body segment.
  All other parts of the caterpillar are positioned relative to this point.
  */

  // ---------------- BODY SEGMENTS ----------------
  for (let i = 0; i < 4; i++) {
    svg
      .append("ellipse")
      .attr("cx", caterpillarX + i * 50)
      .attr("cy", caterpillarY)
      .attr("rx", 30)
      .attr("ry", 25)
      .attr("fill", "green");
  }

  // ---------------- HEAD ----------------
  svg
    .append("ellipse")
    .attr("cx", caterpillarX - 45)
    .attr("cy", caterpillarY)
    .attr("rx", 35)
    .attr("ry", 30)
    .attr("fill", "limegreen");

  // ---------------- EYES ----------------
  svg
    .append("circle")
    .attr("cx", caterpillarX - 55)
    .attr("cy", caterpillarY - 10)
    .attr("r", 4)
    .attr("fill", "black");

  svg
    .append("circle")
    .attr("cx", caterpillarX - 35)
    .attr("cy", caterpillarY - 10)
    .attr("r", 4)
    .attr("fill", "black");

  // ---------------- ANTENNAE ----------------
  svg
    .append("line")
    .attr("x1", caterpillarX - 60)
    .attr("y1", caterpillarY - 30)
    .attr("x2", caterpillarX - 75)
    .attr("y2", caterpillarY - 60)
    .attr("stroke", "black");

  svg
    .append("line")
    .attr("x1", caterpillarX - 30)
    .attr("y1", caterpillarY - 30)
    .attr("x2", caterpillarX - 15)
    .attr("y2", caterpillarY - 60)
    .attr("stroke", "black");

  /*
  Mouth behavior:
  - Closed Mouth: straight line
  - Open Mouth: V-shaped mouth
  */

  if (mouthChoice === "closed") {
    // Closed mouth
    svg
      .append("line")
      .attr("x1", caterpillarX - 55)
      .attr("y1", caterpillarY + 10)
      .attr("x2", caterpillarX - 35)
      .attr("y2", caterpillarY + 10)
      .attr("stroke", "black")
      .attr("stroke-width", 2);
  } else {
    // Open mouth
    svg
      .append("polygon")
      .attr(
        "points",
        `${caterpillarX - 55},${caterpillarY + 8}
         ${caterpillarX - 45},${caterpillarY + 18}
         ${caterpillarX - 35},${caterpillarY + 8}`
      )
      .attr("fill", "black");
  }

  // ---------------- FEET ----------------
  for (let i = 0; i < 4; i++) {
    svg
      .append("circle")
      .attr("cx", caterpillarX + i * 50)
      .attr("cy", caterpillarY + 30)
      .attr("r", 4)
      .attr("fill", "black");
  }
}
