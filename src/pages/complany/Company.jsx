import React from "react";
import "./company.css";

const Company = () => {
  return (
    <div id="company" className="px-8 py-24 lg:px-[70px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="pt-[140px]">
          <h2 className="WeAreProudly text-[44px] xl:text-[89px]">
            We are proudly <br /> leading the way in <br />
            <span className="text-[#0075FF]">Digital Agency</span> <br />
            through combining <br /> human skills with <br /> AI.
          </h2>
          <p className="Skip py-24">
            Skip the big promises and <span className="text-[#0075FF]">Hire</span> <br /> marketing experts at ClearTouch <br />
            Design <span className="text-[#0075FF]">based on data.</span>
          </p>
          <div className=" py-20  text-start">
            <a href="#contact">
            <button  className="ml-2 btGlow  sm:ml-0 bg-[#63cb99] shadow-lg rounded-lg text-white py-8 px-10">
              Get Started
            </button>
          </a>
            <a href="https://wa.me/+447961267350">

            <button className="ml-2 btGlow mt-2 sm:mt-0 sm:mx-8 text-white shadow-lg rounded-lg bg-[#136CF2] py-8 px-14">
              Let's Talk
              </button>
              </a>
          </div>
        </div>
        <div className="">

          <div className="flex justify-end">
            <img src="WomenBulb.png" alt="" />
          </div>
          <div className="">
            <img className="mt-[20px] sm:mt-[-110px]" src="WomenChatting.png" alt="" />
          </div>
          <div className="flex mt-[20px] sm:mt-[-240px] justify-end">
            <img src="ManLaptop.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
