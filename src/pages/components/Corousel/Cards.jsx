import Image from 'next/image'
import React from 'react'
import MobileGame from "../../../../public/Images/frame.png"

const Cards = () => {
  return (
    <div className=' lg:flex-col flex-row lg:gap-[20px] gap-0 items-center justify-center slider-container pl-[14px] lg:pl-0 '>
    <Image
     src={MobileGame}
     height={600} // Use a higher resolution
     width={400}  // Use a width that matches the image ratio
     className="w-full h-[250px] object-contain" // Use object-cover to fill the space properly
     alt="Mobile Game 1"
     quality={100} // Ensure high quality images
    />
    <Image
     src={MobileGame}
     height={600} // Use a higher resolution
     width={400}  // Use a width that matches the image ratio
     className="w-full h-[250px] object-contain secondImage" // Use object-cover to fill the space properly
     alt="Mobile Game 1"
     quality={100} // Ensure high quality images
    />
  </div>
  )
}

export default Cards