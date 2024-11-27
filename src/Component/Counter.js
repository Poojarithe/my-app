// src/Counter.js

import React, { useState } from 'react';
import './Counter.css'; // Optional: Add your styles here

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter">
            <h1>Counter</h1>
            <div className="count-display">{count}</div>
            <div className="controls">
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
};

export default Counter;
