import React, { useState } from "react";

function FunctionalComponent() {
  const [state, setState] = useState({
    counter: 0,
    foods: ["Mie Goreng", "Nasi Goreng"],
  });

  console.log({ state });

  const addCounter = () => {
    setState({ ...state, counter: state.counter + 1 });
  };

  return (
    <div>
      <h1>Nilai dari state counter</h1>
      <h2>{state.counter}</h2>
      <button onClick={addCounter}>Add counter</button>
    </div>
  );
}

export default FunctionalComponent;
