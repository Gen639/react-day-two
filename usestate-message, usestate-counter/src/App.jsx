import { useState } from "react";
import CounterF from "./components/counterF/CounterF";
import MensajeF from "./components/mensajeF/MensajeF";
import "./App.css";

function App() {
  return (
    <div>
      <MensajeF />
      <p> Puedes jugar con el contador :) </p>
      <CounterF initialValue={1} step={2} />
    </div>
  );
}

export default App;
