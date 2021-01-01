import React, { useState } from "react";
import Child from "./Child";
import CountContext from "./countContext";

function CounterReadWrite() {
  const [num, setNum] = useState(0);
  const up = () => {
    setNum(oldNum => oldNum + 1);
  };

  return (
    <CountContext.Provider value={{ num, up }}>
      <Child />
    </CountContext.Provider>
  );
}

export default CounterReadWrite;
