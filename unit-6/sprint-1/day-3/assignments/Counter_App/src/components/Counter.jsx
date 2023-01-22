import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className='App'>
      <h2 data-testid="counter-header">Counter</h2>
      <button data-testid="add-btn" onClick={()=>setCount(count+1)}>+</button>
      <button data-testid="subtract-btn" onClick={()=>setCount(count-1)}>-</button>
      <button data-testid="double-btn" onClick={()=>setCount(count*2)}>Double</button>
      <h3 data-testid="count">{count}</h3>
    </div> );
}

export default Counter;