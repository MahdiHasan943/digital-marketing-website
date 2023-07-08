import React, { useState } from "react";
import "./navbar.css";
import { easeInOut, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

function Navbar() {

  const svgVarient = {
    hidden: {
      opacity: 0,
      polygonLength:0,
      
    },
    visible: {
      opacity: 1,
      polygonLength: 1,
      transition: {
        duration: 4,
        repeat:Infinity,
        ease:easeInOut
      }
    }
  }

  const [active, setActive] = useState("nav__menu");
  const [color, setColor] = useState(false);
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const menu = (
    <React.Fragment>
      <motion.li className=" group  transition-all duration-300 ease-in-out nav__item item">
        <a
          href="#hero"
          onClick={() => {
            navToggle();
            setColor(true);
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
          href="#platform"
          onClick={() => {
            navToggle();
            setColor("p");
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
          href="#company"
          onClick={() => {
            navToggle();
            setColor("c");
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
          href="#marketing"
          onClick={() => {
            navToggle();
            setColor("m");
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
          href="#people"
          onClick={() => {
            navToggle();
            setColor("people");
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
          href="#faq"
          onClick={() => {
            navToggle();
            setColor("faq");
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
          href="#contact"
          onClick={() => {
            navToggle();
            setColor("contact");
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
    <nav className="overflow-hidden  shadow-sm w-full py-12 px-6 lg:px-12 nav">
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

                      fill="#ffffff"
                      points="19.9 18 11.1 18 11.1 18 19.9 18 19.9 18"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                    <motion.polygon
                                             variants={svgVarient}

                      fill="#ffffff"
                      points="20 14 4 14 4 14 20 14 20 14"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                    <motion.polygon
                                             variants={svgVarient}

                      fill="#ffffff"
                      points="19.9 10 11.1 10 11.1 10 19.9 10 19.9 10"
                      stroke="#136cf2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></motion.polygon>
                    <motion.polygon
                                             variants={svgVarient}

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

        <ul className={`2xl:ml-[200px] ${active}`}>{menu}</ul>
      </div>
      <div className="contactMenu  hidden 2xl:flex items-center">
        <span className="call">Call +44 7961 267 350</span>
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
    </nav>
  );
}

export default Navbar;
