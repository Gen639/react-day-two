import React, { useState, useEffect } from "react";
const MensajeF = () => {
  const [name, setName] = useState("Euralio");

  useEffect(() => {
    setTimeout(() => {
      setName("Alfonsina");
    }, 3000);
  }, []);

  return (
    <div>
      <p>Hola {name}</p>
    </div>
  );
};
export default MensajeF;
