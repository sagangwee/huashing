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
              {item.description}
            </span>
        }
      </div>
    )
  }

  render() {
    const images = [
      {
        original: require("./../../assets/carousel/acupuncture-cc-650.png"),
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
          renderItem={this.renderItem}
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
