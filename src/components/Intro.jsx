import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Intro() {
  const [timerID, setTimerID] = useState('');
  const { intro: { isLogoVisible, setIsLogoVisible } } = useContext(PlanetsContext);

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
