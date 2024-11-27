// import React, { useState } from "react";
// import "./Layout.css";


// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
// import TextFieldsIcon from "@mui/icons-material/TextFields";
// import CategoryIcon from "@mui/icons-material/Category";
// import ButtonIcon from "@mui/icons-material/RadioButtonUnchecked";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import WidgetsIcon from "@mui/icons-material/Widgets";
// import MenuIcon from "@mui/icons-material/Menu"; // Burger icon
// import GridLayout from "./GridLayout.js";
// import BasicTable from "./BasicTable.js";


// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text">CoreUI</div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a href="#">
//                 <DashboardIcon className="icon" /> Dashboard
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <a href="#">
//                 <ColorLensIcon className="icon" /> Color
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <TextFieldsIcon className="icon" /> Typography
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//               <a href="#">
//                 <CategoryIcon className="icon" /> Base
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <ButtonIcon className="icon" /> Buttons
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <BarChartIcon className="icon" /> Charts
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <InsertEmoticonIcon className="icon" /> Icon
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <NotificationsIcon className="icon" /> Notifications
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <WidgetsIcon className="icon" /> Widgets
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>
//       <div className={`main-content ${sidebarOpen ? "expanded" : "collapsed"}`}>
//         <header className="header">
//           <button className="toggle-btn"onClick={toggleSidebar}>
//             <MenuIcon/>
//           </button>
//           <div className="header-items">
//             <span>Dashboard</span>
//             <span>User</span>
//             <span>Settings</span>
//           </div>
//         </header>
//         <div className="content">
//           <GridLayout/>
//           {/* <BasicTable/> */}

      

//           {/* {<h2>Welcome to My Application</h2>
//           <p>This is a simple layout with a sidebar and a header.</p>} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

 









// import React, { useState } from "react";
// import "./Layout.css";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
// import TextFieldsIcon from "@mui/icons-material/TextFields";
// import CategoryIcon from "@mui/icons-material/Category";
// import ButtonIcon from "@mui/icons-material/RadioButtonUnchecked";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import WidgetsIcon from "@mui/icons-material/Widgets";
// import MenuIcon from "@mui/icons-material/Menu"; // Burger icon
// import EmailIcon from "@mui/icons-material/Email"; // Email icon
// import GridLayout from "./GridLayout.js";
// import BasicTable from "./BasicTable.js";

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text">CoreUI</div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a href="#">
//                 <DashboardIcon className="icon" /> Dashboard
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <a href="#">
//                 <ColorLensIcon className="icon" /> Color
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <TextFieldsIcon className="icon" /> Typography
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//               <a href="#">
//                 <CategoryIcon className="icon" /> Base
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <ButtonIcon className="icon" /> Buttons
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <BarChartIcon className="icon" /> Charts
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <InsertEmoticonIcon className="icon" /> Icon
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <NotificationsIcon className="icon" /> Notifications
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <WidgetsIcon className="icon" /> Widgets
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>
//       <div className={`main-content ${sidebarOpen ? "expanded" : "collapsed"}`}>
//         <header className="header">
//           <button className="toggle-btn" onClick={toggleSidebar}>
//             <MenuIcon />
//           </button>
//           <div className="header-items">
//             <span>Dashboard</span>
//             <span>User</span>
//             <span>Settings</span>
//           </div>
//           <div className="header-icons">
//             <button className="icon-btn">
//               <NotificationsIcon />
//             </button>
//             <button className="icon-btn">
//               <EmailIcon />
//             </button>
//           </div>
//         </header>
//         <div className="content">
//           <GridLayout />
//           {/* <BasicTable /> */}
//           {/* {<h2>Welcome to My Application</h2>
//           <p>This is a simple layout with a sidebar and a header.</p>} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;


// import React, { useState } from "react";
// import "./Layout.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, ButtonGroup, Switch, Card, CardContent, Typography } from "@mui/material";
// import Login from "./Login";
// import { Container, Row, Col } from 'react-bootstrap';
 
// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeView, setActiveView] = useState("dashboard");
//   const [machineStatus, setMachineStatus] = useState(false);
 
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
 
//   const showView = (view) => {
//     setActiveView(view);
//   };
 
//   const handleSwitchChange = (event) => {
//     setMachineStatus(event.target.checked);
//   };
 
