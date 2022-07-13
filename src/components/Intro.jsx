import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Intro() {
  const { intro: { isLogoVisible, setIsLogoVisible } } = useContext(PlanetsContext);
  const [selectedSide, setSelectedSide] = useState({ isSelected: false, side: '' });

  useEffect(() => {
    const audio = new Audio('/assets/star-wars-intro-cut.mp3');
    const FOUR_SECONDS = 5000;
    let id;
    if (selectedSide.isSelected) {
      id = setTimeout(() => {
        setIsLogoVisible(true);
        audio.play();
      }, FOUR_SECONDS);
    }
    return () => clearTimeout(id);
  }, [setIsLogoVisible, selectedSide]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      { !selectedSide.isSelected && (
        <div className="w-full h-full text-9xl flex justify-center gap-48 z-20">
          <button
            type="button"
            className="hover:text-star-wars-blue group hover:scale-[1.2] transition-all"
            onClick={ () => setSelectedSide({ isSelected: true, side: 'light' }) }
          >
            <div
              className="w-0 h-0 shadow-[0_0_100px_40px_#24b9dd] invisible z-10
              translate-x-16 translate-y-14 group-hover:visible transition-all"
            />
            <span style={ { fontFamily: 'Starjedi' } }>
              $
            </span>
          </button>
          <button
            type="button"
            className="hover:text-red-700 group hover:scale-[1.2] transition"
            onClick={ () => setSelectedSide({ isSelected: true, side: 'dark' }) }
          >
            <div
              className="w-0 h-0 shadow-[0_0_100px_40px_#c2410c] invisible z-10
              translate-x-16 translate-y-14 group-hover:visible transition"
            />
            <span style={ { fontFamily: 'Starjedi' } }>
              #
            </span>
          </button>
        </div>
      )}
      { !isLogoVisible && selectedSide.isSelected && (
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
