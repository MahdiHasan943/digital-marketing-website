'use client'
import React from "react";
import CircleOne from "./CircleOne";
import CircleTwo from "./CircleTwo";


const Platform = () => {
  

  return (
    <div id="platform" className="platformBg pt-[100px]  xl:px-[70px]">
      <div className="py-4">
        <h2 className="OurProcessH2 text-[44px] leading-[60px] xl:text-[89px] xl:leading-[100px] text-center">
          Our process is <span className="text-[#017AFB]">the best</span> <br />{" "}
          growth solution
        </h2>

        <div className="lg:flex pt-[100px]  gap-6">
          {/* 1 row */}
          <div className="mx-auto lg:w-[30%]">
            <div className="grid py-10 px-9 shadows gap-4 grid-cols-2">
              <div className="">
                <p className="text-[#1F1F1E] font-semibold font-Poppins ">
                  Ongoing Projects
                </p>
                <p className="py-10">
                  <span className="text-[#136CF2]">18</span> of 30 work pieces{" "}
                </p>
                <span className="bg-[#EEEEEE] py-2 px-2 rounded-full">
                  12 left
                </span>
              </div>
              <div className="ml-[30px] flex items-center">
                <CircleOne/>
              </div>
            </div>
            {/* 2 */}
            <div className="mx-auto shadows mt-6">
              <div className="grid py-10 px-9 items-center  gap-4 grid-cols-2">
                <div className="">
                  <p className="text-[#1F1F1E] text-[23px] font-semibold font-Poppins ">
                    Monthly Activity
                  </p>
                  <p className="py-4 text-[50px] font-bold">20-30 </p>
                  <span>Current Workload</span>
                </div>
                <div className="ml-[30px]">
                  <img className="net " src="line.png" alt="" />
                </div>
              </div>
              <div className=" w-[90%] bg-[#E7E7E7]  mx-auto h-[1.5px]"></div>
              <div className="grid py-10 px-9 items-center gap-4 grid-cols-2">
                <div className="">
                  <p className="text-[#1F1F1E] text-[23px] font-semibold font-Poppins ">
                    Monthly Activity
                  </p>
                  <p className="py-4 text-[50px] font-bold">20-30 </p>
                  <span>Multi Channel Gigs</span>
                </div>
                <div className="ml-[30px]">
                  <div className="cropDesign">
                    <img className="net1 rounded-lg " src="box.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 row*/}
          <div className="lg:w-[40%]">
            <div className="relative mx-auto ">
              <div className="mb-[-30px]">
              <p className="text-center text-[35px] font-bold">On Target</p>
              <p className="text-center text-[20px] font-semibold">Score Today</p>
              </div>

              <div className="flex overflow-hidden justify-center">
                
            <CircleTwo/>
              </div>
                   {/* <img className="mt-[-500px] ml-[auto] mr-[80px] lg:hidden" src="PlatMan.png" alt="" /> */}
              <div className="flex  justify-center">
                <img
                  className=" mx-[auto]  mt-[-430px]"
                  src="RMMan.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* 3 row */}
          <div className="px-4 sm:px-0 lg:w-[30%]">
            <div className="px-12 py-10 mx-auto RShadows">
              <p className="customer">Customers Satisfaction</p>
              <p className="text-[60px]  my-14 font-bold">99%</p>
              <img className="my-14" src="RightLine.png" alt="RightLine" />
              <span>2021 vs 2022</span>
            </div>
            <div className="px-12 mt-5 py-10 mx-auto RShadows">
              <p className="customer">Our Customers</p>
              <p className="text-[60px]  my-14 font-bold">95%</p>
              <p className="">Returning Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
