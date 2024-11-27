
// // src/components/DashboardUser.js
// import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap'; // Assuming you are using Bootstrap
// import './DashboardUser.css'; // Import the custom CSS file

// const DashboardUser = () => {
//   return (
//     <div className="container mt-4">
//       {/* Row for the 4 KPIs */}
//       <Row>
//         <Col md={3}>
//           <Card className="custom-card-height">
//             <Card.Body>
//               <Card.Title>KPI 1</Card.Title>
//               <Card.Text>
//                 {/* KPI 1 content */}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="custom-card-height">
//             <Card.Body>
//               <Card.Title>KPI 2</Card.Title>
//               <Card.Text>
//                 {/* KPI 2 content */}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="custom-card-height">
//             <Card.Body>
//               <Card.Title>KPI 3</Card.Title>
//               <Card.Text>
//                 {/* KPI 3 content */}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="custom-card-height">
//             <Card.Body>
//               <Card.Title>KPI 4</Card.Title>
//               <Card.Text>
//                 {/* KPI 4 content */}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Row for the additional cards */}
//       <Row className="mt-4">
//         <Col md={6}>
//           <Card className="custom-card-height">
//             <Card.Body>
//               <Card.Title>Card 1</Card.Title>
//               <Card.Text>
//                 {/* Card 1 content */}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col md={6}>
//           <Card className="custom-card-height">
//             <Card.Body>
//               <Card.Title>Card 2</Card.Title>
//               <Card.Text>
//                 {/* Card 2 content */}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card className="custom-card-height">
//             <Card.Body>
//               <Card.Title>Vertical Card</Card.Title>
//               <Card.Text>
//                 {/* Vertical Card content */}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default DashboardUser;





// import React from 'react';
// import { Card, Row, Col, Button } from 'react-bootstrap';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto';
// import './DashboardUser.css';

// const DashboardUser = () => {
//   const barData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: '2020',
//         backgroundColor: '#FFA726',
//         data: [30, 50, 40, 60, 35, 70, 50],
//       },
//       {
//         label: '2019',
//         backgroundColor: '#42A5F5',
//         data: [20, 40, 25, 50, 30, 60, 40],
//       },
//     ],
//   };

//   const doughnutData = {
//     labels: ['Completed', 'Remaining'],
//     datasets: [
//       {
//         data: [45, 55],
//         backgroundColor: ['#FFA726', '#42A5F5'],
//       },
//     ],
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">Dashboard User</h2>
//       <Row className="mb-3">
//         <Col>
//           <Card className="text-center">
//             <Card.Body>
//               <Card.Title>Earning</Card.Title>
//               <Card.Text>$628</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="text-center">
//             <Card.Body>
//               <Card.Title>Share</Card.Title>
//               <Card.Text>2434</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="text-center">
//             <Card.Body>
//               <Card.Title>Likes</Card.Title>
//               <Card.Text>1259</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="text-center">
//             <Card.Body>
//               <Card.Title>Rating</Card.Title>
//               <Card.Text>8.5</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>Result</Card.Title>
//               <Bar data={barData} />
//               <Button variant="warning" className="mt-3">Check Now</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>Lorem Ipsum</Card.Title>
//               {/* Add area chart here */}
//               <Button variant="warning" className="mt-3">Check Now</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>Calendar</Card.Title>
//               {/* Add Calendar here */}
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card>
//             <Card.Body>
//               <Doughnut data={doughnutData} />
//               <ul className="mt-3">
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//               </ul>
//               <Button variant="warning">Check Now</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default DashboardUser;











// import React from 'react';
// import { Card, Row, Col, Button } from 'react-bootstrap';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { AttachMoney, Share, ThumbUp, Star } from '@mui/icons-material';
// import './DashboardUser.css';

// const DashboardUser = () => {
//   const barData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: '2020',
//         backgroundColor: '#FFA726',
//         data: [30, 50, 40, 60, 35, 70, 50],
//       },
//       {
//         label: '2019',
//         backgroundColor: '#42A5F5',
//         data: [20, 40, 25, 50, 30, 60, 40],
//       },
//     ],
//   };

//   const doughnutData = {
//     labels: ['Completed', 'Remaining'],
//     datasets: [
//       {
//         data: [45, 55],
//         backgroundColor: ['#FFA726', '#42A5F5'],
//       },
//     ],
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">Dashboard User</h2>
//       <Row className="mb-3">
//         <Col md={3}>
//           <Card className="kpi-card text-left" style={{ backgroundColor: '#1E3A5F' }}>
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'White', fontSize: '20px' }}>Earning</span>
//                 <AttachMoney style={{ color: 'white', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ color: 'white', fontSize: '52px' }}>$628</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="kpi-card text-left">
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'black', fontSize: '20px' }}>Share</span>
//                 <Share style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ fontSize: '52px' }}>2434</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="kpi-card text-left">
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'black', fontSize: '20px' }}>Likes</span>
//                 <ThumbUp style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ fontSize: '52px' }}>1259</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="kpi-card text-left">
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'black', fontSize: '20px' }}>Rating</span>
//                 <Star style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ fontSize: '52px' }}>8.5</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={9}>
//           <Card className="result-card">
//             <Card.Body className="d-flex flex-column">
//               <div className="d-flex justify-content-between align-items-center">
//                 <Card.Title>Result</Card.Title>
//                 <Button variant="warning" className="ml-auto">Check Now</Button>
//               </div>
//               <div className="bar-chart-container">
//                 <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3} className="vertical-card-container">
//           <Card className="vertical-card">
//             <Card.Body>
//               <Doughnut data={doughnutData} />
//               <ul className="mt-3">
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//               </ul>
//               <Button variant="warning">Check Now</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default DashboardUser;










