
import React from 'react';
import { Paper, Typography, IconButton, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { FilterList, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link for routing
import './ChatArea.css';

function ChatArea() {
  const participants = [
    { name: 'Sunita Nandurge', initials: 'SN' },
    { name: 'Balsamy Paramsivam', initials: 'BP' },
    { name: 'Pooja Rithe', initials: 'PR' },
    { name: 'Rekha Kumari', initials: 'RK' },
    { name: 'Reshama D', initials: 'RD' },
  ];

  return (
    <div className="chat-area">
      <Paper elevation={3} className="chat-window">
        <div className="chat-header">
          <Typography variant="h6" className="chat-title">Chat</Typography>
          <div className="chat-header-icons">
            <IconButton color="primary">
              <FilterList />
            </IconButton>
            <IconButton color="primary">
              <Edit />
            </IconButton>
          </div>
        </div>
        <List className="messages">
          {participants.map((participant, index) => (
            <ListItem button key={index} component={Link} to={`/chat/${participant.name}`}>
              <ListItemAvatar>
                <Avatar>{participant.initials}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={participant.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default ChatArea;
