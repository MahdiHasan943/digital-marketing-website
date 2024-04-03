'use client'
import React, { useRef, useState } from "react";
import {BsTelephone, BsEnvelopeFill, } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [select, setSelect] = useState();

 const radioSelect = event => {
  //  console.log(event.target.value);
   setSelect(event.target.value)
  }
  console.log(select);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_rx3twqw",
      "template_utxrjhs",
        form.current,
        "ioz5KZgUQ3Y4XM_fQ"  
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          toast.success('Successfully submitted form');

        },
        (error) => {
          console.log(error.text);
        }
      );
  };


 


  return (
    <div  className="cursor-[pointer]">

      <div className="px-4 lg:flex pt-20 pb-10 w-full lg:w-[80%] mx-auto justify-center gap-6 ">
      <div className="gm:flex gap-8  shadow-lg w-full mx-auto py-20 px-10">
          <div className="">
            <img className="w-full h-full" src="VictorAkezeProfile.jpg" alt="" />
          </div>
          <div className="px-8 pt-8">
            <p className="text-[#136CF2] font-semibold">Founder Quote</p>
            <h3 className="Wonder py-4">
              “Unlock the possibilities <br /> and seize the moment <br /> at all times.”
            </h3>
            <p className="text-[#191919] pb-2 font-semibold">Victor Akeze</p>
            <span>Co-Founder</span>
          </div>
        </div>
        {/* 2 */}
        <div className="gm:flex gap-8  shadow-lg w-full mx-auto py-20 px-10">
          <div className="">
            <img className="w-full h-full" src="VictorAkezeProfile.jpg" alt="" />
          </div>
          <div className="px-8 pt-8">
            <p className="text-[#136CF2] font-semibold">Founder Quote</p>
            <h3 className="Wonder py-4">
              “Unlock the possibilities <br /> and seize the moment <br /> at all times.”
            </h3>
            <p className="text-[#191919] pb-2 font-semibold">Victor Akeze</p>
            <span>Co-Founder</span>
          </div>
        </div>
      </div>

      {/* 2 section */}
      <h2 id="contact" className="Make text-[44px] leading-[60px] xl:text-[89px] xl:leading-[100px] px-4  pt-20 pb-4 text-center">
        Make <span className="text-[#136CF2]"> contact</span>
      </h2>
      <p className="text-center px-4">
        Any question or remarks? Just write us a message!
      </p>
      <div className="px-4 lg:flex   gap-20 lg:px-[60px] py-20">
        {/* 1 flex */}
        <div className="lg:w-[30%]">
          <div className="bg-[#383737] py-20 px-10 rounded-lg">
            <div className=" pb-20">
            <h3 className="information">Contact Information</h3>
            <p className="text-white">Say something to start a live chat!</p>
            </div>
          <div className="">
            <p className='pt-4 flex text-white items-center gap-4'> <BsTelephone className="text-white"></BsTelephone>  +44 7798 500 280 </p>
          <p className='py-20 flex items-center text-white gap-4'> <BsEnvelopeFill className="text-white"></BsEnvelopeFill>  contact@cleartouch.design</p>
          <p className='flex text-white items-center gap-4'><CiLocationOn className="text-white"></CiLocationOn>   Address  128 City Road <br />  London , EC1V 2NX, United Kingdom</p>

            </div>
            <img src="circle.jpg" alt="" />
         </div>
        </div>
        {/* 2 flex */}
        <div className="py-10 lg:py-0 lg:w-[70%]">
          <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-20">
            
              <div className="w-full">
                <input name="user_name" type="text" placeholder="First Name"
                 className="placeholder:text-[#A4A4A4] border-b-[2px] focus:border-none  py-5 sm:px-10 w-full border-[#A4A4A4] bg-white" />
              </div>
              <div className="w-full">
                <input name="user_name" type="text" placeholder="Last Name"
                 className="placeholder:text-[#A4A4A4] border-b-[2px] focus:border-none  py-5 sm:px-10 w-full border-[#A4A4A4] bg-white" />
              </div>
              <div className="w-full">
                <input name="user_email" type="text" placeholder="Email"
                 className="placeholder:text-[#A4A4A4] border-b-[2px] focus:border-none  py-5 sm:px-10 w-full border-[#A4A4A4] bg-white" />
              </div>
              <div className="w-full">
                <input name="phone"  type="text" placeholder="Phone Number"
                 className="placeholder:text-[#A4A4A4] border-b-[2px] focus:border-none  py-5 sm:px-10 w-full border-[#A4A4A4] bg-white" />
              </div>
            </div>
            <p className="subscribe pb-12 pt-20">   Subject?</p>
            <div className="grid grid-cols-2 sm:grid-cols-6">
              <div className="flex items-center gap-8">
              <input name={`select`} value=" Political  Marketing" onChange={radioSelect}  type="checkbox"  className="radio py-3 px-3 bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000] checked:border-black" />
 
                <p className="font-semibold ">
                Political <br /> Marketing
                </p>
              </div>
              {/* 2 */}
              <div className="flex items-center gap-8">
              <input name={`select`} type="checkbox" value={' Web  Development '} onChange={radioSelect}  className="radio py-3 px-3 bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000] checked:border-black" />
 
                <p className="font-semibold ">
                Web <br /> Development                </p>
              </div> 
              {/* 3 */}
              <div className="flex items-center gap-8">
              <input onChange={radioSelect}  value=" Social Media Marketing " name={`select`} type="checkbox"  className="radio py-3 px-3 bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000] checked:border-black" />
 
                <p className="font-semibold ">
                Social Media <br /> Marketing                </p>
              </div>
              {/* 4 */}
              <div className="flex items-center gap-8">
              <input onChange={radioSelect} value="PaidAdvertising" name={`select`} type="checkbox"  className="radio py-3 px-3 bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000] checked:border-black "/>
 
                <p className="font-semibold ">
                Paid <br /> Advertising                </p>
              </div>
              {/* 5 */}
              <div className="flex items-center gap-8">
              <input onChange={radioSelect}  value=" Web Reputation  "  name={`select`}type="checkbox"  className="radio py-3 px-3 bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000] checked:border-black" />
 
                <p className="font-semibold ">
                Web <br /> Reputation                </p>
              </div>
              {/* 6 */}
              <div className="flex items-center gap-8">
              <input value="UI/UX Design  " onChange={radioSelect}   name={`select`} type="checkbox"  className="py-3 px-3 radio bg-[#A4A4A4] border-[#CFF37D] checked:bg-[#000] checked:border-black" />
 
                <p className="font-semibold ">
                UI/UX Design                </p>
             </div>

            </div>
            <div className="py-20">
              <textarea name="message" placeholder="Write  your message.." className="bg-white w-[70%] h-[50px] focus:border-none border-b-[2px]"  id="" cols="" rows="10"></textarea>
            </div>
            <div className="flex w-[70%]  justify-end">
              <button type="submit">
              <img  className="mt-[-40px]"  src="sign.png" alt="" />

              </button>
              
            </div>
           </form>

        </div>
      </div>
      <Toaster />

    </div>
  );
};

export default Contact;
