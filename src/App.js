import React from "react";
import { Provider } from "react-redux";
import Board from "./views/Board";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
}

export default App;
