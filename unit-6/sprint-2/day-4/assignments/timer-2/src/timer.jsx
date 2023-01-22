import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [count]);

  return <h1>Count: {count}</h1>;
}

export default Timer;