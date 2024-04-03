'use client'
import React, { useRef } from "react";

import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsEnvelopeFill,
  BsExclamationCircleFill,
  BsXLg
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Popover } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion";
import { footerVariants } from "../motion/motion";

 motion
const Footer = () => {
 

  const navigateToSection = (sectionId) => {
    // Get the element by ID and scroll to it smoothly
    const sectionElement = document.getElementById(sectionId);
    sectionElement.scrollIntoView({ behavior: 'smooth' });

    // Update the URL without causing a full page reload
    router.push(`/?section=${sectionId}`, undefined, { shallow: true });
    ;
  };


  const modalClose = () => {
    toast.success('You have accepted our Privacy & Policy    ');
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_rx3twqw",
      "template_t6jzhuk",
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
    <Popover.Group className="relative">
      <motion.div  variants={footerVariants} initial="hidden" whileInView="show" className=" bg-[#053E94]  text-white pb-4 pt-8 px-4 sm:px-[60px]">
        <div className="flex justify-end items-center py-6  gap-4">
          <div className="bg-[#1877F2] rounded-md p-4">
            <a href="https://www.facebook.com/cleartouchdesign">
            <BsFacebook></BsFacebook>
           </a>
          </div>
          <div className="bg-[#1DA1F2] rounded-md p-4">
            <a href="https://twitter.com/cleartouchwhf">
            <BsTwitter></BsTwitter>
   </a>
          </div>

          <div className="bg-[#2867B2] rounded-md p-4">
            <a href="https://www.linkedin.com/company/cleartouch-design/">
            <BsLinkedin className=""></BsLinkedin>

           </a>
          </div>
          <div className="bg-[#F00073] rounded-md p-4">
            <a href="https://www.instagram.com/cleartouchltd/">
            <BsInstagram></BsInstagram>

            </a>
          </div>
        </div>

        <div className="w-full  h-[1px] bg-white"></div>
        <div className="text-center sm:text-start lg:flex  justify-between  mx-auto py-6 gap-4 ">
          <div className="">
            <p className="footerP">Reach us</p>
            <div className="flex justify-center sm:flex-none sm:justify-start">
              <div className="">
                <p className="pt-4 flex justify-center sm:justify-start items-center gap-4">
                  
                  <BsTelephone></BsTelephone> +44 7798 500 280 
                </p>
                <p className="py-4 flex justify-center sm:justify-start items-center gap-4">
                  
                  <BsEnvelopeFill></BsEnvelopeFill> contact@cleartouch.design
                </p>
                <p className="flex justify-center sm:justify-start items-center gap-4">
                  <CiLocationOn></CiLocationOn> 12 City Road,
                  London <br /> EC1V 2NX United Kingdom
                </p>
              </div>
            </div>
          </div>
          <div className="py-16 lg:py-0">
            <p className="footerP">Company</p>

            <p className="pt-4">
            
              <a   onClick={() => navigateToSection('company')}>About </a>{" "}
            </p>
            <p className="py-4">
           
              <a title="platform"  onClick={() => navigateToSection('platform')} className="">
                Contact
              </a>
            </p>
            <p>
           
              <a  onClick={() => navigateToSection('marketing')} className="">
                Our Services
              </a>
            </p>
          </div>
          <div className="">
            <p className="footerP">Legal</p>

            <Popover>
              <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">
              
                <p className="pt-4">Privacy Policy</p>
              </Popover.Button>

              <Popover.Panel className="absolute  top-[50%] lg:mt-[-200px] mx-auto Left left-[50%] w-full  sm:w-[auto] z-10 ">
                <div className="downloadBox h-[auto] w-[95%] py-12 px-12 mx-auto  sm:w-[600px]  rounded-lg">
                <div className="flex justify-between items-center">
                  <h3 className="DOWNLOAD pt-4 pb-12 flex items-center gap-10">
                  Privacy Policy

                    </h3>
                    <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">

                <BsXLg className="text-[gray] text-[25px]"></BsXLg>
              </Popover.Button>
               </div>
                  <p className="text-[#6A6A65] text-[13px] ">
                  At Cleartouch Design, we are committed to protecting the privacy and confidentiality of our clients and website visitors. This Privacy Policy outlines how we collect, use, and safeguard personal information and ensures compliance with industry standards.

                  <p></p><br></br>Information Collection: We collect personal information, such as names, email addresses, and contact details, only with the explicit consent of individuals.

This information is voluntarily provided through contact forms, newsletter subscriptions, or other means.

<p></p><br></br>Information Use: Personal information collected is used to communicate with clients and website visitors, deliver services, provide information about our products and promotions, and improve user experience. We do not sell, rent, or disclose personal information to third parties unless required by law.

<p></p><br></br>Data Security: We implement industry-standard security measures to protect personal information from unauthorized access, alteration, or disclosure. However, no data transmission over the internet can be entirely secure, and we cannot guarantee absolute security..{" "}
                  </p>

                  <div className="bg-[#F8F8F8] mt-8 px-8  py-8 text-end">
                    <div className="">
                      <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">
                      <button className="py-6 accept  text-black mt-2 sm:mt-0 bg-white px-8 rounded-lg shadow-xl">DECLINE</button>


                      </Popover.Button>
                      <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">

                      <button onClick={()=>{modalClose()}} className="py-6 accept text-white mt-2 sm:mt-0 bg-black ml-8 px-8 rounded-lg shadow-xl">ACCEPT</button>
                      </Popover.Button>

                    </div>

                  </div>

                  
                </div>
              </Popover.Panel>
            </Popover>

            {/* 2 */}
            <Popover>
              <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">
                <p className="py-4">Terms & Services</p>
              </Popover.Button>

              <Popover.Panel className="absolute  top-[50%] lg:mt-[-200px] mx-auto Left left-[50%] w-full  sm:w-[auto] z-10 ">
                <div className="downloadBox  w-[95%] py-12 px-12 mx-auto  sm:w-[600px]  rounded-lg">
                <div className="flex justify-between items-center">
                  <h3 className="DOWNLOAD pt-4 pb-12 flex items-center gap-10">
                  Terms & Services
                    </h3>
                    <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">

                <BsXLg className="text-[gray] text-[25px]"></BsXLg>
              </Popover.Button>
               </div>
                  <p className="text-[#6A6A65] text-[13px]">
                  Cleartouch Design offers digital marketing services to clients and operates under the following terms and services:

Service Provision: We provide digital marketing solutions, including but not limited to website design, search engine optimization (SEO), social media marketing, and content creation. <p></p><br></br>Our services are tailored to meet the unique needs of each client and are subject to specific agreements and contracts.

Payment Terms: Clients are responsible for timely payment of agreed-upon fees for services rendered. Payment terms, methods, and schedules are outlined in individual contracts or agreements.

Intellectual Property: <p></p><br></br>Cleartouch Design retains ownership of all intellectual property rights associated with the services provided, including website designs, content, and marketing materials. Clients are granted a non-exclusive license to use these materials for their intended purposes..{" "}
                  </p>            
              
                  
                </div>
              </Popover.Panel>
            </Popover>

            {/* 3 */}

            <Popover>
              <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">
                <p>Terms of Use</p>
              </Popover.Button>

              <Popover.Panel className="absolute  top-[50%] lg:mt-[-200px] mx-auto Left left-[50%] w-full  sm:w-[auto] z-10 ">
                <div className="downloadBox  w-[95%] py-12 px-12 mx-auto  sm:w-[600px]  rounded-lg">
                
                  <div className="flex justify-between items-center">
                  <h3 className="DOWNLOAD pt-4 pb-12 flex items-center gap-10">
                Terms of Use
                    </h3>
                    <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">

                <BsXLg className="text-[gray] text-[25px]"></BsXLg>
              </Popover.Button>
               </div>
                  <p className="text-[#6A6A65] text-[14px]">
                  By accessing and using the Cleartouch Design website, you agree to the following terms:

Website Content: The content on our website is for informational purposes only. We strive to provide accurate and up-to-date information, but we do not guarantee its completeness or accuracy. The content may be subject to change without notice.

<p></p><br></br>Third-Party Links: Our website may contain links to third-party websites for additional resources or convenience. Cleartouch Design does not endorse or assume responsibility for the content or privacy practices of these websites.

<p></p><br></br>Limitation of Liability: Cleartouch Design is not liable for any direct, indirect, or consequential damages arising from the use or inability to use our website or services. We are not responsible for any loss or damage to data, interruption of business, or any other economic loss resulting from the use of our services.

<p></p><br></br>By publishing this Privacy Policy, Terms and Services, and Terms of Use, Cleartouch Design aims to provide transparency, protect user privacy, and establish clear guidelines for engagement with our services.{" "}
                  </p>
                
                </div>
              </Popover.Panel>
            </Popover>
          </div>
     
            <div className="py-16 lg:py-0">
              <p className="footerP">Quick Links</p>

              <p className="pt-4">
                <a href="#faq" className="">
                  FAQs
                </a>
              </p>
              <Popover>
              <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">
                <p className="py-4">Downloads</p>

                
              </Popover.Button>
              <Popover.Panel className="absolute  top-[50%] lg:mt-[-200px] mx-auto Left left-[50%] w-full  sm:w-[auto] z-10 ">
              <div className="downloadBox h-[300px] w-[95%] py-12 px-12 mx-auto  sm:w-[600px]  rounded-lg">
                  <div className="flex justify-between items-center">
                  <div className=""><h3 className="DOWNLOAD pt-4 pb-12 flex items-center gap-10">
                  {" "}
                  <BsExclamationCircleFill className="text-[#6657d7]"></BsExclamationCircleFill>{" "}
                  <span className="text-[blue]">DOWNLOAD</span>
                    </h3></div>
                    <div className="">
                    <Popover.Button className="focus:border-none btn-border-none  outline-none focus:outline-none border-none">

                <BsXLg className="text-[gray] text-[25px]"></BsXLg>
              </Popover.Button>
                    </div>
                </div>
                <p className="text-[#6A6A65] ">Download our Case Study.</p>

                <div className="flex justify-end text-end h-full   mt-[-100px] items-end">
                  <button className="downBtn py-6  px-6 rounded-lg bg-[blue] focus:outline-none ">
                    DOWNLOAD
                  </button>
                </div>
              </div>
              </Popover.Panel>
              </Popover>

              <p>
                {" "}
                <a href="#people" className="">
                  Testimonials
                </a>{" "}
              </p>
            </div>

          
         
          <div className="">
            <div className="bg-[#383737] px-6  sm:px-10 py-10">
              <p className="Newsletter py-4 text-center">Join Our Newsletter</p>
              <form ref={form} onSubmit={sendEmail} className="flex py-4  mx-auto justify-center w-[100%] overflow-hidden">
                <input
                  type="email"
                  required
                  name="use_email"
                  placeholder="Your email address"
                  className=" w-full py-8 bg-[#1E1E1E]  input-bordered-none rounded-none input"
                />
                <input type="submit"  className="btnSubmit px-4 gm:px-0 gm:w-[100px] text-center  py-8 bg-[#000] focus-outline-none outline-none subscribe"/>
                
              </form>
              <p className=" text-center will">
                * Will send you weekly updates for your better tool <br />{" "}
                management.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center py-8 copy">
          @2023 ClearTouch Design | All Rights Reserved.
        </p>
      </motion.div>
      

      
      <Toaster />


    </Popover.Group>
  );
};

export default Footer;
