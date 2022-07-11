import { PropTypes } from 'prop-types';
import React, { useState, useEffect } from 'react';
// import useColumnFilter from '../../hooks/useColumnFilter';
import useTextFilter from '../../hooks/useTextFilter';
import PlanetsContext from '../PlanetsContext';
import { columnFilter } from '../../helpers/columnFilter';

function PlanetProvider({ children }) {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  const [planetsList, setPlanetsList] = useState([]);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

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

  // const [filteredList, setFilteredList] = useState([]);
  // const [columnFilterList, setColumnFilterList, initialColumList] = useColumnFilter([]);

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
    // setFilteredList(planetsList);
    // initialColumList(planetsList);
  }, [planetsList]);

  useEffect(() => {
    setTextFilterPlanetsList(textFilter);
  }, [textFilter]);

  // useEffect(() => {
  //   // setTextFilterPlanetsList(textFilter);
  //   const updateFilteredList = async () => {
  //     // const filtered = await columnFilter(textFilterPlanetsList, numericFilter);
  //     setColumnFilterList({ list: textFilterPlanetsList, filter: numericFilter });
  //     // setFilteredList(filtered);
  //   };
  //   updateFilteredList();
  // }, [numericFilter, textFilterPlanetsList]);

  // useEffect(() => {
  //   setFilteredList(columnFilterList);
  // }, [columnFilterList]);

  // const unfilteredList = textFilterPlanetsList;
  // const filteredList = recursiveColumnFilter(textFilterPlanetsList, numericFilter);
  const filteredList = columnFilter(textFilterPlanetsList, numericFilter);
  // console.log(columnFilter(textFilterPlanetsList, numericFilter));
  // console.log('provider', filteredList);

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
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetProvider;

PlanetProvider.propTypes = { children: PropTypes.node.isRequired };
