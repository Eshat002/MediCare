import React, { useEffect, useState } from "react";

const CountingAnimation = ({ target = 500 }) => {
  const [count, setCount] = useState(0);
  //   const target = { target }; // Target number
  const duration = 2000; // Total duration of the count animation in milliseconds
  const incrementTime = Math.floor(duration / target); // Time in ms for each increment

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval); // Stop the interval when the target is reached
          return prevCount;
        }
      });
    }, incrementTime);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [target, incrementTime]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <span
          className={`text-6xl font-bold text-blue-600 transition-transform duration-500 
                                ${count > 0 ? "transform scale-110" : ""}`}
        >
          {count}
        </span>
        <p className="text-lg mt-2">Happy Clients</p>
      </div>
    </div>
  );
};

export default CountingAnimation;
