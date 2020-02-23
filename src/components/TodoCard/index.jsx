import React from "react";

//main components
import Button from "../Button";

//styles
import { Container, Content, Title } from "./styles";

const TodoCard = ({ title, content, onClick, buttonText }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{content}</Content>
    {onClick && <Button onClick={onClick}>{buttonText}</Button>}
  </Container>
);

export default TodoCard;
