import React, { useMemo, useRef } from 'react'
import Cards from './Cards';
import Slider from 'react-slick';


const CorouselSection = () => {
    const settings = useMemo(() => ({
        dots: true,
        infinite: true,
        slidesToShow: 2.7, // Show 2 full cards and half of the third
        slidesToScroll: 1,
        arrows: false,
        // centerMode: false, // Ensure center mode is disabled
        responsive: [
          {
            breakpoint: 1024, // For medium to smaller screens
            settings: {
              slidesToShow: 2, // Show 1 full card and half of the next on smaller screens
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // For mobile screens
            settings: {
//               infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              // arrows: false,
              dots: true,
          },
          },
        ],
    }), []);

    const slider = useRef(null);
  return (
    <div className="relative h-full">
        <div className="lg:w-[100%] h-full lg:mx-auto">
          <Slider
            {...settings}
            ref={slider}
          >
<Cards />
<Cards />
<Cards />
<Cards />
<Cards />
          </Slider>
          </div>
          </div>
  )
}

export default CorouselSection