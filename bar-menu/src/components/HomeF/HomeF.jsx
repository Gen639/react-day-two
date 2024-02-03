import React from "react";
import "./HomeF.css";

const HomeF = (props) => {
  return (
    <div className="home-f-card">
      <h2>{props.plateName}</h2>
      <p>{props.plateDescription}</p>
      <p>Price: {props.platePrice} EUR</p>
    </div>
  );
};

export default HomeF;
