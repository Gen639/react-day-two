import React, { useState } from "react";
import "./CounterF.css";

const CounterF = (props) => {
  const [counter, setCounter] = useState(props.initialValue);

  const increment = () => {
    setCounter(counter + props.step);
  };
  const decrement = () => {
    setCounter(counter - props.step);
  };

  return (
    <div>
      <button className="custom-button" onClick={decrement}>
        -
      </button>
      <p>{counter}</p>
      <button className="custom-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CounterF;
