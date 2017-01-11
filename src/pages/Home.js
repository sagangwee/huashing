import React from "react";
import ImageGallery from 'react-image-gallery';
import Button from "../components/Button";
import { Link } from "react-router";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      descriptionClasses: "fadeInLeft",
      subheadingClasses: "subheading fadeInRight"
    };
    this.handleSlide = this.handleSlide.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    const backgroundUrl = item.original;
    const itemStyle = {
      backgroundImage: "url(" + backgroundUrl + ")"
    }

    return (
      <div className='image-gallery-image'>
        <div style={itemStyle} />
        {
          item.description &&
            <span className='image-gallery-description'>
              <div className='image-gallery-description-inner'>
                <div className={this.state.descriptionClasses}>{item.description}</div>
                <div className={this.state.subheadingClasses}>{item.subHeading}</div>
              </div>
            </span>
        }
      </div>
    )
  }

  handleSlide(currentIndex) {
    if (currentIndex == 0) {
      this.setState({ 
        descriptionClasses: "",
        subheadingClasses: ""
      });
      setTimeout(() => {
        this.setState({ 
          descriptionClasses: "fadeInLeft",
          subheadingClasses: "subheading fadeInRight"
        });
      }, 1);
    } else {
      this.setState({ 
        descriptionClasses: ""
      });
      setTimeout(() => {
        this.setState({ 
          descriptionClasses: "fadeInRight"
        });
      }, 1);
    }
  }

  render() {
    const acupunctureSrc = "img/carousel/acupuncture-cc-650.jpg";
    const tcmSrc = "img/carousel/tcm-cc-650.jpg";
    const images = [
      {
        original: acupunctureSrc,
        description: 'Acupuncture',
        subHeading: 'Healing & Wellness'
      },
      {
        original: tcmSrc,
        description: 'Traditional Chinese Medicine'
      }
    ]

    const testimonials = [
      "I highly recommend Dr. Wang. She is professional and kind. She listens and adjusts her treatments to best treat the patient. You won't regret seeing Dr. Wang if you have an illness that acupuncture can treat!",
      "I have gone to Dr. Wang for the past 4 years. I tried other acupuncturists in the past, but none were as good as Hua Wang. Her fees are actually lower than many of the other acupuncturists I have gone to.",
      "Dr. Wang is an excellent practitioner, with a kind patient manner. She can also can mix herbs and perform cupping.",
      "Dr. Hua Wang is very kind and caring. She is an exceptional and knowledgeable acupuncturist. I highly recommend Dr. Hua Wang."
    ];

    return (
      <div>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          autoPlay={true}
          onSlide={this.handleSlide}
          renderItem={this.renderItem}
          showBullets={true}
          showFullscreenButton={false}
          showThumbnails={false}
          slideInterval={4000} />

        <section class="info-section">
          <h2>Acupuncture</h2>
          <p>
            Acupuncture techniques involve stimulating specific points on the body using thin, stainless steel needles.
            These acupuncture points are located along numerous channels or pathways, where energy or Qi circulates in the body. 
            Qi, thought to nourish internal organs and tissues, can alter neural impulses that travel through the body to elicit beneficial responses. 
            By stimulating acupuncture points with specific functions and indications, acupuncturists are able to promote and balance the flow of Qi, relieve pain, reduce stress and restore health. 
          </p>

          <h2>Traditional Chinese Medicine</h2>
          <p>
            Traditional Chinese Medicine (TCM) is rooted in the ancient philosophy of Taoism and dates back more than 2,500 years.
            Traditional Chinese Medicine encompasses many different practices, including acupuncture, moxibustion, Chinese herbal medicine, tui na, dietary therapy, tai chi and qigong.
            In the United States, some 10,000 practitioners serve more than 1 million patients each year.
          </p>

        </section>

        <section class="bio-section">
          <div class="bio-inner">
            <div class="huawang-wrapper">
              <h2>Meet the Expert</h2>
              <img src="img/huawang.jpg" class="huawang-home"/>
              <Link to="about" class="about-link">About Hua Wang</Link>
            </div>
            <div class="bio-summary">
              <p>Hua Wang is an expert in acupuncture and Traditional Chinese Medicine with over 20 years of experience. 
                 She specializes in pain and stress management, with a focus in neck, shoulder, and back pain.
              </p>
              <div class="bio-button-container"><Button to="treatments">See All Treatments</Button></div>
            </div>
          </div>
        </section>

        <section class="testimonials-section">
          <h1>What Patients Are Saying</h1>
          <TestimonialCarousel testimonials={testimonials} currentIndex={0}/>
        </section>

        <section class="appointment-section">
          <h1>Make an Appointment</h1>
          <div class="appointment-phone">
            <i class="fa fa-phone" aria-hidden="true"></i>
            (480) 951-5785
          </div>
          <div class="appointment-location">
            <div class="location">
              <h2> <a href="https://goo.gl/maps/DwMJ6Qn9e7M2">Location 1</a></h2>
              10630 N 71st PL <br/> 
              Suite 1 <br/>
              Scottsdale, Arizona 85254
            </div>
            <div class="location">
              <h2> <a href="https://goo.gl/maps/55zSiPzWUF62">Location 2</a> </h2>
              4425E Agave Rd <br/> 
              Suite 106 <br/>
              Phoenix, Arizona 85044 
            </div>
          </div>
        </section>

      </div>
    );
  }
}
