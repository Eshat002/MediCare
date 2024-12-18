import React, { useEffect, useState } from "react";

const CountingAnimation = ({ target, sign }) => {
  const [count, setCount] = useState(0);

  const duration = 1000;
  const incrementTime = Math.floor(duration / target);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, incrementTime);

    return () => clearInterval(interval);
  }, [target, incrementTime]);

  return (
    <span>
      {count}
      {sign}
    </span>
  );
};

export default CountingAnimation;
