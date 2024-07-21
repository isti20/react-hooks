import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  // useEffect with dependency: state counter
  useEffect(() => {
    console.log("Nilai counter adalah: ", counter);
    if (counter < 5) {
      console.log("Level 1");
    } else if (counter < 10) {
      console.log("Level 2");
    } else {
      console.log("Level 3");
    }
  }, [counter]);

  return (
    <div>
      <p>Nilai dari state counter</p>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add counter</button>
    </div>
  );
}

export default Counter;
