// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const D3StackedColumnChart= () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Sample data
//     const data = [
//       { month: "Jan", salesA: 300, salesB: 200, salesC: 100 },
//       { month: "Feb", salesA: 400, salesB: 150, salesC: 200 },
//       { month: "Mar", salesA: 500, salesB: 250, salesC: 150 },
//       { month: "Apr", salesA: 600, salesB: 300, salesC: 200 },
//       { month: "May", salesA: 700, salesB: 350, salesC: 250 },
//       { month: "Jun", salesA: 800, salesB: 400, salesC: 300 },
//     ];

//     const categories = ["salesA", "salesB", "salesC"];
//     const colors = d3.scaleOrdinal(d3.schemeCategory10);

//     // Dimensions
//     const margin = { top: 20, right: 20, bottom: 30, left: 40 };
//     const width = chartRef.current.clientWidth - margin.left - margin.right;
//     const height = chartRef.current.clientHeight - margin.top - margin.bottom;

//     // Create scales
//     const xScale = d3
//       .scaleBand()
//       .domain(data.map((d) => d.month))
//       .range([0, width])
//       .padding(0.1);

//     const yScale = d3
//       .scaleLinear()
//       .domain([
//         0,
//         d3.max(data, (d) => categories.reduce((sum, key) => sum + d[key], 0)),
//       ])
//       .nice()
//       .range([height, 0]);

//     // Create SVG
//     const svg = d3
//       .select(chartRef.current)
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     // Stack data
//     const stack = d3
//       .stack()
//       .keys(categories)
//       .order(d3.stackOrderNone)
//       .offset(d3.stackOffsetNone);

//     const series = stack(data);

//     // Draw bars
//     svg
//       .selectAll(".series")
//       .data(series)
//       .enter()
//       .append("g")
//       .attr("class", "series")
//       .attr("fill", (d, i) => colors(i))
//       .selectAll("rect")
//       .data((d) => d)
//       .enter()
//       .append("rect")
//       .attr("x", (d) => xScale(d.data.month))
//       .attr("y", (d) => yScale(d[1]))
//       .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
//       .attr("width", xScale.bandwidth());

//     // Add X axis
//     svg
//       .append("g")
//       .attr("class", "x-axis")
//       .attr("transform", `translate(0,${height})`)
//       .call(d3.axisBottom(xScale))
//       .selectAll("text")
//       .attr("transform", "rotate(-45)")
//       .style("text-anchor", "end");

//     // Add Y axis
//     svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

//     // Add legend
//     const legend = svg
//       .append("g")
//       .attr("class", "legend")
//       .attr("transform", `translate(${width - 150},0)`);

//     // legend
//     //   .selectAll("rect")
//     //   .data(categories)
//     //   .enter()
//     //   .append("rect")
//     //   .attr("x", 0)
//     //   .attr("y", (d, i) => i * 20)
//     //   .attr("width", 18)
//     //   .attr("height", 18)
//     //   .attr("fill", (d, i) => colors(i));

//     // legend
//     //   .selectAll("text")
//     //   .data(categories)
//     //   .enter()
//     //   .append("text")
//     //   .attr("x", 30)
//     //   .attr("y", (d, i) => i * 20 + 15)
//     //   .text((d) => d)
//     //   .style("font-size", "12px");

//     return () => {
//       d3.select(chartRef.current).selectAll("*").remove();
//     };
//   }, []);

//   // Inline styles for the SVG element
//   const svgStyle = {
//     width: "100%", // Make the SVG responsive
//     height: "100%", // Make the SVG responsive
//     display: "block", // Remove extra space below the SVG
//     border: "1px solid #ddd", // Border style
//   };

//   return (
//     <svg ref={chartRef} style={svgStyle}>
//       <style>
//         {`
//           .x-axis path,
//           .x-axis line,
//           .y-axis path,
//           .y-axis line {
//             fill: none;
//             shape-rendering: crispEdges;
//           }

//           .x-axis text {
//             font-size: 12px;
//           }

//           .y-axis text {
//             font-size: 12px;
//           }

//           .legend {
//             font-size: 12px;
//             text-anchor: start;
//           }
//         `}
//       </style>
//     </svg>
//   );
// };

// export default D3StackedColumnChart;
 



// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const D3StackedColumnChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const data = [
//       { month: "Jan", salesA: 300, salesB: 200, salesC: 100 },
//       { month: "Feb", salesA: 400, salesB: 150, salesC: 200 },
//       { month: "Mar", salesA: 500, salesB: 250, salesC: 150 },
//       { month: "Apr", salesA: 600, salesB: 300, salesC: 200 },
//       { month: "May", salesA: 700, salesB: 350, salesC: 250 },
//       { month: "Jun", salesA: 800, salesB: 400, salesC: 300 },
//     ];

