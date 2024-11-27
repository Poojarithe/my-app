import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import EditIcon from '@mui/icons-material/Edit';
import FoundationIcon from '@mui/icons-material/Foundation';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import AppsIcon from '@mui/icons-material/Apps';
import AddchartIcon from '@mui/icons-material/Addchart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WidgetsIcon from '@mui/icons-material/Widgets';
// import './App.css'; 
import './Home.css'; 
const Home = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          {}
          <h1>Welcome to the Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <header className="header">
    <div className="menu-icon">&#9776;</div> {}
    <div className="tabs">
      <div className="tab">Dashboard</div>
      <div className="tab">Users</div>
      <div className="tab">Settings</div>

    </div>
  </header>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-item"><DashboardIcon style={{color:"white"}}></DashboardIcon>Dashboard</div>
    <div className="sidebar-item">
      Theme
      <div className="sidebar-submenu">
        <div className="sidebar-subitem"><InvertColorsIcon style={{color:"white"}}></InvertColorsIcon>Color</div>
        <div className="sidebar-subitem"><EditIcon style={{color:"white"}}></EditIcon>Typography</div>
      </div>
    </div>
    <div className="sidebar-item">
      Components
      <div className="sidebar-submenu">
        <div className="sidebar-subitem"><FoundationIcon style={{color:"white"}}></FoundationIcon>Base</div>
        <div className="sidebar-subitem"><SmartButtonIcon style={{color:"white"}}></SmartButtonIcon>Buttons</div>
        <div className="sidebar-subitem"><AddchartIcon style={{color:"white"}}></AddchartIcon>Charts</div>
        <div className="sidebar-subitem"><AppsIcon style={{color:"white"}}></AppsIcon>Icon</div>
        <div className="sidebar-subitem"><NotificationsIcon style={{color:"white"}}></NotificationsIcon>Notifications</div>
        <div className="sidebar-subitem"><WidgetsIcon style={{color:"white"}}></WidgetsIcon>Widgets</div>
      </div>
    </div>
  </aside>
);

export default Home;






