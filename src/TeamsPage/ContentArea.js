
import React from 'react';
import './ContentArea.css';
import { Paper, Typography, TextField, IconButton } from '@mui/material';
import { Send, Call, MoreVert } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

function ContentArea() {
  return (
    <div className="content-area">
      <Paper elevation={3} className="content-window">
        <div className="header">
          <div className="header-left">
            <Avatar className="profile-avatar">U</Avatar>
            <div className="header-info">
              <Typography variant="h6" className="user-name">Select a user</Typography>
              <Typography variant="body2">Chat</Typography>
            </div>
          </div>
          <div className="header-right">
            <IconButton color="primary">
              <Call />
            </IconButton>
            <IconButton color="primary">
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="main-content">
          <h1>Welcome to Microsoft Teams</h1>
          <p>This is the content area.</p>
        </div>
        <div className="input-area">
          <TextField variant="outlined" placeholder="Type a message" fullWidth />
          <IconButton color="primary">
            <Send />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
}

export default ContentArea;
