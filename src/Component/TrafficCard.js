// TrafficCard.js

import React from 'react';
import { Card, CardContent, Typography, Box, Tabs, Tab } from '@mui/material';

function TrafficCard() {
  const [tabValue, setTabValue] = React.useState("day");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card className="card" sx={{ margin: 1 }}>
      <CardContent>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Traffic
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'flex-end' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="traffic tabs"
          >
            <Tab label="Day" value="day" />
            <Tab label="Month" value="month" />
            <Tab label="Year" value="year" />
          </Tabs>
        </Box>
        <Box sx={{ padding: 2 }}>
          {tabValue === "day" && <div>Day View Content</div>}
          {tabValue === "month" && <div>Month View Content</div>}
          {tabValue === "year" && <div>Year View Content</div>}
        </Box>
      </CardContent>
    </Card>
  );
}

export default TrafficCard;

 