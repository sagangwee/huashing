import React from "react";

export default class Article extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div class="testimonial">
        <p>
          <em>"{text}"</em>
        </p>
      </div>
    );
  }
}
