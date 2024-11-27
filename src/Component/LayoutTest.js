// // LayoutTest.js
// import * as React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Layout.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, CardContent, Typography, Box, Tabs, Tab } from "@mui/material";
// import { Container, Row, Col } from "react-bootstrap";
// import BasicTable from "./BasicTable";

// const LayoutTest = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeView, setActiveView] = useState("dashboard");
//   const [tabValue, setTabValue] = useState("day"); // Default to 'day'

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const showView = (view) => {
//     setActiveView(view);
//   };

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text">
//             <i className="bi bi-c-square"></i> COREUI
//           </div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/" onClick={() => showView("dashboard")}>
//                 <i className="bi bi-house-door icon"></i> Dashboard
//               </Link>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <Link to="/table" onClick={() => showView("table")}>
//                 <i className="bi bi-table icon"></i> Table
//               </Link>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-fonts icon"></i> Typography
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             {/* Other sidebar items */}
//           </ul>
//         </nav>
//       </aside>
//       <div className={`main-content ${sidebarOpen ? "expanded" : "collapsed"}`}>
//         <header className="header">
//           <button className="toggle-btn" onClick={toggleSidebar}>
//             <i className="bi bi-list"></i>
//           </button>
//           <div className="header-items">
//             <span onClick={() => showView("dashboard")}>Dashboard</span>
//             <Link to="/table" onClick={() => showView("table")}>
//               Table
//             </Link>
//           </div>
//         </header>
//         <div className="content">
//           {activeView === "dashboard" && (
//             <Container>
//               <Row>
//                 {/* Your dashboard cards */}
//                 <Col xs={12}>
//                   <Card className="card" sx={{ margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="h6" sx={{ marginBottom: 2 }}>
//                         Traffic
//                       </Typography>
//                       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//                         <Tabs
//                           value={tabValue}
//                           onChange={handleTabChange}
//                           aria-label="traffic tabs"
//                         >
//                           <Tab label="Day" value="day" />
//                           <Tab label="Month" value="month" />
//                           <Tab label="Year" value="year" />
//                         </Tabs>
//                       </Box>
//                       <Box sx={{ padding: 2 }}>
//                         {tabValue === "day" && <div>Day View Content</div>}
//                         {tabValue === "month" && <div>Month View Content</div>}
//                         {tabValue === "year" && <div>Year View Content</div>}
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           )}
//           {activeView === "table" && <BasicTable />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutTest;
 







// import React, { useState, useEffect } from "react";
// import "./Layout.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { Container, Row, Col } from "react-bootstrap";
// import BasicTable from "./BasicTable";
// import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
// import RegistrationForm from "./RegistrationForm";
// import Base from "./Base";




// const LayoutTest = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeView, setActiveView] = useState("dashboard");
//   const [formData, setFormData] = useState([]);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const showView = (view) => {
//     setActiveView(view);

//     // Fetch data from local storage when switching to the registration view
//     if (view === "table") {
//       const savedData =
//         JSON.parse(localStorage.getItem("registrationData")) || [];
//       setFormData(savedData);
//     }
//   };

//   const handleFormSubmit = (data) => {
//     // Get existing data from local storage
//     const savedData =
//       JSON.parse(localStorage.getItem("registrationData")) || [];

//     // Add new form data to existing data
//     savedData.push(data);

//     // Save updated data to local storage
//     localStorage.setItem("registrationData", JSON.stringify(savedData));

//     // Update formData state to reflect changes in the table
//     setFormData(savedData);
//   };

//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text">
//             <i className="bi bi-c-square"></i> COREUI
//           </div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a href="#" onClick={() => showView("dashboard")}>
//                 <i className="bi bi-house-door icon"></i> Dashboard
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <a href="#" onClick={() => showView("table")}>
//                 <i className="bi bi-table icon"></i> Table
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 onClick={() => showView("registration")}
//                 aria-label="Registration Form"
//               >
//                 <AppRegistrationIcon style={{ color: "white" }} />
//                 Registration Form
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//             <a href="#" onClick={() => showView("base")}>
//                 <i className="bi bi-box icon"></i> Base
//               </a>
//               {/* <a href="#">
//                 <i className="bi bi-box icon"></i> Base
//               </a> */}
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-circle icon"></i> Buttons
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-bar-chart icon"></i> Charts
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-emoji-smile icon"></i> Icon
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-bell icon"></i> Notifications
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-grid icon"></i> Widgets
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>
//       <div className={`main-content ${sidebarOpen ? "expanded" : "collapsed"}`}>
//         <header className="header">
//           <button className="toggle-btn" onClick={toggleSidebar}>
//             <i className="bi bi-list"></i>
//           </button>
//           <div className="header-items">
//             <a href="#" onClick={() => showView("dashboard")}>
//               Dashboard
//             </a>
//             <a href="#" onClick={() => showView("table")}>
//               Table
//             </a>
//             <a href="#" onClick={() => showView("base")}>
//               Base
//             </a>
            
