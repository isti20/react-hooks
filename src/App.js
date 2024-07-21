import React, { useState } from "react";

import "./App.css";
import LevelApp from "./useEffect/LevelApp";

function App() {
  const [level, setLevel] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <LevelApp level={level} />
        <button onClick={() => setLevel(level + 1)}>Add Level</button>
      </header>
    </div>
  );
}

export default App;
