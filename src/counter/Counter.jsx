import React from "react";
import { incrementCounter, decrementCounter } from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";

function Counter() {
  
  const { dispatch } = React.useContext(AppContext)[1];

  const handleIncrement = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };

  const handleDecrement = () => {
    const action = decrementCounter(1);
    dispatch(action);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleIncrement}>INCREMENT</button>

      <button onClick={handleDecrement}>DECREMENT</button>
    </div>
  );
}

export default Counter;
