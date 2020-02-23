import React from "react";
import { Route, Switch } from "react-router-dom";
//main components
import Board from "./views/Board";
import MockedTodos from "./views/MockedTodos";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Board />} />
      <Route exact path="/grid" render={() => <MockedTodos />} />
    </Switch>
  );
}

export default App;
