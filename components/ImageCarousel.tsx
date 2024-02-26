import React from 'react';
import { useKeenSlider } from 'keen-slider/react';

const ImageCarousel = ({ images }:any) => {
  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((url:string, index:number) => (
        <div key={index} className="keen-slider__slide">
          <img src={url} alt={`Image ${index}`} />
        </div>
      ))}
      {/* Add navigation arrows here */}
    </div>
  );
};

export default ImageCarousel;