//           </div>
//         </header>
//         <div className="content">
//           {activeView === "dashboard" && (
//             <Container>
//               <Row>
//                 {/* Card Components */}
//                 {[
//                   {
//                     title: "Users",
//                     value: "26K",
//                     color: "#5856D6",
//                     percentage: "-12.4%",
//                   },
//                   {
//                     title: "Sales",
//                     value: "$45,000",
//                     color: "#3399FF",
//                     percentage: "+8.2%",
//                   },
//                   {
//                     title: "Revenue",
//                     value: "$80,000",
//                     color: "#F9B115",
//                     percentage: "-5.3%",
//                   },
//                   {
//                     title: "Orders",
//                     value: "1,200",
//                     color: "#E55353",
//                     percentage: "+15.7%",
//                   },
//                 ].map((card, index) => (
//                   <Col key={index} xs={12} sm={6} md={4} lg={3}>
//                     <Card
//                       className="card"
//                       sx={{
//                         backgroundColor: card.color,
//                         color: "#fff",
//                         margin: 1,
//                       }}
//                     >
//                       <CardContent>
//                         <Typography
//                           variant="body1"
//                           sx={{
//                             display: "flex",
//                             flexDirection: "column",
//                             gap: 1,
//                           }}
//                         >
//                           <span
//                             style={{ display: "flex", alignItems: "baseline" }}
//                           >
//                             <span style={{ fontSize: "2rem" }}>
//                               {card.value}
//                             </span>
//                             <span
//                               style={{ fontSize: "1rem", marginLeft: "0.5rem" }}
//                             >
//                               {card.percentage}
//                             </span>
//                           </span>
//                           <span>{card.title}</span>
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>

//               {/* Traffic Table */}
//               <Row>
//                 <Col xs={12}>
//                   <Card className="card" sx={{ margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="h6" sx={{ marginBottom: 2 }}>
//                         Table
//                       </Typography>
//                       <TableContainer component={Paper}>
//                         <Table>
//                           <TableHead>
//                             <TableRow>
//                               <TableCell>Name</TableCell>
//                               <TableCell>Email</TableCell>
//                               <TableCell>Password</TableCell>
//                               <TableCell>Contact</TableCell>
//                               <TableCell>Address</TableCell>
//                               <TableCell>Gender</TableCell>
//                             </TableRow>
//                           </TableHead>
//                           <TableBody>
//                             {formData.map((data, index) => (
//                               <TableRow key={index}>
//                                 <TableCell>{data.name}</TableCell>
//                                 <TableCell>{data.email}</TableCell>
//                                 <TableCell>{data.password}</TableCell>
//                                 <TableCell>{data.contact}</TableCell>
//                                 <TableCell>{data.address}</TableCell>
//                                 <TableCell>{data.gender}</TableCell>
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                       </TableContainer>
//                     </CardContent>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           )}
//           {activeView === "table" && <BasicTable />}
//           {activeView === "registration" && (
//             <RegistrationForm onSubmit={handleFormSubmit} />
//           )}
//           {activeView === "base" && <Base />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutTest;

 










// import React, { useState, useEffect } from "react";
// import "./Layout.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { Container, Row, Col } from "react-bootstrap";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import BasicTable from "./BasicTable";
// import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
// import RegistrationForm from "./RegistrationForm";
// import Base from "./Base";
// import BarChart from "./BarChart";
// import LoginForm from "./LoginForm";



