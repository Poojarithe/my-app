
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout'; // Ensure this path and component are correct
import BasicTable from './Component/BasicTable'; // Ensure this path and component are correct
import StudentProfile from './StudentProfile';
import LayoutTest from './Component/LayoutTest';
import RegistrationForm from './Component/RegistrationForm';
import Base from './Component/Base';
import AllCharts from './components/AllCharts';


export default function App() {
  const handleFormSubmit = (data) => {
    console.log('Form submitted with data:', data);
   
  };

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<LayoutTest />} />
        <Route path="/table" element={<BasicTable />} />
        {/* Add more routes here as needed */}
        <Route
          path="/registration"
          element={<RegistrationForm onSubmit={handleFormSubmit} />}
        />
        <Route path="/base" element={<Base/>} />
      </Routes>
    </Router>
  );
}




// import React from 'react';
// import './App.css';
// import ContentArea from './TeamsPage/ContentArea';
// import ChatArea from './TeamsPage/ChatArea';
// import TopNav from './TeamsPage/TopNav';

// function App() {
//   return (
//     <div className="app">
//       {/* <TopNav /> */}
//         <ChatArea />
//         < ContentArea/>
//       </div>
   
//   );
// }

// export default App;









// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ContentArea from './TeamsPage/ContentArea';
// import ChatArea from './TeamsPage/ChatArea';
// import UserChat from './TeamsPage/UserChat'; // New component for individual user chat

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<ChatArea />} />
//           <Route path="/chat/:userName" element={<UserChat />} />
//           <Route path="/content" element={<ContentArea />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ContentArea from './TeamsPage/ContentArea';
// import ChatArea from './TeamsPage/ChatArea';
// import UserChat from './TeamsPage/UserChat'; // Component for individual user chat
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <ChatArea />
//         <div className="content-wrapper">
//           <Routes>
//             <Route path="/" element={<ContentArea />} />
//             <Route path="/chat/:userName" element={<UserChat />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;









// src/App.js
// import React from 'react';
// import BarChart from './BarChart';

// function App() {
//     return (
//         <div>
//             <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Chart</h1>
//             <BarChart />
//         </div>
//     );
// }

// export default App;












// import React from 'react';
// import LoginForm from './Component/LoginForm';


// function App() {
//   return (
//     <div className="app">
//       <h1>Login</h1>
//       <LoginForm />
//     </div>
//   );
// }

// export default App;





// import React from 'react';
// import LoginForm from './Component/LoginForm';


// function App() {
//   return (
//     <div className="app">
//       <h1>Login</h1>
//       {/* Added a card wrapper */}
//       <div className="card">
//         <LoginForm />
//       </div>
//     </div>
//   );
// }

// export default App;

