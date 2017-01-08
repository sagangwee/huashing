import React from "react";
import { Link } from "react-router";

export default class Button extends React.Component {
  render() {
    const { 
      text,
      to 
    } = this.props;
    return (
      <Link to={ to } class="button">
        {text}
      </Link>
    );
  }
}