//     const categories = ["salesA", "salesB", "salesC"];
//     const colors = d3.scaleOrdinal(d3.schemeCategory10);

//     const margin = { top: 40, right: 20, bottom: 30, left: 40 };
//     const width = chartRef.current.clientWidth - margin.left - margin.right;
//     const height = chartRef.current.clientHeight - margin.top - margin.bottom;

//     const xScale = d3
//       .scaleBand()
//       .domain(data.map((d) => d.month))
//       .range([0, width])
//       .padding(0.1);

//     const yScale = d3
//       .scaleLinear()
//       .domain([
//         0,
//         d3.max(data, (d) => categories.reduce((sum, key) => sum + d[key], 0)),
//       ])
//       .nice()
//       .range([height, 0]);

//     const svg = d3
//       .select(chartRef.current)
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     const stack = d3
//       .stack()
//       .keys(categories)
//       .order(d3.stackOrderNone)
//       .offset(d3.stackOffsetNone);

//     const series = stack(data);

//     svg
//       .selectAll(".series")
//       .data(series)
//       .enter()
//       .append("g")
//       .attr("class", "series")
//       .attr("fill", (d, i) => colors(i))
//       .selectAll("rect")
//       .data((d) => d)
//       .enter()
//       .append("rect")
//       .attr("x", (d) => xScale(d.data.month))
//       .attr("y", (d) => yScale(d[1]))
//       .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
//       .attr("width", xScale.bandwidth());

//     svg
//       .append("g")
//       .attr("class", "x-axis")
//       .attr("transform", `translate(0,${height})`)
//       .call(d3.axisBottom(xScale))
//       .selectAll("text")
//       .attr("transform", "rotate(-45)")
//       .style("text-anchor", "end");

//     svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

//     svg
//       .append("text")
//       .attr("x", width / 2)
//       .attr("y", -10)
//       .attr("text-anchor", "middle")
//       .style("font-size", "16px")
//       .style("font-weight", "bold")
//       .text("MRR");

//     const legend = svg
//       .append("g")
//       .attr("class", "legend")
//       .attr("transform", `translate(${width - 150},${-margin.top + 20})`);

//     legend
//       .selectAll("rect")
//       .data(categories)
//       .enter()
//       .append("rect")
//       .attr("x", 0)
//       .attr("y", (d, i) => i * 20)
//       .attr("width", 18)
//       .attr("height", 18)
//       .attr("fill", (d, i) => colors(i));

//     legend
//       .selectAll("text")
//       .data(categories)
//       .enter()
//       .append("text")
//       .attr("x", 30)
//       .attr("y", (d, i) => i * 20 + 15)
//       .text((d) => d)
//       .style("font-size", "12px");

//     return () => {
//       d3.select(chartRef.current).selectAll("*").remove();
//     };
//   }, []);

//   const svgStyle = {
//     width: "100%",
//     height: "100%",
//     display: "block",
//     border: "1px solid #ddd",
//   };

//   return (
//     <svg ref={chartRef} style={svgStyle}>
//       <style>
//         {`
//           .x-axis path,
//           .x-axis line,
//           .y-axis path,
//           .y-axis line {
//             fill: none;
//             shape-rendering: crispEdges;
//           }

//           .x-axis text {
//             font-size: 12px;
//           }

//           .y-axis text {
//             font-size: 12px;
//           }

//           .legend {
//             font-size: 12px;
//             text-anchor: start;
//           }
//         `}
//       </style>
//     </svg>
//   );
// };

// export default D3StackedColumnChart;



// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const D3StackedColumnChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const data = [
//       { month: "Jan", salesA: 300, salesB: 200, salesC: 100 },
//       { month: "Feb", salesA: 400, salesB: 150, salesC: 200 },
//       { month: "Mar", salesA: 500, salesB: 250, salesC: 150 },
//       { month: "Apr", salesA: 600, salesB: 300, salesC: 200 },
//       { month: "May", salesA: 700, salesB: 350, salesC: 250 },
//       { month: "Jun", salesA: 800, salesB: 400, salesC: 300 },
//     ];

//     const categories = ["salesA", "salesB", "salesC"];
//     const colors = d3.scaleOrdinal(d3.schemeCategory10);

//     const margin = { top: 40, right: 20, bottom: 80, left: 40 };
//     const width = chartRef.current.clientWidth - margin.left - margin.right;
//     const height = chartRef.current.clientHeight - margin.top - margin.bottom;

//     const xScale = d3
//       .scaleBand()
//       .domain(data.map((d) => d.month))
//       .range([0, width])
//       .padding(0.1);

//     const yScale = d3
//       .scaleLinear()
//       .domain([
//         0,
//         d3.max(data, (d) => categories.reduce((sum, key) => sum + d[key], 0)),
//       ])
//       .nice()
//       .range([height, 0]);

