function columnFilter(planetsList, numericFilter) {
  if (numericFilter.length === 0) { return planetsList; }

  const filteredLists = [planetsList];

  numericFilter.forEach((filter, index) => {
    const { column, operator, value } = filter;

    const newFilteredList = filteredLists[index].filter((planet) => {
      const operations = {
        'maior que': Number(planet[column]) > value,
        'menor que': Number(planet[column]) < value,
        'igual a': Number(planet[column]) === value,
      };
      return operator ? operations[operator] : planet;
    });
    filteredLists.push(newFilteredList);
  });
  const LAST_ELEMENT = -1;
  return filteredLists.at(LAST_ELEMENT);
}

// o filtro recursivo não funciona direito no react
// function recursiveColumnFilter(planetsList, numericFilter, index = 0) {
//   const iterations = numericFilter.length;
//   const list = [...planetsList];

//   if (index < iterations) {
//     const { column, operator, value } = numericFilter[index];

//     const newFilteredList = list.filter((planet) => {
//       const operations = {
//         'maior que': Number(planet[column]) > value,
//         'menor que': Number(planet[column]) < value,
//         'igual a': Number(planet[column]) === value,
//       };
//       return operator ? operations[operator] : planet;
//     });
//     const nextIndex = index + 1;

//     recursiveColumnFilter(newFilteredList, numericFilter, nextIndex);
//     return newFilteredList;
//   }

//   return list;
// }

module.exports = {
  columnFilter,
  // recursiveColumnFilter,
};
