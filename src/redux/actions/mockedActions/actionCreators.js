import { fetchData } from "../../../service/mockedData";
import { ADD_MOCKED_TODOS, PAGE_NUMBER } from "./actionTypes";

export const fetchMockedTodos = () => async dispatch => {
  const mockedTodos = await fetchData();
  dispatch({
    type: ADD_MOCKED_TODOS,
    payload: mockedTodos
  });
};

export const pagination = pageNumber => ({
  type: PAGE_NUMBER,
  payload: {
    pageNumber
  }
});
