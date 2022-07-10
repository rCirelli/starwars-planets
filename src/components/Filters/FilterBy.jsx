import React, { useContext, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import Button from '../Inputs/Button';
import Dropdown from '../Inputs/Dropdown';
import Input from '../Inputs/Input';

function FilterBy() {
  const {
    filters: {
      numeric: { setNumericFilter },
    },
  } = useContext(PlanetsContext);

  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');

  const handleClick = () => {
    setNumericFilter({
      column: columnFilter,
      operator: comparisonFilter,
      value: Number(valueFilter),
    });
  };

  // const columnOptions = {
  //   'Population': 'population',
  //   'Orbital Period': 'orbital_period',
  //   'Diameter': 'diameter',
  //   'Rotation Period': 'rotation_period',
  //   'Surface Water': 'surface_water',
  // };

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <div className="flex justify-center items-end gap-10">
      {/* <Dropdown
        id="column-filter"
        label="Coluna"
        options={ Object.keys(columnOptions) }
        values={ Object.values(columnOptions) }
        onChange={ setColumnFilter }
      /> */}
      <Dropdown
        id="column-filter"
        label="Coluna"
        options={ columnOptions }
        values={ columnOptions }
        onChange={ setColumnFilter }
      />
      <Dropdown
        id="comparison-filter"
        label=""
        options={ ['maior que', 'menor que', 'igual a'] }
        values={ ['maior que', 'menor que', 'igual a'] }
        onChange={ setComparisonFilter }
      />
      <Input
        type="number"
        id="value-filter"
        label="Valor"
        placeholder="0"
        value={ valueFilter }
        onChange={ setValueFilter }
      />
      <Button id="button-filter" text="Filtrar" onClick={ handleClick } />
    </div>
  );
}

export default FilterBy;
