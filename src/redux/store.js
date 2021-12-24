import { createStore } from "redux";
import { reducer } from "./reducer";
import { incrementCounter } from "./action";

const initState = {
  count: 0,
};

export const store = createStore(
  reducer,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("State have changed", store.getState());
});

const action = incrementCounter(0);


