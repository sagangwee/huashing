import React from "react";

export default class Address extends React.Component {
  render() {
    const { name } = this.props;
    const { street } = this.props;
    const { number } = this.props;
    const { cityStateZip } = this.props;

    return (
      <div>
        <span> { name } </span><br/>
        <span> { street } </span><br/>
        <span> { number } </span><br/>
        <span> { cityStateZip } </span>
      </div>
    );
  }
}