// const LayoutTest = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [formData, setFormData] = useState([]);
//   const navigate = useNavigate();

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleNavigation = (view) => {
//     navigate(`/${view}`);

//     // Fetch data from local storage when switching to the registration view
//     if (view === "table") {
//       const savedData =
//         JSON.parse(localStorage.getItem("registrationData")) || [];
//       setFormData(savedData);
//     }
//   };

//   const handleFormSubmit = (data) => {
//     // Get existing data from local storage
//     const savedData =
//       JSON.parse(localStorage.getItem("registrationData")) || [];

//     // Add new form data to existing data
//     savedData.push(data);

//     // Save updated data to local storage
//     localStorage.setItem("registrationData", JSON.stringify(savedData));

//     // Update formData state to reflect changes in the table
//     setFormData(savedData);
//   };

//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text">
//             <i className="bi bi-c-square"></i> COREUI
//           </div>
//         </div>
//         <nav>
//           <ul>
//           <li>
//               <a href="#" onClick={() => handleNavigation("login")}>
//               <i className="bi bi-box-arrow-in-right icon"></i> Login
//               </a>
//          </li>
//             <li>
//               <a href="#" onClick={() => handleNavigation("dashboard")}>
//                 <i className="bi bi-house-door icon"></i> Dashboard
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <a href="#" onClick={() => handleNavigation("table")}>
//                 <i className="bi bi-table icon"></i> Table
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 onClick={() => handleNavigation("registration")}
//                 aria-label="Registration Form"
//               >
//                 <AppRegistrationIcon style={{ color: "white" }} />
//                 Registration Form
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//               <a href="#" onClick={() => handleNavigation("base")}>
//                 <i className="bi bi-box icon"></i> Base
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-circle icon"></i> Buttons
//               </a>
//             </li>
//             <li>
//               <a href="#" onClick={() => handleNavigation("charts")}>
//                 <i className="bi bi-bar-chart icon"></i> Charts
//               </a>
  
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-emoji-smile icon"></i> Icon
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-bell icon"></i> Notifications
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-grid icon"></i> Widgets
//               </a>
//             </li>
            
//           </ul>
//         </nav>
//       </aside>
//       <div className={`main-content ${sidebarOpen ? "expanded" : "collapsed"}`}>
//         <header className="header">
//           <button className="toggle-btn" onClick={toggleSidebar}>
//             <i className="bi bi-list"></i>
//           </button>
//           <div className="header-items">
//           <a href="#" onClick={() => handleNavigation("login")}>
//               Login
//             </a>
//             <a href="#" onClick={() => handleNavigation("dashboard")}>
//               Dashboard
//             </a>
//             <a href="#" onClick={() => handleNavigation("table")}>
//               Table
//             </a>
//             <a href="#" onClick={() => handleNavigation("base")}>
//               Base
//             </a>
//             <a href="#" onClick={() => handleNavigation("charts")}>
//               Charts
//             </a>
//           </div>
//         </header>
//         <div className="content">
//           <Routes>
//             <Route
//               path="/dashboard"
//               element={
//                 <Container>
//                   <Row>
//                     {/* Card Components */}
//                     {[
//                       {
//                         title: "Users",
//                         value: "26K",
//                         color: "#5856D6",
//                         percentage: "-12.4%",
//                       },
//                       {
//                         title: "Sales",
//                         value: "$45,000",
//                         color: "#3399FF",
//                         percentage: "+8.2%",
//                       },
//                       {
//                         title: "Revenue",
//                         value: "$80,000",
//                         color: "#F9B115",
//                         percentage: "-5.3%",
//                       },
//                       {
//                         title: "Orders",
//                         value: "1,200",
//                         color: "#E55353",
//                         percentage: "+15.7%",
//                       },
//                     ].map((card, index) => (
//                       <Col key={index} xs={12} sm={6} md={4} lg={3}>
//                         <Card
//                           className="card"
//                           sx={{
//                             backgroundColor: card.color,
//                             color: "#fff",
//                             margin: 1,
//                           }}
//                         >
//                           <CardContent>
//                             <Typography
//                               variant="body1"
//                               sx={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 gap: 1,
//                               }}
//                             >
//                               <span
//                                 style={{
//                                   display: "flex",
//                                   alignItems: "baseline",
//                                 }}
//                               >
//                                 <span style={{ fontSize: "2rem" }}>
//                                   {card.value}
//                                 </span>
//                                 <span
//                                   style={{
//                                     fontSize: "1rem",
//                                     marginLeft: "0.5rem",
//                                   }}
//                                 >
//                                   {card.percentage}
//                                 </span>
//                               </span>
//                               <span>{card.title}</span>
//                             </Typography>
//                           </CardContent>
//                         </Card>
//                       </Col>
//                     ))}
//                   </Row>

//                   {/* Traffic Table */}
//                   <Row>
//                     <Col xs={12}>
//                       <Card className="card" sx={{ margin: 1 }}>
//                         <CardContent>
//                           <Typography variant="h6" sx={{ marginBottom: 2 }}>
//                             Table
//                           </Typography>
//                           <TableContainer component={Paper}>
//                             <Table>
//                               <TableHead>
//                                 <TableRow>
//                                   <TableCell>Name</TableCell>
//                                   <TableCell>Email</TableCell>
//                                   <TableCell>Password</TableCell>
//                                   <TableCell>Contact</TableCell>
//                                   <TableCell>Address</TableCell>
//                                   <TableCell>Gender</TableCell>
//                                 </TableRow>
//                               </TableHead>
//                               <TableBody>
//                                 {formData.map((data, index) => (
//                                   <TableRow key={index}>
//                                     <TableCell>{data.name}</TableCell>
//                                     <TableCell>{data.email}</TableCell>
//                                     <TableCell>{data.password}</TableCell>
//                                     <TableCell>{data.contact}</TableCell>
//                                     <TableCell>{data.address}</TableCell>
//                                     <TableCell>{data.gender}</TableCell>
//                                   </TableRow>
//                                 ))}
//                               </TableBody>
//                             </Table>
//                           </TableContainer>
//                         </CardContent>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </Container>
//               }
//             />
//             <Route path="/table" element={<BasicTable />} />
//             <Route
//               path="/registration"
//               element={<RegistrationForm onSubmit={handleFormSubmit} />}
//             />
//             <Route path="/base" element={<Base />} />
//             <Route path="/charts" element={<BarChart />} />
//             {/* Default route */}
//             <Route path="/login" element={<LoginForm />} />
//             <Route path="/" element={<Container>
//               <h2>Welcome to the Dashboard</h2>
//             </Container>} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutTest;













// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import LoginForm from "./LoginForm";
// import BasicTable from "./BasicTable";
// import RegistrationForm from "./RegistrationForm";
// import Base from "./Base";
// import BarChart from "./BarChart";
// import "./Layout.css";
// import Grid from '@mui/material/Grid';
// import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// const LayoutTest = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Initially hide sidebar
//   const [formData, setFormData] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
//   const navigate = useNavigate();

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };


