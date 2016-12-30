import React from "react";

export default class Address extends React.Component {
  render() {
    const { name } = this.props;
    const { street } = this.props;
    const { number } = this.props;
    const { cityStateZip } = this.props;

    return (
      <div>
        <span> { name } </span>
        <span> { street } </span>
        <span> { number } </span>
        <span> { cityStateZip } </span>
      </div>
    );
  }
}
