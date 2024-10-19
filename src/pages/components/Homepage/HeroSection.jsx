import Image from 'next/image';
import React from 'react';
import CategoriesContainer from "../../../../public/Images/categoriesContainer.png";
import allslot from "../../../../public/Images/allslot.png";
import favourite from "../../../../public/Images/favourite.png";
import slots from "../../../../public/Images/slots.png";
import fishing from "../../../../public/Images/fishing.png";
import banner from "../../../../public/Images/banner.png";
import box from "../../../../public/Images/box.png";
import CorouselSection from '../Corousel/CorouselSection';


const Icon = ({ src, alt, label, extraClasses = '', imageClasses }) => (
  <div className={`flex flex-col items-center cursor-pointer ${extraClasses}`}>
    <Image src={src} alt={alt} width={84} height={84} className={`object-contain ${imageClasses}`}  />
    {label && <p className="custom-text ">{label}</p>}
  </div>
);

const HeroSection = () => {
  return (
    <section className="w-full pb-[10px] pt-[20px] lg:px-0 px-[10px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between relative">
          {/* Left section with categories and banner */}
          <div className="flex w-full lg:w-[32%] gap-[31px] lg:gap-[58px]">
            <div className="relative flex">
              <Image
                src={CategoriesContainer}
                alt="categories"
                height={528}
                width={113}
                className="w-[113px] lg:h-[76vh] lg:object-cover h-full"
              />
              {/* Icon list */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center pb-[10px] pt-[6px] lg:pb-[10px]">
                <Icon src={allslot} alt="allslot" extraClasses="lg:h-[119px] h-[106px] w-full" imageClasses="h-full w-full" />
                <Icon src={favourite} alt="favourite" label="FAVOURITE" extraClasses="mt-[-21px] relative top-[14px] lg:top-0" imageClasses="h-[60px]" />
                <Icon src={slots} alt="slots" label="SLOTS" extraClasses="mt-[-12px] relative top-[15px] lg:top-0"  imageClasses="h-[60px]"/>
                <Icon src={fishing} alt="fishing" label="FISHING" extraClasses="mt-[-3px] relative lg:top-[-7px] top-[10px] lg:w-[84px] w-[70px]" imageClasses="h-[60px]" />
                <Icon src={box} alt="box" label="OTHER" extraClasses="mb-[10px] relative lg:top-[-15px] top-0" imageClasses="h-[60px]" />
              </div>
            </div>

            {/* Banner Image */}
            <div className="w-[251px] h-[100%]">
              <Image
                src={banner}
                alt="Banner"
                width={180}
                height={528}
                className="w-full lg:h-[76vh] object-contain"
              />
            </div>
          </div>

          {/* Right Section with Carousel */}
          <div className="w-full lg:w-[68%]">
            <CorouselSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
