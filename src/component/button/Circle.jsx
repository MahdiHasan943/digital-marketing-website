import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar';
import React, { useEffect, useState } from 'react'
const config = {
  percent: 70,
  rotation: 130, 
  textPosition: "0.35em",
  colorSlice: "#136CF2",
  size: 90,
  colorCircle: "#f1f1f1",
  fontWeight: 700,
  fontSize: "2.2rem",
};
  
 
const Circle = () => {
  const [update, setUpdate] = useState(config);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate({
        ...config,
        id: 0, // we indicate which component we want to change
        // percent: Math.floor(Math.random() * 100 + 1),
        colorSlice: "#136CF2",
        fontSize: "2.2rem",
        fontWeight: 700
      });
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const newObject = { ...config, ...update };


  return (
    <div>
      
    <CircularProgressBar  {...newObject} />
      </div>
  )
}

export default Circle