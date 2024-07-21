import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  // useEffect without dependency
  useEffect(() => {
    console.log("Component is mounted");
    document.title = `Anda telah klik ${counter} kali`;
  });

  return (
    <div>
      <p>Nilai dari state counter</p>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add counter</button>
    </div>
  );
}

export default Counter;
