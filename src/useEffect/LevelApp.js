import React, { useEffect } from "react";

function LevelApp({ level }) {
  // useEffect with props dependency
  useEffect(() => {
    console.log("Nilai level adalah: ", level);
    if (level < 5) {
      console.log("Peringkat 1");
    } else if (level < 10) {
      console.log("Peringkat 2");
    } else {
      console.log("Peringkat 3");
    }
  }, [level]);

  return (
    <div>
      <p>Level App</p>
    </div>
  );
}

export default LevelApp;
