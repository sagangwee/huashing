import React from "react";
import ImageGallery from 'react-image-gallery';

export default class Home extends React.Component {
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
                {item.description}
                <div className='subheading'>{item.subHeading}</div>
              </div>
            </span>
        }
      </div>
    )
  }

  render() {
    const images = [
      {
        original: require("./../../assets/carousel/acupuncture-cc-650.jpg"),
        description: 'Acupuncture',
        subHeading: 'Healing & Wellness'
      },
      {
        original: require("./../../assets/carousel/tcm-cc-650.jpg"),
        description: 'Traditional Chinese Medicine'
      }
    ]

    return (
      <div>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          autoPlay={true}
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
      </div>
    );
  }
}
