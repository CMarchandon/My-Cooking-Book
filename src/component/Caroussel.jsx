import React, { useRef } from 'react';
import Slider from 'react-slick';

const Caroussel = () => {
  const sliderRef = useRef(null);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {/* Your carousel items */}
        <div>
          <img src="public/assets/img/image 2.png"/>
          <div>
            <h3>Item 1</h3>
          </div>
        </div>
        <div>
        <img src="public/assets/img/image 2.png"/>
          <div>
            <h3>Item 2</h3>
          </div>
        </div>
        <div>
        <img src="public/assets/img/image 2.png"/>
          <div>
            <h3>Item 3</h3>
          </div>
        </div>
        <div>
        <img src="public/assets/img/image 2.png"/>
          <div>
            <h3>Item 4</h3>
          </div>
        </div>
        <div>
        <img src="public/assets/img/image 2.png"/>
          <div>
            <h3>Item 5</h3>
          </div>
        </div>
        <div>
        <img src="public/assets/img/image 2.png"/>
          <div>
            <h3>Item 6</h3>
          </div>
        </div>
        <div>
        <img src="public/assets/img/image 2.png"/>
          <div>
            <h3>Item 7</h3>
          </div>
        </div>
      </Slider>
      <button onClick={handlePrev}><img src="public/assets/icons/rigt arrow btn.svg"/></button>
      <button onClick={handleNext}><img src="public/assets/icons/rigt arrow btn.svg"/></button>
    </div>
  );
};

export default Caroussel;
