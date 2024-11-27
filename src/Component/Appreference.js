// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1 style={{ color: 'green' }}>Welcome to the Training</h1>
//       <p style={{ color: 'black' }}>You can add,update and remove from here .</p>

//       <div style={{ margin: '20px' }}>
//         <button style={{ padding: '10px 20px', fontSize: '16px', margin: '5px',color: 'blue' }}>Add</button>
//         <button style={{ padding: '10px 20px', fontSize: '16px', margin: '5px',color: 'blue' }}>Update</button>
//         <button style={{ padding: '10px 20px', fontSize: '16px', margin: '5px',color: 'blue' }}>Remove</button>
//       </div>

//       <input 
//         type="text" 
//         placeholder="Type something..." 
//         style={{ padding: '10px', fontSize: '16px', margin: '10px' }} 
//       />
//     </div>
 

//   );
// }

// export default App;




// import React, { useState } from 'react';
// import CounterDisplay from './CounterDisplay';
// import ControlPanel from './ControlPanel';
// import './App.css';
 
// function App() {
//   const [count, setCount] = useState(0);
//   const [history, setHistory] = useState([]);
 
//   const increment = () => {
//     setCount(count + 1);
//     setHistory([...history, count + 1]);
//   };
 
//   const decrement = () => {
//     setCount(count - 1);
//     setHistory([...history, count - 1]);
//   };
 
//   const reset = () => {
//     setCount(0);
//     setHistory([...history, 0]);
//   };
 
//   return (
// <div>
// <h1>Simple Counter with History</h1>
// <CounterDisplay count={count} history={history} />
// <ControlPanel increment={increment} decrement={decrement} reset={reset} />
// </div>
//   );
// }
 
// export default App;





// // src/App.js

// import React from 'react';
// import Counter from './Counter';
// // import './App.css'; // Optional: Add global styles here
// import './Counter.css';

// function App() {
//     return (
//         <div className="App">
//             <Counter />
//         </div>
//     );
// }

// export default App;




// import React from 'react';

// import './App.css'; // Ensure you create this CSS file for styling
// import Home from './Component/Home';
// import Layout from './Component/Layout';
// import LayoutTest from './Component/LayoutTest';

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BasicTable from './Component/BasicTable';


// const App = () => {
//   return (
//     // <div className="App">
  
//     //   {/* <Home/> */}
//     //   {/* <Layout/> */}
//     // <LayoutTest/>
//     // </div>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="/table" element={<BasicTable />} />
//       </Routes>
//     </Router>
//   );
// };
// export default App;
