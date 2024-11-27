
// import React, { useState } from "react";
// import { Card, CardContent, Typography, Grid, Select, MenuItem, FormControl, InputLabel, TextField } from "@mui/material";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';
// import "./ExecutiveDashboard.css";
// import D3StackedColumnChart from "./D3StackedColumnChart";
// import D3BubbleChart from "./D3BubbleChart";
// import D3DonutChart from "./D3DonutChart";

// const ExecutiveDashboard = () => {
//   const [selectedDate, setSelectedDate] = useState(dayjs());
//   const [selectedService, setSelectedService] = useState("");
//   const [selectedPost, setSelectedPost] = useState("");

//   const handleDateChange = (newDate) => {
//     setSelectedDate(newDate);
//   };

//   const handleServiceChange = (event) => {
//     setSelectedService(event.target.value);
//   };

//   const handlePostChange = (event) => {
//     setSelectedPost(event.target.value);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="dashboard-container">
//         <Grid container spacing={3}>
//           {/* New Top Row with 3 Cards */}
//           <Grid item xs={12} md={4}>
//             <Card className="top-card">
//               <CardContent>
//                 {/* <Typography variant="h6" className="top-card-title">
//                   This Month
//                 </Typography> */}
//                 <DatePicker
//                   label="Select Date"
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   renderInput={(params) => <TextField {...params} fullWidth />}
//                 />
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card className="top-card">
//               <CardContent>
//                 {/* <Typography variant="h6" className="top-card-title">
//                   Services
//                 </Typography> */}
//                 <FormControl fullWidth>
//                   <InputLabel id="services-label">Services</InputLabel>
//                   <Select
//                     labelId="services-label"
//                     value={selectedService}
//                     onChange={handleServiceChange}
//                     label="Select Service"
//                   >
//                     <MenuItem value={10}>Service 1</MenuItem>
//                     <MenuItem value={20}>Service 2</MenuItem>
//                     <MenuItem value={30}>Service 3</MenuItem>
//                   </Select>
//                 </FormControl>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card className="top-card">
//               <CardContent>
//                 {/* <Typography variant="h6" className="top-card-title">
//                   Posts
//                 </Typography> */}
//                 <FormControl fullWidth>
//                   <InputLabel id="posts-label">Posts</InputLabel>
//                   <Select
//                     labelId="posts-label"
//                     value={selectedPost}
//                     onChange={handlePostChange}
//                     label="Select Post"
//                   >
//                     <MenuItem value={10}>Post 1</MenuItem>
//                     <MenuItem value={20}>Post 2</MenuItem>
//                     <MenuItem value={30}>Post 3</MenuItem>
//                   </Select>
//                 </FormControl>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* KPI Cards */}
//           <Grid item xs={12} md={3}>
//             <Card className="kpi-card">
//               <CardContent className="card-content">
//                 <Typography variant="subtitle1" className="kpi-new-wins">
//                   New Wins
//                 </Typography>
//                 <Typography variant="h2" className="kpi-count">
//                   230
//                 </Typography>
//                 <Typography variant="h6" className="kpi-value">
//                   <span className="arrow">&uarr;</span> 25%
//                 </Typography>
//                 <Typography variant="h8" className="kpi-Text">
//                   Previous 30 days
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <Card className="kpi-card">
//               <CardContent className="card-content">
//                 <Typography variant="subtitle1" className="kpi-new-wins">
//                   Trial : Win Rate
//                 </Typography>
//                 <Typography variant="h2" className="kpi-count">
//                   9.86%
//                 </Typography>
//                 <Typography variant="h6" className="kpi-value">
//                   <span className="arrow">&uarr;</span> 25%
//                 </Typography>
//                 <Typography variant="h8" className="kpi-Text">
//                   Previous 30 days
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <Card className="kpi-card">
//               <CardContent className="card-content">
//                 <Typography variant="subtitle1" className="kpi-new-wins">
//                   New MRR
//                 </Typography>
//                 <Typography variant="h2" className="kpi-count">
//                   $25,690
//                 </Typography>
//                 <Typography variant="h6" className="kpi-value">
//                   <span className="arrow">&uarr;</span> 8.7%
//                 </Typography>
//                 <Typography variant="h8" className="kpi-Text">
//                   Previous 30 days
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <Card className="kpi-card">
              
