import { ADD_TODO, REMOVE_TODO } from "../actions/todoActions/actionTypes";

const initialState = {
  todoList: []
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      const newTodo = {
        ...payload,
        id: Math.random() * 1000
      };
      return {
        ...state,
        todoList: [...state.todoList, newTodo]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: [...state.todoList].filter(todo => todo.id !== payload)
      };
    default:
      return {
        ...state
      };
  }
};

export default todoReducer;
