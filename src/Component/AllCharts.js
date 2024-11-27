import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import LineChart from "./LineChart";
import BarChart from './BarChart'
import PieChart from "./PieChart";
import BubbleChart from "./BubbleChart";

const AllCharts = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Line Chart
            </Typography>
            <LineChart/>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Bar Chart
            </Typography>
            <BarChart/>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Pie Chart
            </Typography>
            <PieChart />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Bubble Chart
            </Typography>
            <BubbleChart />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default AllCharts;