//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text"><i className="bi bi-c-square"></i> COREUI</div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a onClick={() => showView("dashboard")}>
//                 <i className="bi bi-house-door icon"></i> Dashboard
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-palette icon"></i> Color
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-fonts icon"></i> Typography
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-box icon"></i> Base
//               </a>
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
//             <span onClick={() => showView("dashboard")}>Dashboard</span>
//             {/* <span onClick={() => showView("login")}>User</span> */}
//             <span>Settings</span>
//           </div>
 
//           <div className="header-right">
//             <ButtonGroup variant="contained" aria-label="outlined primary button group" className="custom-button-group">
//               <Button>Day</Button>
//               <Button>Week</Button>
//               <Button>Month</Button>
//               <Button>Year</Button>
//             </ButtonGroup>
 
//             <div className="machine-status">
//               <span>{machineStatus ? "Machine ON" : "Machine OFF"}</span>
//               <Switch
//                 checked={machineStatus}
//                 onChange={handleSwitchChange}
//                 color="primary"
//               />
//             </div>
//           </div>
//         </header>
//         <div className="content">
//           {activeView === "dashboard" && (
//             <Container>
//               <Row>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#5856D6', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>26K</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-12.4%)</span>
//                         </span>
//                         <span>Users</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#3399FF', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$45,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+8.2%)</span>
//                         </span>
//                         <span>Sales</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#F9B115', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$80,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-5.3%)</span>
//                         </span>
//                         <span>Revenue</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#E55353', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>1,200</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+15.7%)</span>
//                         </span>
//                         <span>Orders</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           )}
//           {/* {activeView === "login" && <Login />} */}
//           {/* Other content can go here */}
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default Layout;





// import React, { useState } from "react";
// import "./Layout.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, ButtonGroup, Switch, Card, CardContent, Typography } from "@mui/material";
// import { Container, Row, Col } from 'react-bootstrap';

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeView, setActiveView] = useState("dashboard");
//   const [machineStatus, setMachineStatus] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const showView = (view) => {
//     setActiveView(view);
//   };

//   const handleSwitchChange = (event) => {
//     setMachineStatus(event.target.checked);
//   };

//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text"><i className="bi bi-c-square"></i> COREUI</div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a onClick={() => showView("dashboard")}>
//                 <i className="bi bi-house-door icon"></i> Dashboard
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-palette icon"></i> Color
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-fonts icon"></i> Typography
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-box icon"></i> Base
//               </a>
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
//             <span onClick={() => showView("dashboard")}>Dashboard</span>
//             {/* Removed the reference to login */}
//             <span>Settings</span>
//           </div>

//           <div className="header-right">
//             <ButtonGroup variant="contained" aria-label="outlined primary button group" className="custom-button-group">
//               <Button>Day</Button>
//               <Button>Week</Button>
//               <Button>Month</Button>
//               <Button>Year</Button>
//             </ButtonGroup>

//             <div className="machine-status">
//               <span>{machineStatus ? "Machine ON" : "Machine OFF"}</span>
//               <Switch
//                 checked={machineStatus}
//                 onChange={handleSwitchChange}
//                 color="primary"
//               />
//             </div>
//           </div>
//         </header>
//         <div className="content">
//           {activeView === "dashboard" && (
//             <Container>
//               <Row>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#5856D6', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>26K</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-12.4%)</span>
//                         </span>
//                         <span>Users</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#3399FF', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$45,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+8.2%)</span>
//                         </span>
//                         <span>Sales</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#F9B115', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$80,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-5.3%)</span>
//                         </span>
//                         <span>Revenue</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#E55353', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>1,200</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+15.7%)</span>
//                         </span>
//                         <span>Orders</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           )}
//           {/* Other content can go here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;


