import React, { useState, useEffect } from "react";

function CleanUp1() {
  const [counter, setCounter] = useState(0);

  // without dependency
  useEffect(() => {
    console.log("Component did mount");

    return () => {
      console.log("Component unmount");
    };
  });

  // with dependency
  useEffect(() => {
    console.log("Component did mount on counter change");

    return () => {
      console.log("Component unmount on counter change");
    };
  }, [counter]);

  return (
    <div>
      <p>Nilai dari state counter</p>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add counter</button>
    </div>
  );
}

export default CleanUp1;
