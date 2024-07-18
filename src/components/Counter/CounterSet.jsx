import React, { useState } from "react";


const CounterSet = ({ handleSetClick }) => {
  const [enteredNumber, setEnteredNumber] = useState(0);
  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }
  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={()=>handleSetClick(enteredNumber)}>Set</button>
    </section>
  );
};

export default CounterSet;
