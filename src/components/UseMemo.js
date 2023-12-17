import React from 'react'
import { useState, useMemo } from 'react';

function ExpensiveCalculation({ value }) {
  console.log('Calculating expensive value...');
  // Simulate an expensive calculation
  return value * 2;
}


function UseMemo() {
    const [count, setCount] = useState(0);
    // Use useMemo to memoize the result of the expensive calculation
    const result = useMemo(() => {
      return ExpensiveCalculation({ value: count });
    }, [count]); // Dependency array: the result will be re-calculated only if count changes
  
    return (
      <div>
        <p>Count: {count}</p>
        <p>Result of Expensive Calculation: {result}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    );
}
  

export default UseMemo