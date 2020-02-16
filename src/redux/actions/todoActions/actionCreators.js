import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

export const addTodo = (title, content) => ({
  type: ADD_TODO,
  payload: { title, content }
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
});
