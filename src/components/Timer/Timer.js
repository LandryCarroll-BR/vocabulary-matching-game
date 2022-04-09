import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
  const [seconds, setSeconds] = useState(0);
  // const [isActive, setIsActive] = useState(false);

  // function toggle() {
  //   setIsActive(!isActive);
  // }

  function reset() {
    setSeconds(0);
    // setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!start && seconds !== 0) {
      clearInterval(interval);
      reset()
    }
    return () => clearInterval(interval);
  }, [start, seconds]);

  return (
    <div className="app">
      <div className="timer">
        {seconds}s
      </div>
    </div>
  );
};

export default Timer;