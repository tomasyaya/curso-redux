import React from "react";

import { Button } from "./styles";

const CustomButtom = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default CustomButtom;
