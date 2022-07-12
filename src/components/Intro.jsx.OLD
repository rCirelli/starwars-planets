import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Intro() {
  const { intro: { isLogoVisible, setIsLogoVisible } } = useContext(PlanetsContext);

  useEffect(() => {
    const audio = new Audio('/assets/Star Wars Theme Song By John Williams.mp3');
    const FOUR_SECONDS = 400;
    const id = setTimeout(() => {
      setIsLogoVisible(true);
      audio.play();
    }, FOUR_SECONDS);

    return () => clearTimeout(id);
  }, [setIsLogoVisible]);

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
