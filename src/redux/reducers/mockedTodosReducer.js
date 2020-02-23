import {
  ADD_MOCKED_TODOS,
  PAGE_NUMBER
} from "../actions/mockedActions/actionTypes";

const initialState = {
  mockedTodoList: [],
  pageNumber: 1
};

const mockedTodosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOCKED_TODOS:
      return {
        ...state,
        mockedTodoList: [...payload]
      };
    case PAGE_NUMBER:
      if (payload.pageNumber <= 0) {
        payload.pageNumber = 1;
      }
      if (payload.pageNumber >= 16) {
        payload.pageNumber = 16;
      }
      return {
        ...state,
        ...payload
      };
    default:
      return {
        ...state
      };
  }
};

export const paginationSelector = ({ pageNumber, mockedTodoList }) => {
  return mockedTodoList.slice((pageNumber - 1) * 12, pageNumber * 12);
};

export const completed = (mockedTodoList, condition) =>
  mockedTodoList.filter(mockedTodo => mockedTodo.completed === condition);

export default mockedTodosReducer;
