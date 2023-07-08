import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="lg:px-12 px-6 pt-20 pb-[200px]">
      <div className="xl:flex gap-6">
        {/* 1 */}
        <div className="xl:ml-[70px] w-full xl:w-[40%]">
          <h2 className="DigitalH2 py-4">Digital marketing agency</h2>
          <h1 className="workH1 text-[45px] leading-[40px] sm:leading-[84px] sm:text-[88px] py-20">
            Work with the <span className="text-[#136CF2!important]">best Marketers</span> for
             your business
          </h1>
          <p className="world-class py-20">
            World-class marketing freelancers and micro agencies <br />
            vetted based on proven results.
          </p>
          If you're interested in learning more about our digital marketing services 
              <p></p>or would like to schedule a consultation with our team, please don't hesitate <p></p> to contact us today.
          <div className=" py-20  text-start">
            <a href="#contact">
            <button className="ml-2 btGlow  sm:ml-0 bg-[#63cb99] shadow-lg rounded-lg text-white py-8 px-10">
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
        {/* 2 */}
        <div className="heroBg py-20 my-6 xl:my-0 px-10 sm:flex gap-8 w-full xl:w-[60%]">
          {/* 1  */}
          <div className="w-full sm:w-[25%]">
            <p className="talent pb-12">All Talents</p>
            <p className="text-[#F1F1F1] text-[18px] opacity-[0.7] ">
              Meet the great talent at ClearTouch Design <br /> looking to 
              take your project
              <br /> to the next level.
            </p>
          </div>
          {/* 2 */}
          <div className="w-full pt-12 my-8 sm:my-0 sm:w-[75%]">
            <div className="grid  grid-cols-1 sm:grid-cols-2">
              <div className="">
                <div className="flex gap-4 py-10">
                <div className="flex flex-col items-center gap-6 ">
                    <img className="w-[60px] h-[60px] rounded-full mx-auto" src="MatthiaOkala.png" alt="" />
                    <p className="text-white text-[14px] px-2 rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">Matthias Okala</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      Tap me to see that <br /> your Paid Ad yields the desired result with 100% ROI.
                    </p>
                  </div>
                </div>
                <div className="flex my-10 gap-4">
                <div className="flex flex-col items-center gap-6 ">
                    <img className="w-[60px] h-[60px] rounded-full mx-auto" src="Lee.png" alt="" />
                    <p className="text-white text-[14px] px-2 rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">Brandon Lee</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      I will look after you or your  <br /> business Web reputation online with  <br /> complete confidence.
                    </p>
                  </div>
                </div>
                <div className="flex py-10 gap-4">
                <div className="flex flex-col items-center gap-6 ">
                    <img className="w-[60px] h-[60px] rounded-full mx-auto" src="vectorAlerakja.png" alt="" />
                    <p className="text-white text-[14px] px-2 rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">Victor Akeze</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      I am here to look after all your <br /> visual appealing and creative needs from UI to Logo to Animations.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 grid */}
              <div className="">
                <div className="flex py-10 my-10 md:my-0 gap-4">
                <div className="flex flex-col items-center gap-6 ">
                    <img className="w-[60px] h-[60px] rounded-full mx-auto" src="Mahdi.png" alt="" />
                    <p className="text-white text-[14px] px-2 rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">Mahdi Hasan</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      Talk to me about developing <br /> the best website using most modern programming language.
                    </p>
                  </div>
                </div>
                <div className="flex my-10 gap-4">
                <div className="flex flex-col items-center gap-6 ">
                    <img className="w-[60px] h-[60px] rounded-full mx-auto" src="Mason.png" alt="" />
                    <p className="text-white text-[14px] px-2 rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">Mary Mason</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                     I am your contact to run your next Polical <br /> campaign by making you a Brand everyone talks about.
                    </p>
                  </div>
                </div>
                <div className="flex py-10 gap-4">
                <div className="flex flex-col items-center gap-6 ">
                    <img className="w-[60px] h-[60px] rounded-full mx-auto" src="Cohen.png" alt="" />
                    <p className="text-white text-[14px] px-2 rounded-full py-[1.2px] mt-[5px] bg-[#35CE6B]">
                      Available
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#F1F1F1] text-[17px]">Brenda Cohen</p>
                    <p className="text-[#F1F1F1] mt-4 text-[16px] opacity-[0.7]">
                      Social Media monitoring, <br /> listening and campaign execution is all I do and do very well.
                    </p>
                  </div>
                </div>
              </div>
              

            </div>

            <p className="challange  mt-24">
            The challenge of assessing marketers skills is real. At ClearTouch Design <br></br>you don't need to rely on reviews. <br /> 
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
