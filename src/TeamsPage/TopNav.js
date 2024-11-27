import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';
import './TopNav.css';

function TopNav() {
  return (
    <AppBar position="static" className="topnav">
      <Toolbar>
        <Typography variant="h6" className="title">
          Chat
        </Typography>
        <div className="search">
          <IconButton color="inherit">
            <Search />
          </IconButton>
        </div>
        <div className="icons">
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
