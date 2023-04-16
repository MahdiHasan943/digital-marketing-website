import React from "react";
import "./marketing.css";

const Marketing = () => {
  return (
    <div id="marketing" className="px-8 lg:px-[60px]">
      <h1 className="Choose pt-20 text-[50px] text-center leading-[40px]  lg:leading-[84px] lg:text-[88px]">
        Choose <span className="text-[#136CF2] ">your next</span> <br />
        growth project
      </h1>
      <p className="ready text-center leading-[40px] lg:leading-[80px] my-10">
        We have the most sort out marketing{" "}
        <span className="text-[#136CF2]">solution ready</span> to deploy for
        your business
      </p>

      <div className="sm:flex w-full lg:w-[60%] mx-auto justify-center gap-6 ">
        <div className="bgBlack w-full mx-auto py-20 px-10">
          <h1 className="text-white pb-10 font-bold">
            Social Media Monitoring
          </h1>
          <p className="text-white opacity-[0.8]">
            Effective social media management can make or break a brand's
            online presence. Our social media monitoring  services enable
            businesses to keep their finger on the pulse of what their
            customers are saying about them on platforms such as
            Facebook, Twitter, and Instagram.
          </p>
        </div>
        <div className="bgBlack mt-10 sm:mt-0 w-full mx-auto py-20 px-10">
          <h1 className="text-white pb-10 font-bold">
            Social Media Monitoring
          </h1>
          <p className="text-white opacity-[0.8]">
            Effective social media management can make or break  a brand's
            online presence. Our social media monitoring  services enable
            businesses to keep their finger on the  pulse of what their
            customers are saying about them  on platforms such as
            Facebook, Twitter, and Instagram.
          </p>
        </div>
      </div>
      <div className="  lg:flex w-full  lg:pt-[40px]  mx-auto justify-center gap-6">
        <div className="bgBlack  mt-10 lg:mt-0 w-full mx-auto py-20 px-10">
          <h1 className="text-white pb-10 font-bold">Political Marketing</h1>
          <p className="text-white opacity-[0.8]">
            Our experienced team is well-equipped to handle all aspects of
            political marketing and branding. We work alongside candidates or
            parties to develop a successful campaign that includes message
            crafting, positioning within key issues, building a trusted brand
            image online & offline.
          </p>
        </div>

        <div className="bgBlack  mt-10 lg:mt-0 w-full mx-auto py-20 px-10">
          <h1 className="text-white pb-10 font-bold">UI & UX Design</h1>
          <p className="text-white opacity-[0.8]">
            Our UI/UX design service focuses on creating beautiful, intuitive,
            and engaging user experiences for your digital products. We work
            closely with you to understand your brand, your target audience, and
            your business goals, so that we can create a custom solution that
            meets your specific needs.
          </p>
        </div>
        <div className="bgBlack  mt-10 lg:mt-0 w-full mx-auto py-20 px-10">
          <h1 className="text-white pb-10 font-bold">Paid Advertising</h1>
          <p className="text-white opacity-[0.8]">
            Our paid advertising services allow businesses to advertise more
            effectively than ever before using platforms such as Google Ads,
            Facebook, Instagram, and LinkedIn. With our team's expertise, we can
            strategically deploy paid ads, optimizing every aspect of the
            campaign to ensure maximum visibility, clicks, and conversions.
          </p>
        </div>
        <div className="bgBlack mt-10 lg:mt-0 w-full mx-auto py-20 px-10">
          <h1 className="text-white pb-10 font-bold">Web Reputation</h1>
          <p className="text-white opacity-[0.8]">
            Online reputation management provides all the necessary elements to
            maintain a favourable brand image online. Our solution monitors
            mentions of our clients' brands online such as review sites, social
            media profiles, ratings websites etc., responds to comments by
            providing valuable recommendations, and addresses concerns in a
            professional manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
