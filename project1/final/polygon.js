// polygon.js
// Helper function for drawing polygons in D3

function drawPolygon(svg, points, color) {
  svg
    .append("polygon")
    .attr("points", points)
    .attr("fill", color);
}
