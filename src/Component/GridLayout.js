import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import "./GridLayout.css";

const GridLayout = () => {
  const cardData = [
    { text: "26K (-12.4%)", bgColor: "#ffeb3b" }, // Yellow
    { text: "$6,200 (40.9%)", bgColor: "#4caf50" }, // Green
    { text: "15K (5.2%)", bgColor: "#2196f3" }, // Blue
    { text: "8K (-8.9%)", bgColor: "#f44336" }, // Red
  ];

  return (
    <div className="grid-layout-container">
      <Grid container spacing={2}>
        {/* Top 4 Cards */}
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              className="grid-card"
              style={{ backgroundColor: card.bgColor }}
            >
              <CardContent>
                <div className="card-text">{card.text}</div>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Bottom Card */}
        <Grid item xs={12} style={{ marginTop: "30px" }}>
          <Card className="grid-card" style={{ backgroundColor: "#9e9e9e" }}>
            {" "}
            {/* Grey */}
            <CardContent>
              <div className="card-text">Additional content here</div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridLayout;
