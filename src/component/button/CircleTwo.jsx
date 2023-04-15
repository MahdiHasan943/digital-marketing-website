import React, { useEffect, useState } from "react";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

const config = {
    id: 0, // important
    percent: 95,
    colorSlice: "#000",
    strokeBottom: 1,
    stroke: 10,
    rotation: -55,
    cut: 15,
    textPosition: "-3.5rem",
    fontSize: "1rem",
  
    size: 500,
    strokeDasharray: "4,1",
    fontWeight: 700,
  
    number: true,
  
    inverse: false,
  };     
const CircleTwo = () => {
    const [update, setUpdate] = useState(config);
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate({
        ...config,
        id: 0, // we indicate which component we want to change
        // percent: Math.floor(Math.random() * 100 + 1),
        colorSlice: "#000",
        fontColor: "#000",
        fontSize: "1rem",
        fontWeight: 700,
      });
    }, 3000);
    // return () => clearInterval(interval);
  }, []);
  const newObject = { ...config, ...update };
  return (
      <div>
                          <CircularProgressBar {...newObject} />


    </div>
  )
}

export default CircleTwo