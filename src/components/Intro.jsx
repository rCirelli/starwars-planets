import React, { useEffect, useState } from 'react';

function Intro() {
  const [timerID, setTimerID] = useState('');
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    const FIVE_SECONDS = 4000;
    const id = setTimeout(() => {
      setIsLogoVisible(true);
    }, FIVE_SECONDS);
    setTimerID(id);

    return () => clearTimeout(timerID);
  }, []);

  return (
    <div className="flex justify-center">
      { !isLogoVisible && (
        <div className="text-star-wars-blue text-3xl">
          <p>A long time ago in a galaxy far,</p>
          <p>far away...</p>
        </div>
      )}
      { isLogoVisible && (
        <img src="/images/star-wars.png" alt="star wars logo" className="fade" />) }
    </div>
  );
}

export default Intro;