// import React from 'react';
// import { Card, Row, Col, Button } from 'react-bootstrap';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { AttachMoney, Share, ThumbUp, Star } from '@mui/icons-material';
// import './DashboardUser.css';

// const DashboardUser = () => {
//   const barData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: '2020',
//         backgroundColor: '#FFA726',
//         data: [30, 50, 40, 60, 35, 70, 50],
//       },
//       {
//         label: '2019',
//         backgroundColor: '#42A5F5',
//         data: [20, 40, 25, 50, 30, 60, 40],
//       },
//     ],
//   };

//   const doughnutData = {
//     labels: ['Completed', 'Remaining'],
//     datasets: [
//       {
//         data: [45, 55],
//         backgroundColor: ['#FFA726', '#42A5F5'],
//       },
//     ],
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">Dashboard User</h2>
//       <Row className="mb-3">
//         <Col md={3}>
//           <Card className="kpi-card text-left" style={{ backgroundColor: '#1E3A5F' }}>
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'White', fontSize: '20px' }}>Earning</span>
//                 <AttachMoney style={{ color: 'white', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ color: 'white', fontSize: '52px' }}>$628</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="kpi-card text-left">
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'black', fontSize: '20px' }}>Share</span>
//                 <Share style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ fontSize: '52px' }}>2434</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="kpi-card text-left">
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'black', fontSize: '20px' }}>Likes</span>
//                 <ThumbUp style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ fontSize: '52px' }}>1259</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="kpi-card text-left">
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'black', fontSize: '20px' }}>Rating</span>
//                 <Star style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ fontSize: '52px' }}>8.5</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={9}>
//           <Card className="result-card">
//             <Card.Body className="d-flex flex-column">
//               <div className="d-flex justify-content-between align-items-center">
//                 <Card.Title>Result</Card.Title>
//                 <Button variant="warning" className="ml-auto">Check Now</Button>
//               </div>
//               <div className="bar-chart-container">
//                 <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3} className="vertical-card-container">
//           <Card className="vertical-card">
//             <Card.Body>
//               <Doughnut data={doughnutData} />
//               <ul className="mt-3">
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//               </ul>
//               <Button variant="warning">Check Now</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={9}>
//           <Card className="result-card">
//             <Card.Body className="d-flex flex-column">
//               <div className="d-flex justify-content-between align-items-center">
//                 <Card.Title>Lorem ipsum</Card.Title>
                
//               </div>
          
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default DashboardUser;







// import React from 'react';
// import { Card, Row, Col, Button } from 'react-bootstrap';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { AttachMoney, Share, ThumbUp, Star } from '@mui/icons-material';
// import './DashboardUser.css';

// const DashboardUser = () => {
//   const barData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: '2020',
//         backgroundColor: '#FFA726',
//         data: [30, 50, 40, 60, 35, 70, 50],
//       },
//       {
//         label: '2019',
//         backgroundColor: '#42A5F5',
//         data: [20, 40, 25, 50, 30, 60, 40],
//       },
//     ],
//   };

//   const doughnutData = {
//     labels: ['Completed', 'Remaining'],
//     datasets: [
//       {
//         data: [45, 55],
//         backgroundColor: ['#FFA726', '#42A5F5'],
//       },
//     ],
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">Dashboard User</h2>
//       <Row className="mb-3">
//         <Col md={3}>
//           <Card className="kpi-card text-left" style={{ backgroundColor: '#1E3A5F' }}>
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'White', fontSize: '20px' }}>Earning</span>
//                 <AttachMoney style={{ color: 'white', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ color: 'white', fontSize: '52px' }}>$628</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="kpi-card text-left">
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'black', fontSize: '20px' }}>Share</span>
//                 <Share style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ fontSize: '52px' }}>2434</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="kpi-card text-left">
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'black', fontSize: '20px' }}>Likes</span>
//                 <ThumbUp style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ fontSize: '52px' }}>1259</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="kpi-card text-left">
//             <Card.Body>
//               <Card.Title className="d-flex align-items-center justify-content-between">
//                 <span style={{ color: 'black', fontSize: '20px' }}>Rating</span>
//                 <Star style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
//               </Card.Title>
//               <Card.Text style={{ fontSize: '52px' }}>8.5</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={9}>
//           <Card className="result-card">
//             <Card.Body className="d-flex flex-column">
//               <div className="d-flex justify-content-between align-items-center">
//                 <Card.Title>Result</Card.Title>
//                 <Button variant="warning" className="ml-auto">Check Now</Button>
//               </div>
//               <div className="bar-chart-container">
//                 <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
//               </div>
//             </Card.Body>
//           </Card>
//           <Card className="result-card additional-info-card"> {/* Added class here */}
//             <Card.Body className="d-flex flex-column">
//               <div className="d-flex justify-content-between align-items-center">
//                 <Card.Title>Additional Info</Card.Title>
//                 <Button variant="warning" className="ml-auto">More Details</Button>
//               </div>
//               <p>This is some additional information displayed in a card below the result card.</p>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3} className="vertical-card-container">
//           <Card className="vertical-card">
//             <Card.Body>
//               <Doughnut data={doughnutData} />
//               <ul className="mt-3">
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//               </ul>
//               <Button variant="warning">Check Now</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* <Row className="mb-3">
//         <Col md={9}>
          
