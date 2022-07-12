import { PropTypes } from 'prop-types';
import React, { useState, useEffect } from 'react';
import useTextFilter from '../../hooks/useTextFilter';
import PlanetsContext from '../PlanetsContext';
import { columnFilter } from '../../helpers/columnFilter';

function PlanetProvider({ children }) {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  const [planetsList, setPlanetsList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  const [textFilter, setTextFilter] = useState('');
  const [
    textFilterPlanetsList,
    setTextFilterPlanetsList,
    initialTextList] = useTextFilter([]);

  const [numericFilter, setNumericFilter] = useState([]);
  // {
  //   column: '',
  //   operator: '',
  //   value: '0',
  // }
  const DEFAULT_ORDER = { column: 'name', sort: 'ASC' };
  const [order, setOrder] = useState(DEFAULT_ORDER);

  useEffect(() => {
    const ENDPOINT = 'https://swapi.dev/api/planets';
    const fetchPlanets = () => {
      setIsFetching(true);
      fetch(ENDPOINT)
        .then((response) => response.json())
        .then((json) => setPlanetsList(json.results))
        .catch((e) => setError(e.message))
        .finally(() => {
          setIsFetching(false);
        });
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    initialTextList(planetsList);
  }, [planetsList]);

  useEffect(() => {
    setTextFilterPlanetsList(textFilter);
  }, [textFilter]);

  const filteredList = columnFilter(textFilterPlanetsList, numericFilter);

  const context = {
    planetsList: filteredList,
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
      numeric: {
        numericFilter,
        setNumericFilter,
      },
    },
    sort: {
      order,
      setOrder,
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
