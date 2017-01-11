import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TestimonialCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    setTimeout( () => {
      this.updateTestimonial();
    }, 5000);
  }

  shouldComponentUpdate() {
    this.updateTestimonial();
    return true;
  }

  updateTestimonial() {
    if (this.state.currentIndex >= this.state.testimonials.length - 1) {
      this.setState({
        currentIndex: 0
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }

  render() {
    const {
      testimonials,
      currentIndex
    } = this.state;
    const testimonial = testimonials[currentIndex];

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="bounceInUp"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeave={false}>
          <div class="testimonial-carousel" key={testimonial}>
            "{testimonial}"
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