//   const handleNavigation = (view) => {
//     navigate(`/${view}`);

//     if (view === "table") {
//       const savedData = JSON.parse(localStorage.getItem("registrationData")) || [];
//       setFormData(savedData);
//     }
//   };

//   const handleFormSubmit = (data) => {
//     const savedData = JSON.parse(localStorage.getItem("registrationData")) || [];
//     savedData.push(data);
//     localStorage.setItem("registrationData", JSON.stringify(savedData));
//     setFormData(savedData);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setSidebarOpen(true); // Show sidebar after login
//     navigate("/dashboard");
//   };

//   return (
//     <div className="layout">
//       {isLoggedIn && (
//         <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//           <div className="sidebar-header">
//             <div className="coreui-text">
//               <i className="bi bi-c-square"></i> COREUI
//             </div>
//           </div>
//           <nav>
//             <ul>
//               <li>
//                 <a href="#" onClick={() => handleNavigation("dashboard")}>
//                   <i className="bi bi-house-door icon"></i> Dashboard
//                 </a>
//               </li>
//               <li className="sidebar-header">Theme</li>
//               <li>
//                 <a href="#" onClick={() => handleNavigation("table")}>
//                   <i className="bi bi-table icon"></i> Table
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   onClick={() => handleNavigation("registration")}
//                   aria-label="Registration Form"
//                 >
//                   <AppRegistrationIcon style={{ color: "white" }} />
//                   Registration Form
//                 </a>
//               </li>
//               <li className="sidebar-header">Components</li>
//               <li>
//                 <a href="#" onClick={() => handleNavigation("base")}>
//                   <i className="bi bi-box icon"></i> Base
//                 </a>
//               </li>
//               <li>
//                 <a href="#" onClick={() => handleNavigation("charts")}>
//                   <i className="bi bi-bar-chart icon"></i> Charts
//                 </a>
//               </li>
//               <li>
//               <a href="#" onClick={() => handleNavigation("logout")}>
//                 <i className="bi bi-box-arrow-right icon"></i> Logout
//               </a>
//             </li>
//             </ul>
//           </nav>
//         </aside>
//       )}
//       <div className={`main-content ${sidebarOpen ? "expanded" : "collapsed"}`}>
//         {isLoggedIn && (
//           <header className="header">
//             <button className="toggle-btn" onClick={toggleSidebar}>
//               <i className="bi bi-list"></i>
//             </button>
//             <div className="header-items">
//               <a href="#" onClick={() => handleNavigation("dashboard")}>
//                 Dashboard
//               </a>
//               <a href="#" onClick={() => handleNavigation("table")}>
//                 Table
//               </a>
//               <a href="#" onClick={() => handleNavigation("base")}>
//                 Base
//               </a>
//               <a href="#" onClick={() => handleNavigation("charts")}>
//                 Charts
//               </a>
//             </div>
//           </header>
//         )}
//         <div className="content">
//           <Routes>
//             <Route
//               path="/dashboard"
//               element={
//                 isLoggedIn ? (
//                   // <Container>
//                   //   <Row>
//                   //     {[
//                   //       { title: "Users", value: "26K", color: "#5856D6", percentage: "-12.4%" },
//                   //       { title: "Sales", value: "$45,000", color: "#3399FF", percentage: "+8.2%" },
//                   //       { title: "Revenue", value: "$80,000", color: "#F9B115", percentage: "-5.3%" },
//                   //       { title: "Orders", value: "1,200", color: "#E55353", percentage: "+15.7%" },
//                   //     ].map((card, index) => (
//                   //       <Col key={index} xs={12} sm={6} md={4} lg={3}>
//                   //         <Card
//                   //           className="card"
//                   //           sx={{ backgroundColor: card.color, color: "#fff", margin: 1 }}
//                   //         >
//                   //           <CardContent>
//                   //             <Typography
//                   //               variant="body1"
//                   //               sx={{ display: "flex", flexDirection: "column", gap: 1 }}
//                   //             >
//                   //               <span style={{ display: "flex", alignItems: "baseline" }}>
//                   //                 <span style={{ fontSize: "2rem" }}>{card.value}</span>
//                   //                 <span style={{ fontSize: "1rem", marginLeft: "0.5rem" }}>
//                   //                   {card.percentage}
//                   //                 </span>
//                   //               </span>
//                   //               <span>{card.title}</span>
//                   //             </Typography>
//                   //           </CardContent>
//                   //         </Card>
//                   //       </Col>
//                   //     ))}
//                   //   </Row>

