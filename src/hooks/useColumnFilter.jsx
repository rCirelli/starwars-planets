import { useEffect, useState } from 'react';
import columnFilter from '../helpers/columnFilter';

function useColumnFilter() {
  const [filteredList, setFilteredList] = useState([]);
  const INITIAL_STATE = {
    list: [],
    filter: [],
  };
  const [listAndFilter, setListAndFilter] = useState(INITIAL_STATE);

  useEffect(() => {
    const { list, filter } = listAndFilter;
    const updateList = () => {
      const teste = columnFilter(list, filter);
      console.log(teste, 'teste');
      setFilteredList(teste);
    };
    updateList();
  }, [listAndFilter]);

  return [filteredList, setListAndFilter];
}

export default useColumnFilter;
