import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef("");
  function handleClick() {
    // To get Value
    console.log(inputRef.current.value);
    // To Focus
    // inputRef.current.focus();
    // To Clear
    // inputRef.current.value = "";
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UseRefExample;
