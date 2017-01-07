import React from "react";
import ImageGallery from 'react-image-gallery';

export default class Home extends React.Component {
  render() {
    const images = [
      {
        original: require("./../../assets/carousel/acupuncture3_650.jpg"),
        description: 'Acupuncture'
      },
      {
        original: require("./../../assets/carousel/tcm2_650.jpg"),
        description: 'Traditional Chinese Medicine'
      }
    ]

    return (
      <div>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          autoPlay={true}
          showBullets={true}
          showFullscreenButton={false}
          showThumbnails={false}
          slideInterval={4000} />
        <div class="container">
        </div>
      </div>
    );
  }
}
