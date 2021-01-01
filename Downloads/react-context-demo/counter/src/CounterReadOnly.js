import React, { useState } from "react";
import Child from "./Child";
import CounterContext from "./counterContext";

function CounterReadOnly() {
  const [num, setNum] = useState(0);
  const up = () => {
    setNum(oldNum => oldNum + 1);
  };

  return (
    <CounterContext.Provider value={num}>
      <button onClick={up}>+1 (from parent)</button>
      <Child />
    </CounterContext.Provider>
  );
}

export default CounterReadOnly;