//                   //   <Row>
//                   //     <Col xs={12}>
//                   //       <Card className="card" sx={{ margin: 1 }}>
//                   //         <CardContent>
//                   //           <Typography variant="h6" sx={{ marginBottom: 2 }}>
//                   //             Table
//                   //           </Typography>
//                   //           <TableContainer component={Paper}>
//                   //             <Table>
//                   //               <TableHead>
//                   //                 <TableRow>
//                   //                   <TableCell>Name</TableCell>
//                   //                   <TableCell>Email</TableCell>
//                   //                   <TableCell>Password</TableCell>
//                   //                   <TableCell>Contact</TableCell>
//                   //                   <TableCell>Address</TableCell>
//                   //                   <TableCell>Gender</TableCell>
//                   //                 </TableRow>
//                   //               </TableHead>
//                   //               <TableBody>
//                   //                 {formData.map((data, index) => (
//                   //                   <TableRow key={index}>
//                   //                     <TableCell>{data.name}</TableCell>
//                   //                     <TableCell>{data.email}</TableCell>
//                   //                     <TableCell>{data.password}</TableCell>
//                   //                     <TableCell>{data.contact}</TableCell>
//                   //                     <TableCell>{data.address}</TableCell>
//                   //                     <TableCell>{data.gender}</TableCell>
//                   //                   </TableRow>
//                   //                 ))}
//                   //               </TableBody>
//                   //             </Table>
//                   //           </TableContainer>
//                   //         </CardContent>
//                   //       </Card>
//                   //     </Col>
//                   //   </Row>
//                   // </Container>
//                   <Container>
//   <Grid container spacing={2}>
//     {[
//       { title: "Users", value: "26K", color: "#5856D6", percentage: "-12.4%" },
//       { title: "Sales", value: "$45,000", color: "#3399FF", percentage: "+8.2%" },
//       { title: "Revenue", value: "$80,000", color: "#F9B115", percentage: "-5.3%" },
//       { title: "Orders", value: "1,200", color: "#E55353", percentage: "+15.7%" },
//     ].map((card, index) => (
//       <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//         <Card
//           className="card"
//           sx={{ backgroundColor: card.color, color: "#fff", margin: 1 }}
//         >
//           <CardContent>
//             <Typography
//               variant="body1"
//               sx={{ display: "flex", flexDirection: "column", gap: 1 }}
//             >
//               <span style={{ display: "flex", alignItems: "baseline" }}>
//                 <span style={{ fontSize: "2rem" }}>{card.value}</span>
//                 <span style={{ fontSize: "1rem", marginLeft: "0.5rem" }}>
//                   {card.percentage}
//                 </span>
//               </span>
//               <span>{card.title}</span>
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//     ))}
//   </Grid>

