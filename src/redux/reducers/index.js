import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import mockedTodosReducer from "./mockedTodosReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  mockedTodos: mockedTodosReducer
});

export default rootReducer;
