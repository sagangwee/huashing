import React from "react";
import ImageGallery from 'react-image-gallery';

export default class Home extends React.Component {
  render() {
    const images = [
      {
        original: require("./../../assets/carousel/acupuncture.jpg"),
        description: 'Optional description...'
      },
      {
        original: require("./../../assets/carousel/tcm.jpg"),
        description: 'Traditional Chinese Medicine'
      }
    ]

    return (
      <div>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          autoPlay={true}
          showFullscreenButton={false}
          showThumbnails={false}
          slideInterval={2000} />
        <div class="container">
        </div>
      </div>
    );
  }
}
