import React, { useState } from "react";


const CounterSet = ({ handleSetClick }) => {
  const [enteredNumber, setEnteredNumber] = useState(0);
  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }
  function onSet(enteredNumber){
    handleSetClick(enteredNumber);
    setEnteredNumber(0);
  }
  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={()=>onSet(enteredNumber)}>Set</button>
    </section>
  );
};

export default CounterSet;