//     const svg = d3
//       .select(chartRef.current)
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     const stack = d3
//       .stack()
//       .keys(categories)
//       .order(d3.stackOrderNone)
//       .offset(d3.stackOffsetNone);

//     const series = stack(data);

//     svg
//       .selectAll(".series")
//       .data(series)
//       .enter()
//       .append("g")
//       .attr("class", "series")
//       .attr("fill", (d, i) => colors(i))
//       .selectAll("rect")
//       .data((d) => d)
//       .enter()
//       .append("rect")
//       .attr("x", (d) => xScale(d.data.month))
//       .attr("y", (d) => yScale(d[1]))
//       .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
//       .attr("width", xScale.bandwidth());

//     svg
//       .append("g")
//       .attr("class", "x-axis")
//       .attr("transform", `translate(0,${height})`)
//       .call(d3.axisBottom(xScale))
//       .selectAll("text")
//       .attr("transform", "rotate(-45)")
//       .style("text-anchor", "end");

//     svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

//     svg
//       .append("text")
//       .attr("x", width / 2)
//       .attr("y", -10)
//       .attr("text-anchor", "middle")
//       .style("font-size", "16px")
//       .style("font-weight", "bold")
//       .text("MRR");

//     // Add legend
//     const legend = svg
//       .append("g")
//       .attr("class", "legend")
//       .attr("transform", `translate(${margin.left},${height + margin.bottom - 50})`);

//     legend
//       .selectAll("rect")
//       .data(categories)
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => i * 90) // Space out legend items horizontally
//       .attr("y", 0)
//       .attr("width", 18)
//       .attr("height", 18)
//       .attr("fill", (d, i) => colors(i));

//     legend
//       .selectAll("text")
//       .data(categories)
//       .enter()
//       .append("text")
//       .attr("x", (d, i) => i * 90 + 25) // Adjust position to align with rectangles
//       .attr("y", 15)
//       .text((d) => d)
//       .style("font-size", "12px");

//     return () => {
//       d3.select(chartRef.current).selectAll("*").remove();
//     };
//   }, []);

//   const svgStyle = {
//     width: "100%",
//     height: "100%",
//     display: "block",
//     border: "1px solid #ddd",
//   };

//   return (
//     <svg ref={chartRef} style={svgStyle}>
//       <style>
//         {`
//           .x-axis path,
//           .x-axis line,
//           .y-axis path,
//           .y-axis line {
//             fill: none;
//             shape-rendering: crispEdges;
//           }

//           .x-axis text {
//             font-size: 12px;
//           }

//           .y-axis text {
//             font-size: 12px;
//           }

//           .legend {
//             font-size: 12px;
//             text-anchor: start;
//           }
//         `}
//       </style>
//     </svg>
//   );
// };

// export default D3StackedColumnChart;







// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const D3StackedColumnChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const data = [
//       { month: "Jan", salesA: 300, salesB: 200, salesC: 100 },
//       { month: "Feb", salesA: 400, salesB: 150, salesC: 200 },
//       { month: "Mar", salesA: 500, salesB: 250, salesC: 150 },
//       { month: "Apr", salesA: 600, salesB: 300, salesC: 200 },
//       { month: "May", salesA: 700, salesB: 350, salesC: 250 },
//       { month: "Jun", salesA: 800, salesB: 400, salesC: 300 },
//     ];

//     const categories = ["salesA", "salesB", "salesC"];
//     const colors = d3.scaleOrdinal(d3.schemeCategory10);

//     const margin = { top: 60, right: 20, bottom: 100, left: 60 }; // Increased bottom margin
//     const width = chartRef.current.clientWidth - margin.left - margin.right;
//     const height = chartRef.current.clientHeight - margin.top - margin.bottom;

//     const xScale = d3
//       .scaleBand()
//       .domain(data.map((d) => d.month))
//       .range([0, width])
//       .padding(0.1);

//     const yScale = d3
//       .scaleLinear()
//       .domain([
//         0,
//         d3.max(data, (d) => categories.reduce((sum, key) => sum + d[key], 0)),
//       ])
//       .nice()
//       .range([height, 0]);

//     const svg = d3
//       .select(chartRef.current)
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     const stack = d3
//       .stack()
//       .keys(categories)
//       .order(d3.stackOrderNone)
//       .offset(d3.stackOffsetNone);

//     const series = stack(data);

//     svg
//       .selectAll(".series")
//       .data(series)
//       .enter()
//       .append("g")
//       .attr("class", "series")
//       .attr("fill", (d, i) => colors(i))
//       .selectAll("rect")
//       .data((d) => d)
//       .enter()
//       .append("rect")
//       .attr("x", (d) => xScale(d.data.month))
//       .attr("y", (d) => yScale(d[1]))
//       .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
//       .attr("width", xScale.bandwidth());