//         </Col>
//       </Row> */}
//     </div>
//   );
// };

// export default DashboardUser;










import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { AttachMoney, Share, ThumbUp, Star } from '@mui/icons-material';
import './DashboardUser.css';

const DashboardUser = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: '2020',
        backgroundColor: '#FFA726',
        data: [30, 50, 40, 60, 35, 70, 50],
      },
      {
        label: '2019',
        backgroundColor: '#42A5F5',
        data: [20, 40, 25, 50, 30, 60, 40],
      },
    ],
  };

  const doughnutData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [45, 55],
        backgroundColor: ['#FFA726', '#42A5F5'],
      },
    ],
  };

  const areaData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [20, 30, 50, 40, 70, 60, 90],
        borderColor: '#42A5F5', // Line color
        backgroundColor: 'rgba(66, 165, 245, 0.3)', // Filled area color
        fill: 'origin', // Fill the area below the line
        tension: 0.4, // Curved line
        pointBackgroundColor: '#42A5F5', // Point color
        pointBorderColor: '#fff', // Point border color
        pointHoverBackgroundColor: '#fff', // Point hover color
        pointHoverBorderColor: '#42A5F5', // Point hover border color
      },
      {
        label: 'Dataset 2',
        data: [30, 40, 60, 50, 80, 70, 100],
        borderColor: '#FFA726', // Line color
        backgroundColor: 'rgba(255, 167, 38, 0.3)', // Filled area color
        fill: 'origin', // Fill the area below the line
        tension: 0.4, // Curved line
        pointBackgroundColor: '#FFA726', // Point color
        pointBorderColor: '#fff', // Point border color
        pointHoverBackgroundColor: '#fff', // Point hover color
        pointHoverBorderColor: '#FFA726', // Point hover border color
      }
    ]
  };

  const areaOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true, // Show legend
        position: 'top', // Position of legend
      },
      tooltip: {
        enabled: true, // Show tooltips
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Hide X-axis grid lines
        },
        ticks: {
          color: '#000' // X-axis label color
        }
      },
      y: {
        grid: {
          display: false // Hide Y-axis grid lines
        },
        ticks: {
          color: '#000' // Y-axis label color
        }
      }
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard User</h2>
      <Row className="mb-3">
        <Col md={3}>
          <Card className="kpi-card text-left" style={{ backgroundColor: '#1E3A5F' }}>
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-between">
                <span style={{ color: 'White', fontSize: '20px' }}>Earning</span>
                <AttachMoney style={{ color: 'white', fontSize: '28px', marginLeft: '20px' }} />
              </Card.Title>
              <Card.Text style={{ color: 'white', fontSize: '52px' }}>$628</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="kpi-card text-left">
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-between">
                <span style={{ color: 'black', fontSize: '20px' }}>Share</span>
                <Share style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
              </Card.Title>
              <Card.Text style={{ fontSize: '52px' }}>2434</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="kpi-card text-left">
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-between">
                <span style={{ color: 'black', fontSize: '20px' }}>Likes</span>
                <ThumbUp style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
              </Card.Title>
              <Card.Text style={{ fontSize: '52px' }}>1259</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="kpi-card text-left">
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-between">
                <span style={{ color: 'black', fontSize: '20px' }}>Rating</span>
                <Star style={{ color: 'orange', fontSize: '28px', marginLeft: '20px' }} />
              </Card.Title>
              <Card.Text style={{ fontSize: '52px' }}>8.5</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={9}>
          <Card className="result-card">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>Result</Card.Title>
                <Button variant="warning" className="ml-auto">Check Now</Button>
              </div>
              <div className="bar-chart-container">
                <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </Card.Body>
          </Card>
          <Card className="result-card additional-info-card">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title> Lorem ipsum</Card.Title>
              </div>
              <div className="area-chart-container">
                <Line data={areaData} options={areaOptions} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="vertical-card-container">
          <Card className="vertical-card">
            <Card.Body>
              <Doughnut data={doughnutData} />
              <ul className="mt-3">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
              <Button variant="warning">Check Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardUser;
