import React, { useEffect, useState } from "react";
import { FaArrowUp,FaAngleDown } from "react-icons/fa";
 import './btn.css'
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
  <>
      {isVisible && (
        <div className="Top fixed top-[90%]  z-50 left-[80%] lg:left-[93%] xl:left-[96%]  top-btn py-4 px-4 rounded-lg " onClick={goToBtn}>
          <FaAngleDown className="hover:rotate-[180deg] text-white" />
        </div>
      )}
   </>
  );
};


  

export default GoToTop;