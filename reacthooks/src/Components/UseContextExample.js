import React, { useState, createContext } from "react";
import Login from "./Login";
import Username from "./Username";

export const AppContext = createContext(null);
const UseContextExample = () => {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <Username />
    </AppContext.Provider>
  );
};

export default UseContextExample;
