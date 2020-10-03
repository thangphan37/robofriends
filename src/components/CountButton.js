import React, { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);

  return <div className="counter-container">
    <button onClick={() => setCount(c => c+1)}>{count}</button>
  </div>
}


export default CounterButton;