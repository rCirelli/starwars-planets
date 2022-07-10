import { useEffect, useState } from 'react';

function useColumnFilter() {
  const [filteredList, setFilteredList] = useState([]);
  const [initialList, setInitialList] = useState([]);
  const [numericFilter, setNumericFilter] = useState('');

  useEffect(() => {
    if (filteredList && filteredList.length === 0) {
      setFilteredList([...initialList]);
    }
  }, [initialList]);

  useEffect(() => {
    if (filteredList) {
      const { column, operator, value } = numericFilter;

      const newList = initialList.filter((planet) => {
        if (operator === '>') {
          return Number(planet[column]) > value;
        }
        if (operator === '<') {
          return Number(planet[column]) < value;
        }
        if (operator === '===') {
          return Number(planet[column]) === value;
        }
        return planet;
      });
      setFilteredList(newList);
    }
  }, [numericFilter]);

  return [filteredList, setNumericFilter, setInitialList];
}

export default useColumnFilter;