// import React, { useState } from "react";
// import "./Layout.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, CardContent, Typography } from "@mui/material";
// import { Container, Row, Col } from 'react-bootstrap';

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeView, setActiveView] = useState("dashboard");

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const showView = (view) => {
//     setActiveView(view);
//   };

//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text"><i className="bi bi-c-square"></i> COREUI</div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a onClick={() => showView("dashboard")}>
//                 <i className="bi bi-house-door icon"></i> Dashboard
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-palette icon"></i> Color
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-fonts icon"></i> Typography
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-box icon"></i> Base
//               </a>
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
//             <span onClick={() => showView("dashboard")}>Dashboard</span>
//             <span>Settings</span>
//           </div>

//           <div className="header-right">
//             {/* Removed the ButtonGroup component */}
//             {/* Removed the machine-status section */}
//           </div>
//         </header>
//         <div className="content">
//           {activeView === "dashboard" && (
//             <Container>
//               <Row>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#5856D6', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>26K</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-12.4%)</span>
//                         </span>
//                         <span>Users</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#3399FF', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$45,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+8.2%)</span>
//                         </span>
//                         <span>Sales</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#F9B115', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$80,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-5.3%)</span>
//                         </span>
//                         <span>Revenue</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#E55353', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>1,200</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+15.7%)</span>
//                         </span>
//                         <span>Orders</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           )}
//           {/* Other content can go here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;











// import React, { useState } from "react";
// import "./Layout.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, CardContent, Typography } from "@mui/material";
// import { Container, Row, Col } from 'react-bootstrap';
// import DataTable from './DataTable'; // Import the DataTable component

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeView, setActiveView] = useState("dashboard");
//   const [machineStatus, setMachineStatus] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const showView = (view) => {
//     setActiveView(view);
//   };

//   const handleSwitchChange = (event) => {
//     setMachineStatus(event.target.checked);
//   };

//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text"><i className="bi bi-c-square"></i> COREUI</div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a onClick={() => showView("dashboard")}>
//                 <i className="bi bi-house-door icon"></i> Dashboard
//               </a>
//             </li>
//             <li>
//               <a onClick={() => showView("table")}>
//                 <i className="bi bi-table icon"></i> Table
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-palette icon"></i> Color
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-fonts icon"></i> Typography
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-box icon"></i> Base
//               </a>
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
//             <span onClick={() => showView("dashboard")}>Dashboard</span>
//             <span onClick={() => showView("table")}>Table</span>
//             <span>Settings</span>
//           </div>
//         </header>
//         <div className="content">
//           {activeView === "dashboard" && (
//             <Container>
//               <Row>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#5856D6', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>26K</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-12.4%)</span>
//                         </span>
//                         <span>Users</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#3399FF', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$45,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+8.2%)</span>
//                         </span>
//                         <span>Sales</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#F9B115', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$80,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-5.3%)</span>
//                         </span>
//                         <span>Revenue</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#E55353', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>1,200</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+15.7%)</span>
//                         </span>
//                         <span>Orders</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           )}
//           {activeView === "table" && <DataTable />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;




// import * as React from 'react';
// import { useState } from 'react';
// import "./Layout.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, CardContent, Typography } from "@mui/material";
// import { Container, Row, Col } from 'react-bootstrap';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First Name', width: 130 },
//   { field: 'middleName', headerName: 'Middle Name', width: 130 },
//   { field: 'lastName', headerName: 'Last Name', width: 130 },
//   { field: 'age', headerName: 'Age', type: 'number', width: 90 },
// ];

