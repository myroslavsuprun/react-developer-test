import { Component } from 'react';

import {
  ActiveImage,
  SideImage,
  SideImagesList,
  ImagesList,
  ActiveImageWrapper,
} from './ProductImages.styled';

class ProductImages extends Component {
  state = {
    activeImageIndex: 0,
  };

  handleImageClick = index => {
    const { activeImageIndex } = this.state;

    if (index === activeImageIndex) {
      return;
    }

    this.setState(() => ({
      activeImageIndex: index,
    }));
  };

  render() {
    const { gallery, name } = this.props;
    const { activeImageIndex } = this.state;

    return (
      <ImagesList>
        <SideImagesList>
          {gallery.map((image, index) => {
            // Omitting active image

            return (
              <li
                onClick={() => {
                  this.handleImageClick(index);
                }}
                key={index}
              >
                <SideImage src={image} alt={name} />
              </li>
            );
          })}
        </SideImagesList>
        <ActiveImageWrapper>
          <ActiveImage src={gallery[activeImageIndex]} alt={name} />
        </ActiveImageWrapper>
      </ImagesList>
    );
  }
}

export default ProductImages;
