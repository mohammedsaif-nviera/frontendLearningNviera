import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case "toggleShowText":
      return {
        count: state.count,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  showText: true,
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ border: "2px solid red", padding: "12px 2px" }}>
      UseReducerExample
      <br />
      Instead of modifying multiple useState Hook at a single place we use
      UseReducer Hook
      <br />
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      {state.showText && <p>ShowText is True</p>}
    </div>
  );
};

export default UseReducerExample;