//     svg
//       .append("g")
//       .attr("class", "x-axis")
//       .attr("transform", `translate(0,${height})`)
//       .call(d3.axisBottom(xScale))
//       .selectAll("text")
//       .attr("transform", "rotate(-45)")
//       .style("text-anchor", "end");

//     svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

//     svg
//       .append("text")
//       .attr("x", width / 2)
//       .attr("y", -10)
//       .attr("text-anchor", "middle")
//       .style("font-size", "16px")
//       .style("font-weight", "bold")
//       .text("MRR");

//     // Add legend
//     const legend = svg
//       .append("g")
//       .attr("class", "legend")
//       .attr("transform", `translate(${margin.left},${height + margin.bottom - 40})`); // Moved legends further down

//     legend
//       .selectAll("rect")
//       .data(categories)
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => i * 90) // Space out legend items horizontally
//       .attr("y", 0)
//       .attr("width", 18)
//       .attr("height", 18)
//       .attr("fill", (d, i) => colors(i));

//     legend
//       .selectAll("text")
//       .data(categories)
//       .enter()
//       .append("text")
//       .attr("x", (d, i) => i * 90 + 25) // Adjust position to align with rectangles
//       .attr("y", 15)
//       .text((d) => d)
//       .style("font-size", "12px");

//     return () => {
//       d3.select(chartRef.current).selectAll("*").remove();
//     };
//   }, []);

//   const svgStyle = {
//     width: "100%",
//     height: "100%",
//     display: "block",
//     border: "1px solid #ddd",
//   };

//   return (
//     <svg ref={chartRef} style={svgStyle}>
//       <style>
//         {`
//           .x-axis path,
//           .x-axis line,
//           .y-axis path,
//           .y-axis line {
//             fill: none;
//             shape-rendering: crispEdges;
//           }

//           .x-axis text {
//             font-size: 12px;
//           }

//           .y-axis text {
//             font-size: 12px;
//           }

//           .legend {
//             font-size: 12px;
//             text-anchor: start;
//           }
//         `}
//       </style>
//     </svg>
//   );
// };

// export default D3StackedColumnChart;



import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3StackedColumnChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { month: "Jan", salesA: 300, salesB: 200, salesC: 100 },
      { month: "Feb", salesA: 400, salesB: 150, salesC: 200 },
      { month: "Mar", salesA: 500, salesB: 250, salesC: 150 },
      { month: "Apr", salesA: 600, salesB: 300, salesC: 200 },
      { month: "May", salesA: 700, salesB: 350, salesC: 250 },
      { month: "Jun", salesA: 800, salesB: 400, salesC: 300 },
    ];

    const categories = ["salesA", "salesB", "salesC"];
    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    const margin = { top: 60, right: 20, bottom: 100, left: 60 };
    const width = chartRef.current.clientWidth - margin.left - margin.right;
    const height = chartRef.current.clientHeight - margin.top - margin.bottom - 20; // Adjusted height

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => categories.reduce((sum, key) => sum + d[key], 0)),
      ])
      .nice()
      .range([height, 0]);

    const svg = d3
      .select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom + 100) // Adjusted height
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top + 60})`); // Moved chart down

    const stack = d3
      .stack()
      .keys(categories)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const series = stack(data);

    svg
      .selectAll(".series")
      .data(series)
      .enter()
      .append("g")
      .attr("class", "series")
      .attr("fill", (d, i) => colors(i))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.data.month))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth());

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", -90)     // Moved the title higher
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("MRR");

    // Add legend
    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr("transform", `translate(${margin.left},${height + margin.bottom - 70})`); // Moved legends further down

    legend
      .selectAll("rect")
      .data(categories)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 90) // Space out legend items horizontally
      .attr("y", 0)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", (d, i) => colors(i));

    legend
      .selectAll("text")
      .data(categories)
      .enter()
      .append("text")
      .attr("x", (d, i) => i * 90 + 25) // Adjust position to align with rectangles
      .attr("y", 15)
      .text((d) => d)
      .style("font-size", "12px");

    return () => {
      d3.select(chartRef.current).selectAll("*").remove();
    };
  }, []);

  const svgStyle = {
    width: "100%",
    height: "100%",
    display: "block",
    border: "1px solid #ddd",
  };

  return (
    <svg ref={chartRef} style={svgStyle}>
      <style>
        {`
          .x-axis path,
          .x-axis line,
          .y-axis path,
          .y-axis line {
            fill: none;
            shape-rendering: crispEdges;
          }

          .x-axis text {
            font-size: 12px;
          }

          .y-axis text {
            font-size: 12px;
          }

          .legend {
            font-size: 12px;
            text-anchor: start;
          }
        `}
      </style>
    </svg>
  );
};

export default D3StackedColumnChart;
