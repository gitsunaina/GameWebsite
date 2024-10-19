import Image from 'next/image'
import React from 'react'
import MobileGame from "../../../../public/Images/frame.png"

const Cards = () => {
  return (
    <div className=' lg:flex-col flex-row lg:gap-[20px] gap-0 items-center justify-center slider-container pl-[14px] lg:pl-0 '>
    <Image
     src={MobileGame}
     height={600}
     width={400}  
     className="w-full h-[250px] object-contain" 
     alt="Mobile Game"
     quality={100}
    />
    <Image
     src={MobileGame}
     height={600} 
     width={400}
     className="w-full h-[250px] object-contain secondImage" 
     alt="Mobile Game"
     quality={100}
    />
  </div>
  )
}

export default Cards