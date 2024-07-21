import React, { useState } from "react";

// Example 1
function Counter() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Nilai dari state counter</p>
      <h2>{counter}</h2>
      <button onClick={addCounter}>Add counter</button>
    </div>
  );
}

export default Counter;
