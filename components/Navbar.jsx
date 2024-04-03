'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { navVariants } from "../motion/motion";

function Navbar() {
  const router = useRouter();



  const navigateToSection =  (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement.scrollIntoView({ behavior: 'smooth' });

 
    // if (window.location.pathname == `/${sectionId}`) {
    //   window.history.pushState({},'', `/`);
    // }
    router.push(`/?section=${sectionId}`, undefined, { shallow: true });

  }
    

  const svgVarient = {
    hidden: {
      opacity: 0,
      polygonLength: 0,
     
      
    },
    visible: {
      opacity: 1,
      polygonLength: 1,
      transition: {
        duration: 4,
        delay: 1,
        repeat: Infinity,
        repeatDelay :1,
        ease: "linear",
      }
    }
  }

  const [active, setActive] = useState("nav__menu");
  const [color, setColor] = useState(false);
  const [bg,setBg]=useState('nav_bg')
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (bg === "nav_bg") {
      setBg("nav_bg nav__activeb");
    } else setBg("nav_bg");


    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const menu = (
    <React.Fragment>
      <a href="/" className="flex HideForSm items-center gap-4 lg:ml-[80px] nav__brand">
          <motion.svg
            initial="hidden"
            animate="visible"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
             
              <title></title>
              <g id="Complete">
                
                <g id="align-right">
               
                  <g>
               
                    <motion.polygon
                      variants={svgVarient}
                      initial="hidden"
                      animate="visible"

                      fill="#ffffff"
                      points="19.9 18 11.1 18 11.1 18 19.9 18 19.9 18"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                    <motion.polygon
                      variants={svgVarient}
                      initial="hidden"
                      animate="visible"

                      fill="#ffffff"
                      points="20 14 4 14 4 14 20 14 20 14"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                    <motion.polygon
                      variants={svgVarient}
                      initial="hidden"
                      animate="visible"

                      fill="#ffffff"
                      points="19.9 10 11.1 10 11.1 10 19.9 10 19.9 10"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                    <motion.polygon
                      variants={svgVarient}
                      initial="hidden"
                      animate="visible"

                      fill="#ffffff"
                      points="20 6 4 6 4 6 20 6 20 6"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                  </g>
                </g>
              </g>
            </g>
          </motion.svg>
          <span className="lato text-[white]">ClearTouch Design</span>
        </a>
      <motion.li className=" group  transition-all duration-300 ease-in-out nav__item item">
        <a
          onClick={() => {
            navToggle();
            setColor(true);
            navigateToSection('hero');
          }}
          className={`${
            color === true
              ? "text-cyan-500   bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500     pb-3  md:pb-5       bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "text-white md:text-[#1e1e1e]"
          } nav__link`}
        >
          Home
        </a>
      </motion.li>

      <li className="group  transition-all duration-300 ease-in-out nav__item item nav__item">
        <a
          
          onClick={() => {
            navToggle();
            setColor("p");
            navigateToSection('platform');

          }}
          className={`${
            color === "p"
              ? "text-cyan-500            bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500     pb-3  md:pb-5       bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "text-white md:text-[#1e1e1e]"
          } nav__link`}
        >
          Platform
        </a>
      </li>
      <li className="group  transition-all duration-300 ease-in-out  nav__item">
        <a
        
          onClick={() => {
            navToggle();
            setColor("c");
            navigateToSection('company');

          }}
          className={`${
            color === "c"
              ? "text-cyan-500           bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500     pb-3  md:pb-5       bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "text-white md:text-[#1e1e1e]"
          } nav__link`}
        >
          Company
        </a>
      </li>
      <li className="group  transition-all duration-300 ease-in-out nav__item item">
        <a
          onClick={() => {
            navToggle();
            setColor("m");
            navigateToSection('marketing');

          }}
          className={`${
            color === "m"
              ? "text-cyan-500            bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500     pb-3  md:pb-5       bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "text-white md:text-[#1e1e1e]"
          } nav__link`}
        >
          Marketing
        </a>
      </li>
      <li className="group  transition-all duration-300 ease-in-out nav__item item">
        <a
        
          onClick={() => {
            navToggle();
            setColor("people");
            navigateToSection('people');

          }}
          className={`${
            color === "people"
              ? "text-cyan-500              bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500     pb-3  md:pb-5       bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "text-white md:text-[#1e1e1e]"
          } nav__link`}
        >
          People Say{" "}
        </a>
      </li>

      <li className="group  transition-all duration-300 ease-in-out nav__item item">
        <a
        
          onClick={() => {
            navToggle();
            setColor("faq");
            navigateToSection('faq');

          }}
          className={`${
            color === "faq"
              ? "text-cyan-500             bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500     pb-3  md:pb-5       bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "text-white md:text-[#1e1e1e]"
          } nav__link`}
        >
          FAQs{" "}
        </a>
      </li>
      <li className="group  transition-all duration-300 ease-in-out nav__item item">
        <a
        
          onClick={() => {
            navToggle();
            setColor("contact");
            navigateToSection('contact');

          }}
          className={`${
            color === "contact"
              ? "text-cyan-500              bg-left-bottom bg-gradient-to-t from-cyan-500 to-blue-500     pb-3  md:pb-5       bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "text-white md:text-[#1e1e1e]"
          } nav__link`}
        >
          Contact
        </a>
      </li>
    </React.Fragment>
  );

  return (
  
    <motion.nav  variants={navVariants} initial="hidden" whileInView="show" className="overflow-hidden  shadow-sm w-full py-12 px-6 lg:px-12 nav">
      <div className="flex w-full 2xl:w-[auto] md:justify-between 2xl:justify-center">
        <a href="#" className="flex items-center lg:ml-[80px] nav__brand">
          <motion.svg
            initial="hidden"
            animate="visible"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
             
              <title></title>
              <g id="Complete">
                
                <g id="align-right">
               
                  <g>
               
                    <motion.polygon
                      variants={svgVarient}
                      initial="hidden"
                      animate="visible"

                      fill="#ffffff"
                      points="19.9 18 11.1 18 11.1 18 19.9 18 19.9 18"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                    <motion.polygon
                      variants={svgVarient}
                      initial="hidden"
                      animate="visible"

                      fill="#ffffff"
                      points="20 14 4 14 4 14 20 14 20 14"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                    <motion.polygon
                      variants={svgVarient}
                      initial="hidden"
                      animate="visible"

                      fill="#ffffff"
                      points="19.9 10 11.1 10 11.1 10 19.9 10 19.9 10"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                    <motion.polygon
                      variants={svgVarient}
                      initial="hidden"
                      animate="visible"

                      fill="#ffffff"
                      points="20 6 4 6 4 6 20 6 20 6"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                  </g>
                </g>
              </g>
            </g>
          </motion.svg>
          <span className="tuoches">ClearTouch Design</span>
        </a>
    
        
      </div>
      <div className="">
        <div  className={icon==='nav__toggler'?` ${bg}  delay-300 `:`  ${bg}`}>
         
        
         </div> 
              <ul className={icon === 'nav__toggler' ? `transition duration-[300ms]   ${active}` : `transition duration-[1000ms]   delay-400  ${active}`}>{menu}
          </ul>
</div>
      <div className="contactMenu  hidden 2xl:flex items-center">
        <span className="call">Call  +44 7798 500 280 </span>
        <div className="straightLine mx-4"></div>
        <span className="mx-4 call">contact@cleartouch.design</span>
        <div className="straightLine "></div>

        <a href="https://wa.me/+447961267350">
          <button className="mx-4 btnh  py-4 px-4 outline-none focus:outline-none">
            Get Started
          </button>
        </a>
      </div>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
