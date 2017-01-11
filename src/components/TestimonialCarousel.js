import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TestimonialCarousel = function (props) {
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="bounceInUp"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeave={false}>
        <div class="home-testimonial" key={props.testimonial}>
          "{props.testimonial}"
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default TestimonialCarousel;
