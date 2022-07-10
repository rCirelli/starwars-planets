import { useEffect, useState } from 'react';

function useTextFilter() {
  const [filteredList, setFilteredList] = useState([]);
  const [initialList, setInitialList] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    if (filteredList && filteredList.length === 0) {
      setFilteredList([...initialList]);
    }
  }, [initialList]);

  useEffect(() => {
    if (filteredList) {
      const newList = initialList.filter((planet) => (
        text
          ? planet.name.toLowerCase().includes(text.toLowerCase())
          : planet
      ));
      setFilteredList(newList);
    }
  }, [text]);

  return [filteredList, setText, setInitialList];
}

export default useTextFilter;
