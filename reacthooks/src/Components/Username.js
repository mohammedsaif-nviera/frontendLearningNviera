import React, { useContext } from "react";
import { AppContext } from "./UseContextExample";

const Username = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      Username:
      <p>{username}</p>
    </div>
  );
};

export default Username;
