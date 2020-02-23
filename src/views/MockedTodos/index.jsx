import React, { useEffect } from "react";
import { connect } from "react-redux";
//main components
import Grid from "../../components/Grid";
import TodoCard from "../../components/TodoCard";
import Button from "../../components/Button";
//redux
import {
  fetchMockedTodos,
  pagination
} from "../../redux/actions/mockedActions/actionCreators";
import {
  paginationSelector,
  completed
} from "../../redux/reducers/mockedTodosReducer";
//styles
import { Container, ButtonContainer } from "./styles";

const Mockedtodos = ({
  fetchMockedTodos,
  mockedTodos,
  pagination,
  pageNumber
}) => {
  useEffect(() => {
    fetchMockedTodos();
  }, [fetchMockedTodos]);
  const displayMockedTodos = mockedTodos.map(mockedTodo => (
    <TodoCard
      key={mockedTodo.id}
      title={mockedTodo.title}
      content="no content"
    />
  ));
  console.log(mockedTodos);
  return (
    <Container>
      <Grid>{displayMockedTodos}</Grid>
      <ButtonContainer>
        <Button onClick={() => pagination((pageNumber -= 1))}>{"<<"}</Button>
        <Button onClick={() => pagination((pageNumber += 1))}>{">>"}</Button>
      </ButtonContainer>
    </Container>
  );
};

const mapStateToProps = ({ mockedTodos }) => ({
  mockedTodos: completed(paginationSelector(mockedTodos), false),
  pageNumber: mockedTodos.pageNumber
});
export default connect(mapStateToProps, { fetchMockedTodos, pagination })(
  Mockedtodos
);
