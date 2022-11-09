import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutExample = () => {
  useEffect(() => {
    console.log("Coming from Use Effect");
  }, []);

  useLayoutEffect(() => {
    console.log(
      "Coming From Use LAyout Effect, This Will come before Use Effect"
    );
  }, []);
  return <div>UseLayoutExample</div>;
};

export default UseLayoutExample;
