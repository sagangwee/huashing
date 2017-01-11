import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TestimonialCarousel = function (props) {
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <div class="home-testimonial" key={props.testimonial}>
          "{props.testimonial}"
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default TestimonialCarousel;
