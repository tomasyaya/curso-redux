import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//main components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import TodoCard from "../../components/TodoCard";
import * as actionCreators from "../../redux/actions/todoActions/actionCreators";

//service
import { fetchData } from "../../service/mockedData";

//styles
import { Container, CardsContainer, Title } from "./styles";

const Board = ({ add, remove, todoList }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = event => {
    event.preventDefault();
    add(title, content);
    setTitle("");
    setContent("");
  };
  const displayCards = todoList.map(card => (
    <TodoCard
      key={card.id}
      buttonText="remove"
      onClick={() => remove(card.id)}
      {...card}
    />
  ));

  return (
    <Container>
      <Title>Todo List</Title>
      <CardsContainer>{displayCards}</CardsContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          value={title}
          type="text"
          placeholder="title"
          onChange={({ target }) => setTitle(target.value)}
        />
        <Input
          value={content}
          placeholder="content"
          type="text"
          onChange={({ target }) => setContent(target.value)}
        />
        <Button>create</Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => ({
  todoList: state.todos.todoList
});

const mapDispatchToProps = dispatch => ({
  add: (...args) => dispatch(actionCreators.addTodo(...args)),
  remove: id => dispatch(actionCreators.removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
