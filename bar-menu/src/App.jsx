import React from "react";
import HeaderF from "./components/HeaderF/HeaderF";
import HomeF from "./components/HomeF/HomeF";

import "./App.css";

function App() {
  const dishes = [
    {
      id: 1,
      name: "plato 1",
      description: "Este es el plato 1",
      price: 10,
    },
    {
      id: 2,
      name: "plato 2",
      description: "Este es el plato 2",
      price: 20,
    },
    {
      id: 3,
      name: "plato 3",
      description: "Este es el plato 3",
      price: 15,
    },
  ];

  return (
    <div>
      <HeaderF />
      <div className="home-f-container ">
        {dishes.map((dish) => (
          <HomeF
            key={dish.id}
            plateName={dish.name}
            plateDescription={dish.description}
            platePrice={dish.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
