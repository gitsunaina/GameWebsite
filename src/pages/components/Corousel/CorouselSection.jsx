import React, { useMemo, useRef } from "react";
import Cards from "./Cards";
import Slider from "react-slick";

const CorouselSection = () => {
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      slidesToShow: 2.7,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    }),
    []
  );

  const slider = useRef(null);
  return (
    <div className="relative h-full">
      <div className="lg:w-[100%] h-full lg:mx-auto">
        <Slider {...settings} ref={slider}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Slider>
      </div>
    </div>
  );
};

export default CorouselSection;
