import { PropTypes } from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from '../PlanetsContext';

function PlanetProvider({ children }) {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  const [planetsList, setPlanetsList] = useState([]);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [textFilter, setTextFilter] = useState('');

  useEffect(() => {
    const ENDPOINT = 'https://swapi.dev/api/planets';
    const fetchPlanets = () => {
      setIsFetching(true);
      fetch(ENDPOINT)
        .then((response) => response.json())
        .then((json) => setPlanetsList(json.results))
        .catch((e) => setError(e.message))
        .finally(() => setIsFetching(false));
    };
    fetchPlanets();
  }, []);

  const context = {
    planetsList,
    error,
    isFetching,
    intro: {
      isLogoVisible,
      setIsLogoVisible,
    },
    filters: {
      text: {
        textFilter,
        setTextFilter,
      },
    },
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetProvider;

PlanetProvider.propTypes = { children: PropTypes.node.isRequired };
