import React, { useState } from "react";

// Example 2
function FoodsList() {
  const [foods, setFoods] = useState(["Mie goreng", "Nasi goreng"]);

  const addFoods = () => {
    setFoods([...foods, "Kwetiaw goreng", "Indomie goreng"]);
  };

  return (
    <div>
      <h1>Daftar makanan</h1>
      {foods.map((food) => (
        <p>{food}</p>
      ))}
      <button onClick={addFoods}>Add food</button>
    </div>
  );
}

export default FoodsList;
