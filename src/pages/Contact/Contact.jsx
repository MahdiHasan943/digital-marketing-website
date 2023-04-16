import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="cursor-[pointer]">
      {/* 1 section */}

      <div className="lg:flex w-full lg:w-[80%] mx-auto justify-center gap-6 ">
        <div className="flex gap-8  shadow-lg w-full mx-auto py-20 px-10">
          <div className="">
            <img className="h-full" src="ContactImage.png" alt="" />
          </div>
          <div className="px-8 pt-8">
            <p className="text-[#136CF2] font-semibold">Founder Quote</p>
            <h3 className="Wonder py-4">
              “Wonder What Your <br /> Customer Really <br /> Wants? Ask. Don’t
              Tell.”
            </h3>
            <p className="text-[#191919] pb-2 font-semibold">Lisa Stone</p>
            <span>Co-Founder</span>
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-8  shadow-lg w-full mx-auto py-20 px-10">
          <div className="">
            <img className="h-full" src="ContactImage.png" alt="" />
          </div>
          <div className="px-8 pt-8">
            <p className="text-[#136CF2] font-semibold">Founder Quote</p>
            <h3 className="Wonder py-4">
              “Wonder What Your <br /> Customer Really <br /> Wants? Ask. Don’t
              Tell.”
            </h3>
            <p className="text-[#191919] pb-2 font-semibold">Lisa Stone</p>
            <span>Co-Founder</span>
          </div>
        </div>
      </div>

      {/* 2 section */}
      <h2 className="Make pt-20 pb-4 text-center">
        Make <span className="text-[#136CF2]"> contact</span>
      </h2>
      <p className="text-center">
        Any question or remarks? Just write us a message!
      </p>
      <div className="px-8 lg:flex  gap-20 lg:px-[60px] py-20">
        {/* 1 flex */}
        <div className="">
1
        </div>
        {/* 2 flex */}
        <div className="">
2
        </div>
      </div>
    </div>
  );
};

export default Contact;
