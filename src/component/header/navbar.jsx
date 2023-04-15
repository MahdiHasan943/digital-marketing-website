import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
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
      <li className=" nav__item item">
        <a href="#hero"
          className=" nav__link focus:text-[#738f2d]">
          Home
        </a>
      </li>
      <li className="nav__item">
        <a href="#platform" className="nav__link focus:text-[#738f2d]">
          Platform
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link focus:text-[#738f2d]">
          Company
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link focus:text-[#738f2d]">
          Marketing
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link focus:text-[#738f2d]">
          People Say{" "}
        </a>
      </li>

      <li className="nav__item">
        <a href="#" className="nav__link focus:text-[#738f2d]">
          FAQs{" "}
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link focus:text-[#738f2d]">
          Contact{" "}
        </a>
      </li>
    </React.Fragment>
  );

  return (
    <nav className="overflow-hidden  shadow-sm w-full py-8 px-6 lg:px-12 nav">
      <div className="flex w-full 2xl:w-[auto] md:justify-between 2xl:justify-center">
      <a href="#" className="lg:ml-[80px] nav__brand">
        ClearTouch Design{" "}
      </a>

      <ul className={`2xl:ml-[200px] ${active}`}>{menu}</ul>
   </div>
      <div className="contactMenu  hidden 2xl:flex items-center">
        <span className="call">Call +44 7798 500 280</span>
        <div className="straightLine mx-4"></div>
        <span className="mx-4 call">info@cleartouchdesign.com</span>
        <div className="straightLine "></div>

        <button className="mx-4 btnh  py-4 px-4 outline-none focus:outline-none">
          Get Started
        </button>
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
