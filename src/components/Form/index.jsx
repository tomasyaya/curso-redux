import React from "react";
import { Form } from "./styles";

const TodoForm = ({ onSubmit, children, ...props }) => (
  <Form onSubmit={onSubmit} {...props}>
    {children}
  </Form>
);

export default TodoForm;
