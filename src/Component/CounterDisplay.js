import React from 'react';
import './CounterDisplay.css';
 
function CounterDisplay({ count, history }) {
  return (
<div>
<h2>Current Count: {count}</h2>
<h3>History:</h3>
<ul>
        {history.map((value, index) => (
<li key={index}>{value}</li>
        ))}
</ul>
</div>
  );
}
 
export default CounterDisplay;