//   <Grid container spacing={2}>
//     <Grid item xs={12}>
//       <Card className="card" sx={{ margin: 1 }}>
//         <CardContent>
//           <Typography variant="h6" sx={{ marginBottom: 2 }}>
//             Table
//           </Typography>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Password</TableCell>
//                   <TableCell>Contact</TableCell>
//                   <TableCell>Address</TableCell>
//                   <TableCell>Gender</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {formData.map((data, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{data.name}</TableCell>
//                     <TableCell>{data.email}</TableCell>
//                     <TableCell>{data.password}</TableCell>
//                     <TableCell>{data.contact}</TableCell>
//                     <TableCell>{data.address}</TableCell>
//                     <TableCell>{data.gender}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </CardContent>
//       </Card>
//     </Grid>
//   </Grid>
// </Container>

//                 ) : (
//                   <LoginForm onLogin={handleLogin} />
//                 )
//               }
//             />
//             <Route
//               path="/table"
//               element={isLoggedIn ? <BasicTable /> : <LoginForm onLogin={handleLogin} />}
//             />
//             <Route
//               path="/registration"
//               element={isLoggedIn ? <RegistrationForm onSubmit={handleFormSubmit} /> : <LoginForm onLogin={handleLogin} />}
//             />
//             <Route
//               path="/base"
//               element={isLoggedIn ? <Base /> : <LoginForm onLogin={handleLogin} />}
//             />
//             <Route
//               path="/charts"
//               element={isLoggedIn ? <BarChart /> : <LoginForm onLogin={handleLogin} />}
//             />
//             <Route
//               path="/login"
//               element={<LoginForm onLogin={handleLogin} />}
//             />
//             <Route
//               path="/"
//               element={<LoginForm onLogin={handleLogin} />}
//             />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LayoutTest;











import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import BasicTable from "./BasicTable";
import RegistrationForm from "./RegistrationForm";
import Base from "./Base";
import "./Layout.css";
import Grid from '@mui/material/Grid';
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AllCharts from "./AllCharts";
import ExecutiveDashboard from "./ExecutiveDashboard";
import DashboardUser from "./DashboardUser";


// import PieChart from "./PieChart";

