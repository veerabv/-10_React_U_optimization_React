import { useState } from "react";
import CounterSet from "./components/Counter/CounterSet.jsx";
import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetClick(enteredNumber) {
    console.log("trigger");
    setChosenCount(enteredNumber);
  }

  return (
    <>
      <Header />
      <main>
        <CounterSet handleSetClick={handleSetClick} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
