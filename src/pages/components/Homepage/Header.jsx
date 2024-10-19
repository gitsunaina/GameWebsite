import React, { useState } from 'react'
import Frame from "../../../../public/Images/bronze_frame.png";
import TimerSlider from "../../../../public/Images/timerSlider.png";
import Logo from "../../../../public/Images/logo.png";
import Hamburger from "../../../../public/Images/hamburger.png";
import Icon from "../../../../public/Images/icon.png";
import plus from "../../../../public/Images/PlusCircle.png";
import Image from 'next/image';

const MenuItem = ({ href, label }) => (
  <li>
    <a href={href} className="text-gray-700 text-[20px] font-semibold">
      {label}
    </a>
  </li>
);


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
   
  return (
    <header className="w-full py-[10px] lg:px-0 px-[10px]">
        <div className="mx-auto container">
          <div className="flex items-center justify-between">
            {/* Left Section: Frame and Timer */}
            <div className="md:flex hidden justify-between items-center gap-[45px]">
              <Image src={Frame} alt="Bronze frame" width={80} height={80} className="h-[80px] w-[80px]" />
              <div className='relative w-[198px] h-[61px]'>
                <Image src={TimerSlider} alt="Timer Slider" width={158} height={30} className="w-full" />
                <Image src={plus} alt='plus' width={47} height={47} className=' w-[39px] h-[39px] absolute top-[8px] right-0 cursor-pointer'/>
                <div className="gradient-text">0.00</div>
              </div>
            </div>

            {/* Center Logo */}
            <div className="md:flex">
              <Image src={Logo} alt="Ranolph" width={515} height={85} className="md:w-[300px] md:h-[85px] w-full h-[50px]" />
            </div>

            {/* Right Section: Icon and Hamburger */}
            <div className="flex gap-[26px]">
              <Image src={Icon} width={35} height={35} alt="icon" />
              <div onClick={handleMenuToggle} className="cursor-pointer">
                <Image src={Hamburger} alt="hamburger icon" width={35} height={35} />
              </div>
            </div>
          </div>

          {/* Mobile Menu (dropdown)*/}
          <div className={`absolute z-[99] right-0 w-full mx-auto left-0 mt-4 bg-[rgb(220,196,134)] p-4 rounded-lg shadow-lg md:hidden transition-all duration-500 ease-in-out 
            ${isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <ul className="flex flex-col font-medium mt-4 rounded-lg text-center gap-[20px]">
              <MenuItem href="#home" label="Home" />
              <MenuItem href="#games" label="Games" />
              <MenuItem href="#news" label="News" />
              <MenuItem href="#leaderboard" label="Leaderboard" />
              <MenuItem href="#community" label="Community" />
            </ul>
          </div>
        </div>
      </header>
  )
}

export default Header