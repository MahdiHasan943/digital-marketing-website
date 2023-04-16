import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="lg:px-12 px-6  pb-[130px]">
      <div className="xl:flex gap-6">
        {/* 1 */}
        <div className="xl:ml-[70px] w-full xl:w-[40%]">
          <h2 className="DigitalH2">Digital marketing agency</h2>
          <h1 className="workH1 text-[45px] leading-[40px] sm:leading-[84px] sm:text-[88px] py-6">
            Work with the 
            <span className="text-[#136CF2!important]">best Markers</span> for
             your business
          </h1>
          <p className="world-class py-8">
            World-class marketing freelancers and micro agencies <br />
            vetted based on proven results.
          </p>
          <div className="">
            <button className="bg-[#63cb99] text-white py-5 px-4">
              Get Started
            </button>
            <button className="mx-8 text-white bg-[#136CF2] py-5 px-7">
              Let's Talk
            </button>
          </div>
        </div>
        {/* 2 */}
        <div className="heroBg py-20 my-6 xl:my-0 px-10 sm:flex gap-8 w-full xl:w-[60%]">
          {/* 1  */}
          <div className="w-full sm:w-[25%]">
            <p className="talent">All Talents</p>
            <p className="text-[#F1F1F1] text-[18px] opacity-[0.7] ">
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry.
            </p>
          </div>
          {/* 2 */}
          <div className="w-full my-8 sm:my-0 sm:w-[75%]">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="">
                <div className="flex gap-4">
                  <div className="">
                    <img className="mx-auto" src="Frame.png" alt="" />
                    <p className="text-white text-[14px] px-2 rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">DESCRIPTION</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      Lorem Ipsum is simply dummy <br /> text of the printing and ty.
                    </p>
                  </div>
                </div>
                <div className="flex my-10 gap-4">
                  <div className="">
                    <img className="mx-auto" src="Frame.png" alt="" />
                    <p className="text-white text-center px-2 rounded-full text-[11px] py-[1.2px] mt-[5px] bg-[#F15756]">
                     UNAVAILABLE
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">DESCRIPTION</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      Lorem Ipsum is simply dummy <br /> text of the printing and ty.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="">
                    <img className="mx-auto" src="Avatar.png" alt="" />
                    <p className="text-white px-2 text-[14px] rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">DESCRIPTION</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      Lorem Ipsum is simply dummy <br /> text of the printing and ty.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 grid */}
              <div className="">
                <div className="flex my-10 md:my-0 gap-4">
                  <div className="">
                    <img className="mx-auto" src="Frame.png" alt="" />
                    <p className="text-white text-[14px] px-2 rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">DESCRIPTION</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      Lorem Ipsum is simply dummy <br /> text of the printing and ty.
                    </p>
                  </div>
                </div>
                <div className="flex my-10 gap-4">
                  <div className="">
                    <img className="mx-auto" src="Frame.png" alt="" />
                    <p className="text-white px-2 text-[14px] rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">DESCRIPTION</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      Lorem Ipsum is simply dummy <br /> text of the printing and ty.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="">
                    <img className="mx-auto" src="Avatar1.png" alt="" />
                   
                    <p className="text-white text-center px-2 rounded-full text-[11px] py-[1.2px] mt-[5px] bg-[#F15756]">
                    UNAVAILABLE                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">DESCRIPTION</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      Lorem Ipsum is simply dummy <br /> text of the printing and ty.
                    </p>
                  </div>
                </div>
              </div>
              

            </div>

            <p className="challange mt-24">
              The challenge of assessing marketers skills is real. ClearTouch
              <br /> Design you don't need to rely on reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
