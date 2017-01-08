import React from "react";

export default class Testimonial extends React.Component {
  render() {
    const { text } = this.props;
    const { reviewer } = this.props;

    return (
      <div class="testimonial">
        <p>
          <em>"{text}"</em>
          <div class="reviewer">
            <strong>— { reviewer }</strong>
          </div>
        </p>
      </div>
    );
  }
}
