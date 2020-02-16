import React from "react";

//main components
import Button from "../Button";

//styles
import { Container, Content, Title } from "./styles";

const TodoCard = ({ title, content, onClick }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{content}</Content>
    <Button onClick={onClick}>remove</Button>
  </Container>
);

export default TodoCard;
