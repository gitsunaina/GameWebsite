import Image from 'next/image'
import React from 'react'
import CategoriesContainer from "../../../../public/Images/categoriesContainer.png";
import allslot from "../../../../public/Images/allslot.png";
import favourite from "../../../../public/Images/favourite.png";
import slots from "../../../../public/Images/slots.png";
import fishing from "../../../../public/Images/fishing.png";
import banner from "../../../../public/Images/banner.png";
import box from "../../../../public/Images/box.png";
import CorouselSection from '../Corousel/CorouselSection';

const HeroSection = () => {
  return (
    <section className='w-full pb-[10px] pt-[20px] lg:px-0 px-[10px]'>
    <div className='mx-auto container'>
      <div className='flex flex-wrap justify-between relative'>
        <div className='flex w-full lg:w-[32%] lg:gap-[58px] gap-[31px]'>
           <div className='relative flex'>
             
             <Image src={CategoriesContainer} alt="categories" height={528} width={113}  className='w-[113px] lg:h-[76vh] lg:object-cover h--webkit-fill-available'/>
            
             {/* Icon List */}
           <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center pb-[10px] pt-[6px] lg:pb-[10px]'>
             {/* allslot Icon */}
             <div className='flex flex-col items-center cursor-pointer lg:h-[119px] h-[106px] w-full'>
               <Image src={allslot} alt='allslot' width={84} height={84} className='h-full w-full object-contain' />
               {/* <p className="custom-text">ALL SLOTS</p> */}
             </div>

             {/* favourite Icon */}
             <div className='flex flex-col items-center cursor-pointer mt-[-21px]'>
               <Image src={favourite} alt='favourite' width={84} height={84} className='h-[60px] object-contain' />
               <p className="custom-text ">FAVOURITE</p>
             </div>

             {/* slots Icon */}
             <div className='flex flex-col items-center cursor-pointer mt-[-12px]'>
               <Image src={slots} alt='slots' width={84} height={84} className='h-[60px] object-contain' />
               <p className="custom-text">SLOTS</p>
             </div>

             {/* fishing Icon */}
             <div className='flex flex-col items-center cursor-pointer mt-[-3px] relative top-[-7px]'>
               <Image src={fishing} alt='fishing' width={84} height={84} className='h-[60px] w-[70px] lg:w-[84px] object-contain' />
               <p className="custom-text">FISHING</p>
             </div>

             {/* box Icon */}
             <div className='flex flex-col items-center cursor-pointer mb-[10px] relative top-[-15px]'>
               <Image src={box} alt='box' width={84} height={84} className='h-[60px] object-contain' />
               <p className="custom-text">OTHER</p>
             </div>
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
  )
}

export default HeroSection