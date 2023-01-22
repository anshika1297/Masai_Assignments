import React, { useState, useEffect } from 'react';

function Timer({ show }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [show]);

  return show ? <h1>Seconds: {seconds}</h1> : null;
}

function Parent() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide' : 'Show'} Timer
      </button>
      {showTimer && <Timer show={showTimer} />}
    </div>
  );
}

export default Parent;
