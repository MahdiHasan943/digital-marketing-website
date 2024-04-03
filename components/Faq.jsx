
import React from "react";

const Faq = () => {
  return (
      <>
         <div id="faq" className="px-8 lg:px-[60px] bg py-[100px]">
      <h3 className="asked text-[44px] leading-[60px] xl:text-[89px] xl:leading-[100px]  m-0">
        Frequently Asked
        <br />
        Questions
              </h3>
              {/* fine */}

      <div className="grid pt-[90px] grid-cols-1 md:grid-cols-2 gap-10">
        <div className="py-20">
          <h3 className="question text-[38px] leading-[30px] sm:text-[48px] sm:leading-[40px]  text-center py-10">How Can I Choose?</h3>
          <p className="text-[#363737] text-center">
          Choosing the best marketing strategy for your business requires careful planning, research, and ongoing evaluation to ensure that you are meeting the needs of your target audience and achieving your business objectives.
          </p>
                  </div>
                  

                  <div className="py-20">
          <h3 className="question text-[38px] leading-[30px] sm:text-[48px] sm:leading-[40px]  text-center py-10">            What is a Full Service?</h3>
          <p className="text-[#363737] text-center">
          Our Full Service can include market research, strategy development, branding and identity design, advertising and media planning, public relations, content marketing, social media marketing, email marketing, search engine optimization (SEO), search engine marketing (SEM), website design and development, and analytics and reporting.
          </p>
                  </div>
                  


                  <div className="py-20">
          <h3 className="question text-[38px] leading-[30px] sm:text-[48px] sm:leading-[40px]  text-center py-10">Why is SEO Important?</h3>
          <p className="text-[#363737] text-center">
          By optimizing your website for search engines, you can increase its visibility and attract more traffic.SEO can be a cost-effective marketing strategy compared to other digital marketing methods like PPC (pay-per-click) advertising or social media advertising.
          </p>
                  </div>
                  

                  <div className="py-20">
          <h3 className="question text-[38px] leading-[30px] sm:text-[48px] sm:leading-[40px]  text-center py-10">What is marketing?</h3>
          <p className="text-[#363737] text-center">
          A marketing strategy helps to identify clear goals and objectives for your business, such as increasing sales, expanding your customer base, or launching a new product.
          </p>
        </div>
        {/* <div className="py-20">
          <h3 className="question text-[38px] leading-[30px] sm:text-[48px] sm:leading-[40px] py-10 text-center">
            What is a Full Service?
          </h3>
          <p className="text-[#363737] text-center">
            Our Full Service can include market research, strategy development, branding and identity design, advertising and media planning, public relations, content marketing, social media marketing, email marketing, search engine optimization (SEO), search engine marketing (SEM), website design and development, and analytics and reporting.
          </p>
        </div>
        <div className="py-20">
          <h3 className="question text-[38px] leading-[30px] sm:text-[48px] sm:leading-[40px]  py-10 text-center"> Why is SEO Important?</h3>
          <p className="text-[#363737] text-center">
        By optimizing your website for search engines, you can increase its visibility and attract more traffic.SEO can be a cost-effective marketing strategy compared to other digital marketing methods like PPC (pay-per-click) advertising or social media advertising.
          <p></p>
          </p>
        </div>
        <div className="py-20">
          <h3 className="question text-[38px] leading-[30px] sm:text-[48px] sm:leading-[40px] py-10 text-center"> What is marketing?</h3>
          <p className="text-[#363737] text-center">
          A marketing strategy helps to identify clear goals and objectives for your business, such as increasing sales, expanding your customer base, or launching a new product.
          </p>
        </div> */}
      </div>
              
              {/* fine */}
      <div className="mx-auto py-[10px] text-center">
     
        <a  href="#contact">
            <button className="btGlow bg-[#63cb99] shadow-lg rounded-lg text-white py-8 px-10">
            Get Started
            
            </button>        
           </a>

        <a  href="https://wa.me/+447961267350">

            <button className="btGlow mx-8 mt-3 sm:mt-0 text-white shadow-lg rounded-lg bg-[#136CF2] py-8 px-14">
            Let's Talk

            </button>
        
          </a>
          </div>
    </div>
      </>
  );
};

export default Faq;
