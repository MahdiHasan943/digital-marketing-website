import React from "react";
import "./contact.css";
import {BsTelephone, BsEnvelopeFill, } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

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
      <div className="px-8 lg:flex   gap-20 lg:px-[60px] py-20">
        {/* 1 flex */}
        <div className="lg:w-[30%]">
          <div className="bg-[#383737] py-20 px-10 rounded-lg">
            <div className=" pb-20">
            <h3 className="information">Contact Information</h3>
            <p className="text-white">Say something to start a live chat!</p>
            </div>
          <div className="">
            <p className='pt-4 flex text-white items-center gap-4'> <BsTelephone className="text-white"></BsTelephone> +1012 3456 789</p>
          <p className='py-20 flex items-center text-white gap-4'> <BsEnvelopeFill className="text-white"></BsEnvelopeFill>  demo@gmail.com</p>
          <p className='flex text-white items-center gap-4'><CiLocationOn className="text-white"></CiLocationOn>   132 Dartmouth Street Boston, <br />  Massachusetts  02156 United States</p>

            </div>
            <img src="circle.jpg" alt="" />
         </div>
        </div>
        {/* 2 flex */}
        <div className="py-10 lg:py-0 lg:w-[70%]">
          <form>
          <div className="grid grid-cols-2 gap-20">
            
              <div className="w-full">
                <input type="text" placeholder="First Name"
                 className="placeholder:text-[#A4A4A4] border-b-[2px] focus:border-none  py-5 px-20 w-full border-[#A4A4A4] bg-white" />
              </div>
              <div className="w-full">
                <input type="text" placeholder="Last Name"
                 className="placeholder:text-[#A4A4A4] border-b-[2px] focus:border-none  py-5 px-20 w-full border-[#A4A4A4] bg-white" />
              </div>
              <div className="w-full">
                <input type="text" placeholder="Email"
                 className="placeholder:text-[#A4A4A4] border-b-[2px] focus:border-none  py-5 px-20 w-full border-[#A4A4A4] bg-white" />
              </div>
              <div className="w-full">
                <input type="text" placeholder="Phone Number"
                 className="placeholder:text-[#A4A4A4] border-b-[2px] focus:border-none  py-5 px-20 w-full border-[#A4A4A4] bg-white" />
              </div>
            </div>
            <p className="subscribe pb-12 pt-20">Select Subject?</p>
            <div className="grid grid-cols-2 sm:grid-cols-6">
              <div className="flex gap-8">
              <input name="radio-10" type="radio"  className="radio bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000]" />
 
                <p className="font-semibold ">
                Political <br /> Marketing
                </p>
              </div>
              {/* 2 */}
              <div className="flex gap-8">
              <input name="radio-10"type="radio"  className="radio bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000]" />
 
                <p className="font-semibold ">
                Web <br /> Development                </p>
              </div> 
              {/* 3 */}
              <div className="flex gap-8">
              <input name="radio-10" type="radio"  className="radio bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000]" />
 
                <p className="font-semibold ">
                Social Media <br /> Marketing                </p>
              </div>
              {/* 4 */}
              <div className="flex gap-8">
              <input name="radio-10" type="radio"  className="radio bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000]" />
 
                <p className="font-semibold ">
                Paid <br /> Advertising                </p>
              </div>
              {/* 5 */}
              <div className="flex gap-8">
              <input name="radio-10" type="radio"  className="radio bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000]" />
 
                <p className="font-semibold ">
                Web <br /> Reputation                </p>
              </div>
              {/* 6 */}
              <div className="flex gap-8">
              <input name="radio-10" type="radio"  className="radio bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000]" />
 
                <p className="font-semibold ">
                UI/UX Design                </p>
             </div>

            </div>
            <div className="py-20">
              <textarea placeholder="Write  your message.." className="bg-white w-[70%] h-[50px] focus:border-none border-b-[2px]" name="" id="" cols="" rows="10"></textarea>
            </div>
            <div className="flex w-[70%] justify-end">
            <img src="sign.png" alt="" />

            </div>
           </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
