function columnFilter(planetsList, numericFilter) {
  const { column, operator, value } = numericFilter;

  const newList = planetsList.filter((planet) => {
    if (operator === 'maior que') {
      return Number(planet[column]) > value;
    }
    if (operator === 'menor que') {
      return Number(planet[column]) < value;
    }
    if (operator === 'igual a') {
      return Number(planet[column]) === value;
    }
    return planet;
  });
  return newList;
}

export default columnFilter;
