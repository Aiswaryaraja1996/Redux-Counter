import { AppContext } from "./redux/AppContextProvider";
import "./App.css";
import React from "react";
import Counter from "./counter/Counter";

function App() {
  const { getState } = React.useContext(AppContext)[1];
  const { count } = getState();
  return (
    <div className="App">
      <h1>Counter</h1>
      <h4>{count}</h4>
      <Counter />
    </div>
  );
}

export default App;