const LayoutTest = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (view) => {
    if (view === "logout") {
      handleLogout();
    } else {
      navigate(`/${view}`);
      if (view === "table") {
        const savedData = JSON.parse(localStorage.getItem("registrationData")) || [];
        setFormData(savedData);
      }
    }
  };

  const handleFormSubmit = (data) => {
    const savedData = JSON.parse(localStorage.getItem("registrationData")) || [];
    savedData.push(data);
    localStorage.setItem("registrationData", JSON.stringify(savedData));
    setFormData(savedData);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setSidebarOpen(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSidebarOpen(false);
    navigate("/login");
  };

  return (
    <div className="layout">
      {isLoggedIn && (
        <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
          <div className="sidebar-header">
            <div className="coreui-text">
              <i className="bi bi-c-square"></i> COREUI
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" onClick={() => handleNavigation("dashboard")}>
                  <i className="bi bi-house-door icon"></i> Dashboard
                </a>
              </li>
              <li className="sidebar-header">Theme</li>
              <li>
                <a href="#" onClick={() => handleNavigation("table")}>
                  <i className="bi bi-table icon"></i> Table
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleNavigation("registration")}
                  aria-label="Registration Form"
                >
                  <AppRegistrationIcon style={{ color: "white" }} />
                  Registration Form
                </a>
              </li>
              <li className="sidebar-header">Components</li>
              <li>
                <a href="#" onClick={() => handleNavigation("dashboarduser")}>
                  <i className="bi bi-house-door icon"></i> Dashboard User
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleNavigation("executivedashboard")}>
                  <i className="bi bi-house-door icon"></i> Executive Dashboard
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleNavigation("base")}>
                  <i className="bi bi-box icon"></i> Base
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleNavigation("charts")}>
                  <i className="bi bi-bar-chart icon"></i> Charts
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleNavigation("logout")}>
                  <i className="bi bi-box-arrow-right icon"></i> Logout
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}
      <div className={`main-content ${sidebarOpen ? "expanded" : "collapsed"}`}>
        {isLoggedIn && (
          <header className="header">
            <button className="toggle-btn" onClick={toggleSidebar}>
              <i className="bi bi-list"></i>
            </button>
            <div className="header-items">
              <a href="#" onClick={() => handleNavigation("dashboard")}>
                Dashboard
              </a>
              <a href="#" onClick={() => handleNavigation("table")}>
                Table
              </a>
            
              <a href="#" onClick={() => handleNavigation("base")}>
                Base
              </a>
              <a href="#" onClick={() => handleNavigation("charts")}>
                Charts
              </a>
            </div>
          </header>
        )}
        <div className="content">
          <Routes>
            <Route
              path="/dashboard"
              element={
                isLoggedIn ? (
          
                  <Container>
                     <h1>Dashboard</h1>
 
                    <Grid container spacing={2}>
                      {[
                        { title: "Users", value: "26K", color: "#5856D6", percentage: "-12.4%" },
                        { title: "Sales", value: "$45,000", color: "#3399FF", percentage: "+8.2%" },
                        { title: "Revenue", value: "$80,000", color: "#F9B115", percentage: "-5.3%" },
                        { title: "Orders", value: "1,200", color: "#E55353", percentage: "+15.7%" },
                      ].map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                          <Card
                            className="card"
                            sx={{ backgroundColor: card.color, color: "#fff", margin: 1 }}
                          >
                            <CardContent>
                              <Typography
                                variant="body1"
                                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                              >
                                <span style={{ display: "flex", alignItems: "baseline" }}>
                                  <span style={{ fontSize: "2rem" }}>{card.value}</span>
                                  <span style={{ fontSize: "1rem", marginLeft: "0.5rem" }}>
                                    {card.percentage}
                                  </span>
                                </span>
                                <span>{card.title}</span>
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Card className="card" sx={{ margin: 1 }}>
                          <CardContent>
                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                              Table
                            </Typography>
                            <TableContainer component={Paper}>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Password</TableCell>
                                    <TableCell>Contact</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Gender</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {formData.map((data, index) => (
                                    <TableRow key={index}>
                                      <TableCell>{data.name}</TableCell>
                                      <TableCell>{data.email}</TableCell>
                                      <TableCell>{data.password}</TableCell>
                                      <TableCell>{data.contact}</TableCell>
                                      <TableCell>{data.address}</TableCell>
                                      <TableCell>{data.gender}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Container>
                ) : (
                  <LoginForm onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/table"
              element={isLoggedIn ? <BasicTable /> : <LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/registration"
              element={isLoggedIn ? <RegistrationForm onSubmit={handleFormSubmit} /> : <LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/dashboardUser"
              element={isLoggedIn ? <DashboardUser /> : <LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/executivedashboard"
              element={isLoggedIn ? <ExecutiveDashboard /> : <LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/base"
              element={isLoggedIn ? <Base /> : <LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/charts"
              element={isLoggedIn ? <AllCharts /> : <LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/login"
              element={<LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/"
              element={<LoginForm onLogin={handleLogin} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default LayoutTest;











