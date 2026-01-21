let svg = d3.select("#svg");

let caterpillar = svg.append("g");
let x = 80;
let y = 200;

/* Body segments */
let segments = [0, 50, 100, 150].map((d, i) =>
  caterpillar.append("ellipse")
    .attr("cx", x + d)
    .attr("cy", y)
    .attr("rx", 30)
    .attr("ry", 25)
    .attr("fill", "green")
);

/* Head */
caterpillar.append("ellipse")
  .attr("cx", x - 45)
  .attr("cy", y)
  .attr("rx", 35)
  .attr("ry", 30)
  .attr("fill", "limegreen");

/* Eyes */
caterpillar.append("circle")
  .attr("cx", x - 55)
  .attr("cy", y - 8)
  .attr("r", 4)
  .attr("fill", "black");

caterpillar.append("circle")
  .attr("cx", x - 35)
  .attr("cy", y - 8)
  .attr("r", 4)
  .attr("fill", "black");

/* Antenna */
caterpillar.append("line")
  .attr("x1", x - 55)
  .attr("y1", y - 25)
  .attr("x2", x - 70)
  .attr("y2", y - 50)
  .attr("stroke", "black");

caterpillar.append("line")
  .attr("x1", x - 35)
  .attr("y1", y - 25)
  .attr("x2", x - 20)
  .attr("y2", y - 50)
  .attr("stroke", "black");

/* Legs */
[0, 50, 100, 150].forEach(d => {
  caterpillar.append("circle")
    .attr("cx", x + d)
    .attr("cy", y + 32)
    .attr("r", 5)
    .attr("fill", "black");
});

/* Crawling + movement */
function crawl() {
  segments.forEach((seg, i) => {
    seg.transition()
      .duration(500)
      .attr("cy", y - (i % 2 === 0 ? 8 : 0))
      .transition()
      .duration(500)
      .attr("cy", y);
  });

  caterpillar
    .transition()
    .duration(1000)
    .attr("transform", "translate(250,0)")
    .transition()
    .duration(1000)
    .attr("transform", "translate(0,0)")
    .on("end", crawl);
}

crawl();