// const rows = Array.from({ length: 20 }, (_, index) => ({
//   id: index + 1,
//   firstName: `First${index + 1}`,
//   middleName: `Middle${index + 1}`,
//   lastName: `Last${index + 1}`,
//   age: 20 + (index % 50),
// }));

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeView, setActiveView] = useState("dashboard");

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const showView = (view) => {
//     setActiveView(view);
//   };

//   return (
//     <div className="layout">
//       <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <div className="coreui-text"><i className="bi bi-c-square"></i> COREUI</div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a onClick={() => showView("dashboard")}>
//                 <i className="bi bi-house-door icon"></i> Dashboard
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <a onClick={() => showView("table")}>
//                 <i className="bi bi-table icon"></i> Table
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-fonts icon"></i> Typography
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-box icon"></i> Base
//               </a>
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
//             <span onClick={() => showView("dashboard")}>Dashboard</span>
//             <span onClick={() => showView("table")}>Table</span>
//           </div>
//         </header>
//         <div className="content">
//           {activeView === "dashboard" && (
//             <Container>
//               <Row>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#5856D6', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>26K</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-12.4%)</span>
//                         </span>
//                         <span>Users</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#3399FF', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$45,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+8.2%)</span>
//                         </span>
//                         <span>Sales</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#F9B115', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$80,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-5.3%)</span>
//                         </span>
//                         <span>Revenue</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#E55353', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>1,200</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+15.7%)</span>
//                         </span>
//                         <span>Orders</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
            
//           )}
          
//           {activeView === "table" && (
//             <div style={{ height: 400, width: '100%' }}>
//               <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 pageSize={10}
//                 checkboxSelection
//                 disableSelectionOnClick
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;





// import * as React from 'react';
// import { useState } from 'react';
// import "./Layout.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card, CardContent, Typography, Box, Tabs, Tab,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper
//  } from "@mui/material";
// import { Container, Row, Col } from 'react-bootstrap';
// import { DataGrid } from '@mui/x-data-grid';
// import { styled } from '@mui/material/styles';
// import BasicTable from './BasicTable';
// import { Link } from 'react-router-dom';
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [activeView, setActiveView] = useState("dashboard");
//   const [tabValue, setTabValue] = useState('day'); // Default to 'day'

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
//           <div className="coreui-text"><i className="bi bi-c-square"></i> COREUI</div>
//         </div>
//         <nav>
//           <ul>
//             <li>
//               <a onClick={() => showView("dashboard")}>
//                 <i className="bi bi-house-door icon"></i> Dashboard
//               </a>
//             </li>
//             <li className="sidebar-header">Theme</li>
//             <li>
//               <Link to="/Table" onClick={() => showView("table")}>
//                 <i className="bi bi-table icon"></i> Table
//               </Link>
//             </li>
//             <li>
//               <a href="#">
//               <li>
           
//            <Link to="/registration" aria-label="Registration Form">
//            <AppRegistrationIcon style={{ color: 'white' }} />
//                Registration Form
//                </Link>
              
//            </li>
//                 {/* <i className="bi bi-fonts icon"></i> RegistrationForm */}
//               </a>
//             </li>
//             <li className="sidebar-header">Components</li>
//             <li>
//               <a href="#">
//                 <i className="bi bi-box icon"></i> Base
//               </a>
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
//             <span onClick={() => showView("dashboard")}>Dashboard</span>
//             <Link to="/table" >
            
//                 {/* <i className="bi bi-table icon"></i> Table */}
              
//             <span onClick={() => showView("table")}>Table</span>
//             </Link>
//           </div>
//         </header>
//         <div className="content">
//           {activeView === "dashboard" && (
//             <Container>
//               <Row>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#5856D6', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>26K</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-12.4%)</span>
//                         </span>
//                         <span sx={{ borderBottom: 3, borderColor: 'divider' }}></span>
                        
//                         <span>Users</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#3399FF', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$45,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+8.2%)</span>
//                         </span>
//                         <span>Sales</span>
//                       </Typography>

//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#F9B115', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>$80,000</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(-5.3%)</span>
//                         </span>
//                         <span>Revenue</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//                 <Col xs={12} sm={6} md={4} lg={3}>
//                   <Card className="card" sx={{ backgroundColor: '#E55353', color: '#fff', margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                         <span style={{ display: 'flex', alignItems: 'baseline' }}>
//                           <span style={{ fontSize: '2rem' }}>1,200</span>
//                           <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>(+15.7%)</span>
//                         </span>
//                         <span>Orders</span>
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Col>
//               </Row>

//               {/* New Traffic Container */}
//               <Row>
//                 <Col xs={12}>
//                   <Card className="card" sx={{ margin: 1 }}>
//                     <CardContent>
//                       <Typography variant="h6" sx={{ marginBottom: 2 }}>Traffic</Typography>
//                       <div>

//                       <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Password</TableCell>
//                 <TableCell>Contact</TableCell>
//                 <TableCell>Address</TableCell>
//                 <TableCell>Gender</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {userData.map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{row.name}</TableCell>
//                   <TableCell>{row.email}</TableCell>
//                   <TableCell>{row.password}</TableCell>
//                   <TableCell>{row.contact}</TableCell>
//                   <TableCell>{row.address}</TableCell>
//                   <TableCell>{row.gender}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
    

//                       {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                         <Tabs value={tabValue} onChange={handleTabChange} aria-label="traffic tabs">
//                           <Tab label="Day" value="day" />
//                           <Tab label="Month" value="month" />
//                           <Tab label="Year" value="year" />
//                         </Tabs> */}
//                       {/* </Box> */}
//                       {/* <Box sx={{ padding: 2 }}>
//                         {tabValue === 'day' && <div>Day View Content</div>}
//                         {tabValue === 'month' && <div>Month View Content</div>}
//                         {tabValue === 'year' && <div>Year View Content</div>}
//                       </Box> */}
//                     </CardContent>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           )}
//           {activeView === "table" && <BasicTable/>}
//           {/* {activeView === "table" && (
//             <div style={{ height: 400, width: '100%' }}>
//               <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 pageSize={10}
//                 checkboxSelection
//                 disableSelectionOnClick
//               />
//             </div>
//           )} */}
//           {/* {activeView === "table" && (
//         <div style={{ height: 400, width: "100%" }}>
//           <StyledDataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={10}
//             checkboxSelection
//             disableSelectionOnClick
//           />
//         </div>
//       )}
//   */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;








import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Layout.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardContent, Typography, Box, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { Container, Row, Col } from 'react-bootstrap';
import BasicTable from './BasicTable';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import RegistrationForm from './Components/RegistrationForm';
import RegistrationForm from './RegistrationForm';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState("dashboard");
  const [tabValue, setTabValue] = useState('day'); // Default to 'day'
  const [formData, setFormData] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const showView = (view) => {
    setActiveView(view);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFormSubmit = (data) => {
    setFormData(prev => [...prev, data]);
  };

 
  const handleDelete = (index) => {
    setFormData(prev => prev.filter((_, i) => i !== index));
  };


  // Placeholder data for the table
  const userData = [
    { name: "John Doe", email: "john@example.com", password: "******", contact: "123-456-7890", address: "123 Main St", gender: "Male" },
    // Add more user data as needed
  ];

  return (
    <div className="layout">
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="coreui-text"><i className="bi bi-c-square"></i> COREUI</div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard" onClick={() => showView("dashboard")}>
                <i className="bi bi-house-door icon"></i> Dashboard
              </Link>
            </li>
            <li className="sidebar-header">Theme</li>
            <li>
              <Link to="/table" onClick={() => showView("table")}>
                <i className="bi bi-table icon"></i> Table
              </Link>
            </li>
            <li>
              <Link to="/registration" aria-label="Registration Form">
                <AppRegistrationIcon style={{ color: 'white' }} />
                Registration Form
              </Link>
            </li>
            <li className="sidebar-header">Components</li>
            <li><a href="#"><i className="bi bi-box icon"></i> Base</a></li>
            <li><a href="#"><i className="bi bi-circle icon"></i> Buttons</a></li>
            <li><a href="#"><i className="bi bi-bar-chart icon"></i> Charts</a></li>
            <li><a href="#"><i className="bi bi-emoji-smile icon"></i> Icon</a></li>
            <li><a href="#"><i className="bi bi-bell icon"></i> Notifications</a></li>
            <li><a href="#"><i className="bi bi-grid icon"></i> Widgets</a></li>
          </ul>
        </nav>
      </aside>
      <div className={`main-content ${sidebarOpen ? "expanded" : "collapsed"}`}>
        <header className="header">
          <button className="toggle-btn" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
          </button>
          <div className="header-items">
            <Link to="/dashboard" onClick={() => showView("dashboard")}>Dashboard</Link>
            <Link to="/table" onClick={() => showView("table")}>Table</Link>
          </div>
        </header>
        <div className="content">
          {activeView === "dashboard" && (
            <Container>
              <Row>
                {/* Card Components */}
                {[{ title: "Users", value: "26K", color: '#5856D6', percentage: "-12.4%" },
                  { title: "Sales", value: "$45,000", color: '#3399FF', percentage: "+8.2%" },
                  { title: "Revenue", value: "$80,000", color: '#F9B115', percentage: "-5.3%" },
                  { title: "Orders", value: "1,200", color: '#E55353', percentage: "+15.7%" }].map((card, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card className="card" sx={{ backgroundColor: card.color, color: '#fff', margin: 1 }}>
                      <CardContent>
                        <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <span style={{ display: 'flex', alignItems: 'baseline' }}>
                            <span style={{ fontSize: '2rem' }}>{card.value}</span>
                            <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>{card.percentage}</span>
                          </span>
                          <span>{card.title}</span>
                        </Typography>
                      </CardContent>

                    
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Traffic Table */}
              <Row>
                <Col xs={12}>
                  <Card className="card" sx={{ margin: 1 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ marginBottom: 2 }}>Table</Typography>
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
                </Col>
              </Row>
            </Container>
          )}
          {activeView === "table" && <BasicTable />}
          {activeView === "registration" && <RegistrationForm onSubmit={handleFormSubmit} />}
          
        </div>
      </div>
    </div>
  );
};

export default Layout;















