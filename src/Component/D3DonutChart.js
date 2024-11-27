// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const D3DonutChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const data = [
//       { label: 'Category A', value: 30 },
//       { label: 'Category B', value: 20 },
//       { label: 'Category C', value: 15 },
//       { label: 'Category D', value: 25 },
//       { label: 'Category E', value: 10 },
//     ];

//     const width = 300;
//     const height = 300;
//     const margin = 10;
//     const radius = Math.min(width, height) / 2 - margin;

//     const color = d3.scaleOrdinal()
//       .domain(data.map(d => d.label))
//       .range(d3.schemeSet2);

//     const arc = d3.arc()
//       .innerRadius(radius * 0.5) // This is the size of the inner radius, making it a donut
//       .outerRadius(radius);

//     const pie = d3.pie()
//       .value(d => d.value);

//     const svg = d3.select(chartRef.current)
//       .attr('width', width)
//       .attr('height', height)
//       .append('g')
//       .attr('transform', `translate(${width / 2}, ${height / 2})`);

//     svg
//       .selectAll('path')
//       .data(pie(data))
//       .enter()
//       .append('path')
//       .attr('d', arc)
//       .attr('fill', d => color(d.data.label))
//       .attr('stroke', 'white')
//       .style('stroke-width', '2px');

//     svg
//       .selectAll('text')
//       .data(pie(data))
//       .enter()
//       .append('text')
//       .text(d => d.data.label)
//       .attr('transform', d => `translate(${arc.centroid(d)})`)
//       .style('text-anchor', 'middle')
//       .style('font-size', '12px')
//       .style('fill', 'white');

//   }, []);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
//       <style>
//         {`
//           svg {
//             width: 100%;
//             height: auto;
//           }
//         `}
//       </style>
//       <svg ref={chartRef}></svg>
//     </div>
//   );
// };

// export default D3DonutChart;









import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { label: 'A', value: 30 },
      { label: 'B', value: 20 },
      { label: 'C', value: 15 },
      { label: 'D', value: 25 },
      { label: 'E', value: 10 },
    ];

    const width = 200;  // Set width
    const height = 180; // Set height
    const margin = 30;  // Margin for positioning
    const radius = Math.min(width, height) / 2 - margin;

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(d3.schemeSet2);

    const arc = d3.arc()
      .innerRadius(radius * 0.5) // Size of the inner radius for donut
      .outerRadius(radius);

    const pie = d3.pie()
      .value(d => d.value);

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2 - 20})`); // Adjusted translate to move the chart up

    svg
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    svg
      .selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .text(d => d.data.label)
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .style('text-anchor', 'middle')
      .style('font-size', '10px') // Font size for smaller chart
      .style('fill', 'white');

  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0', height: '100%' }}>
      <style>
        {`
          svg {
            width: 100%; /* Responsive width */
            height: auto; /* Maintain aspect ratio */
          }
        `}
      </style>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default D3DonutChart;
