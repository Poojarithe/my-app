// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const D3BubbleChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const data = [
//       { id: 1, value: 30, label: "A" },
//       { id: 2, value: 80, label: "B" },
//       { id: 3, value: 45, label: "C" },
//       { id: 4, value: 60, label: "D" },
//       { id: 5, value: 20, label: "E" },
//       { id: 6, value: 90, label: "F" },
//       { id: 7, value: 55, label: "G" },
//     ];

//     // Get the dimensions of the parent container
//     const container = chartRef.current.parentElement;
//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     // Create the color scale for the bubbles
//     const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

//     // Create the SVG element
//     const svg = d3
//       .select(chartRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .style("background-color", "#f9f9f9")
//       .style("border", "1px solid #ddd");

//     // Create a scale for the bubble size
//     const sizeScale = d3
//       .scaleSqrt()
//       .domain([0, d3.max(data, (d) => d.value)])
//       .range([10, Math.min(width, height) / 6]); // Adjust size range based on container

//     // Create x and y scales for positioning
//     const xScale = d3
//       .scalePoint()
//       .domain(data.map((d) => d.label))
//       .range([50, width - 50]);

//     const yScale = d3
//       .scaleLinear()
//       .domain([0, d3.max(data, (d) => d.value)])
//       .range([height - 50, 50]);

//     // Add x-axis
//     svg
//       .append("g")
//       .attr("transform", `translate(0,${height - 50})`)
//       .call(d3.axisBottom(xScale));

//     // Add y-axis
//     svg
//       .append("g")
//       .attr("transform", `translate(50,0)`)
//       .call(d3.axisLeft(yScale));

//     // Create a simulation for the bubble chart
//     const simulation = d3
//       .forceSimulation(data)
//       .force("x", d3.forceX((d) => xScale(d.label)).strength(0.5))
//       .force("y", d3.forceY((d) => yScale(d.value)).strength(0.5))
//       .force(
//         "collide",
//         d3.forceCollide((d) => sizeScale(d.value) + 2)
//       )
//       .on("tick", ticked);

//     function ticked() {
//       const u = svg.selectAll("circle").data(data);

//       u.enter()
//         .append("circle")
//         .attr("r", (d) => sizeScale(d.value))
//         .attr("fill", (d) => colorScale(d.label)) // Assign color based on label
//         .merge(u)
//         .attr("cx", (d) => d.x)
//         .attr("cy", (d) => d.y);

//       u.exit().remove();
//     }

//     return () => {
//       simulation.stop();
//     };
//   }, []);

//   // Inline styles for the SVG element
//   const svgStyle = {
//     width: "100%", // Make the SVG responsive
//     height: "100%", // Make the SVG responsive
//     display: "block", // Remove extra space below the SVG
//     border: "1px solid #ddd", // Border style
//   };

//   return <svg ref={chartRef} style={svgStyle}></svg>;
// };

// export default D3BubbleChart;
 



import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3BubbleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { id: 1, value: 200, label: "Product A", category: "United States" },
      { id: 2, value: 150, label: "Product B", category: "Australia" },
      { id: 3, value: 100, label: "Product C", category: "Canada" },
      { id: 4, value: 250, label: "Product D", category: "United Kingdom" },
      { id: 5, value: 175, label: "Product E", category: "United States" },
    ];

    const container = chartRef.current.parentElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const margin = { top: 50, right: 20, bottom: 60, left: 50 }; // Adjusted margins
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#f9f9f9")
      .style("border", "1px solid #ddd");

    const sizeScale = d3
      .scaleSqrt()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([10, Math.min(chartWidth, chartHeight) / 6]);

    const xScale = d3
      .scalePoint()
      .domain(data.map((d) => d.label))
      .range([0, chartWidth])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([chartHeight, 0]);

    const chartGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    chartGroup
      .append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(d3.axisBottom(xScale))
      .append("text")
      .attr("x", chartWidth)
      .attr("y", 40)
      .attr("fill", "#000")
      .attr("text-anchor", "end")
      .text("Product");

    chartGroup
      .append("g")
      .call(d3.axisLeft(yScale))
      .append("text")
      .attr("x", -20)
      .attr("y", -10)
      .attr("fill", "#000")
      .attr("text-anchor", "start")
      .text("Value");

    const simulation = d3
      .forceSimulation(data)
      .force("x", d3.forceX((d) => xScale(d.label)).strength(0.5))
      .force("y", d3.forceY((d) => yScale(d.value)).strength(0.5))
      .force(
        "collide",
        d3.forceCollide((d) => sizeScale(d.value) + 2)
      )
      .on("tick", ticked);

    function ticked() {
      const u = chartGroup.selectAll("circle").data(data);

      u.enter()
        .append("circle")
        .attr("r", (d) => sizeScale(d.value))
        .attr("fill", (d) => colorScale(d.category))
        .merge(u)
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);

      u.exit().remove();
    }

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("MRR Stats by Country");

    // Add legends at the bottom
    const legendG = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${height - margin.bottom + 30})`); // Adjusted position for legends

    const categories = ["United States", "Australia", "Canada", "United Kingdom"];
    legendG.selectAll("rect")
      .data(categories)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 120) // Adjusted horizontal spacing
      .attr("y", 0)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", d => colorScale(d));

    legendG.selectAll("text")
      .data(categories)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", (d, i) => i * 120 + 25) // Adjusted to align with rectangles
      .attr("y", 15)
      .style("font-size", "12px");

    return () => {
      d3.select(chartRef.current).selectAll("*").remove();
    };
  }, []);

  return <svg ref={chartRef}></svg>;
};

export default D3BubbleChart;
