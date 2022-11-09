import React, { useState } from "react";

const UseStateExample = () => {
  const [Increment, setIncrement] = useState(0);
  return (
    <div>
      {Increment}{" "}
      <button onClick={() => setIncrement(Increment + 1)}>Inccrement</button>
    </div>
  );
};

export default UseStateExample;
