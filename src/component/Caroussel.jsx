
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

const Caroussel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5300,
    slidesToShow: 3, // Number of slides visible on computer
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of slides visible on smartphone
        },
      },
    ],
  };

  return (
    <div>
      <h2>Carousel</h2>
      <Slider {...settings}>
        {/* Your carousel items */}
        <div>
          <h3>Item 1</h3>
        </div>
        <div>
          <h3>Item 2</h3>
        </div>
        <div>
          <h3>Item 3</h3>
        </div>
        <div>
          <h3>Item 4</h3>
        </div>
        <div>
          <h3>Item 5</h3>
        </div>
        <div>
          <h3>Item 6</h3>
        </div>
        <div>
          <h3>Item 7</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Caroussel;