//               <D3DonutChart />
//             </Card>
//           </Grid>

//           {/* Large Cards */}
//           <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
//             <Card className="large-card">
//               <D3BubbleChart />
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
//             <Card className="large-card">
//               <D3StackedColumnChart />
//             </Card>
//           </Grid>
//         </Grid>
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default ExecutiveDashboard;






import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Select, MenuItem, FormControl, InputLabel, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import "./ExecutiveDashboard.css";
import D3StackedColumnChart from "./D3StackedColumnChart";
import D3BubbleChart from "./D3BubbleChart";
import D3DonutChart from "./D3DonutChart";

const ExecutiveDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedService, setSelectedService] = useState("");
  const [selectedPost, setSelectedPost] = useState("");

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handlePostChange = (event) => {
    setSelectedPost(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="dashboard-container">
        <Grid container spacing={1} justifyContent="flex-start" style={{ marginBottom: '24px' }}>
          {/* New Top Row with 3 Cards */}
          <Grid item xs={12} md={3}>
            <Card className="top-card"style={{ height: '85px' }}>
              <CardContent>
                <DatePicker
                  label="Select Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card className="top-card"style={{ height: '85px' }}>
              <CardContent>
                <FormControl fullWidth>
                  <InputLabel id="services-label">Services</InputLabel>
                  <Select
                    labelId="services-label"
                    value={selectedService}
                    onChange={handleServiceChange}
                    label="Select Service"
                  >
                    <MenuItem value={10}>Service 1</MenuItem>
                    <MenuItem value={20}>Service 2</MenuItem>
                    <MenuItem value={30}>Service 3</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card className="top-card"style={{ height: '85px' }}>
              <CardContent>
                <FormControl fullWidth>
                  <InputLabel id="posts-label">Posts</InputLabel>
                  <Select
                    labelId="posts-label"
                    value={selectedPost}
                    onChange={handlePostChange}
                    label="Select Post"
                  >
                    <MenuItem value={10}>Post 1</MenuItem>
                    <MenuItem value={20}>Post 2</MenuItem>
                    <MenuItem value={30}>Post 3</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* KPI Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card className="kpi-card">
              <CardContent className="card-content">
                <Typography variant="subtitle1" className="kpi-new-wins">
                  New Wins
                </Typography>
                <Typography variant="h4" className="kpi-count"style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  230
                </Typography>
                <Typography variant="h6" className="kpi-value">
                  <span className="arrow">&uarr;</span> 25%
                </Typography>
                <Typography variant="h8" className="kpi-Text">
                  Previous 30 days
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card className="kpi-card">
              <CardContent className="card-content">
                <Typography variant="subtitle1" className="kpi-new-wins">
                  Trial : Win Rate
                </Typography>
                <Typography variant="h4" className="kpi-count"style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  9.86%
                </Typography>
                <Typography variant="h6" className="kpi-value">
                  <span className="arrow">&uarr;</span> 25%
                </Typography>
                <Typography variant="h8" className="kpi-Text">
                  Previous 30 days
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card className="kpi-card">
              <CardContent className="card-content">
                <Typography variant="subtitle1" className="kpi-new-wins">
                  New MRR
                </Typography>
                <Typography variant="h4" className="kpi-count"style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  $25,690
                </Typography>
                <Typography variant="h6" className="kpi-value">
                  <span className="arrow">&uarr;</span> 8.7%
                </Typography>
                <Typography variant="h8" className="kpi-Text">
                  Previous 30 days
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card className="kpi-card">
              <CardContent className="card-content">
                <Typography variant="subtitle1" className="kpi-new-wins">
                  New Views
                </Typography>
                <Typography variant="h2" className="kpi-count">
                <D3DonutChart />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <Card className="kpi-card">
              <D3DonutChart />
            </Card>
          </Grid> */}

          {/* Large Cards */}
          <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
            <Card className="large-card">
              <D3BubbleChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
            <Card className="large-card">
              <D3StackedColumnChart />
            </Card>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
};

export default ExecutiveDashboard;
