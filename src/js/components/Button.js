import React from "react";
import { Link } from "react-router";

const Button = function (props) {
  const { 
    children,
    to
  } = props;

  return (
    <Link to={ to } class="button">
      {children}
    </Link>
  );
};

export default Button;
