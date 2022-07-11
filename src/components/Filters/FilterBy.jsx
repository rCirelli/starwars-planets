import { XCircle } from 'phosphor-react';
import React, { useContext, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import Button from '../Inputs/Button';
import Dropdown from '../Inputs/Dropdown';
import Input from '../Inputs/Input';

function FilterBy() {
  const {
    filters: {
      numeric: { numericFilter, setNumericFilter },
    },
  } = useContext(PlanetsContext);

  const selectedFilters = numericFilter.map((filter) => filter.column);

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ].filter((option) => !selectedFilters.includes(option));

  const [columnFilter, setColumnFilter] = useState(columnOptions[0]);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');

  const resetInputValues = () => {
    setColumnFilter(columnOptions[0]);
    setComparisonFilter('maior que');
    setValueFilter('0');
  };

  const handleClick = () => {
    setNumericFilter([...numericFilter,
      {
        column: columnFilter,
        operator: comparisonFilter,
        value: Number(valueFilter),
      }]);
    resetInputValues();
  };

  const handleExclude = ({ target }) => {
    const targetFilter = target.id;
    if (targetFilter === 'button-remove-filters') {
      setNumericFilter([]);
      resetInputValues();
      return;
    }
    const newFiltersArray = numericFilter.filter(({ column }) => column !== targetFilter);
    setNumericFilter(newFiltersArray);
    resetInputValues();
  };

  // const columnOptions = {
  //   'Population': 'population',
  //   'Orbital Period': 'orbital_period',
  //   'Diameter': 'diameter',
  //   'Rotation Period': 'rotation_period',
  //   'Surface Water': 'surface_water',
  // };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-7">
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
            defaultValue={ columnOptions[0] }
          />
          <Dropdown
            id="comparison-filter"
            label=""
            options={ ['maior que', 'menor que', 'igual a'] }
            values={ ['maior que', 'menor que', 'igual a'] }
            onChange={ setComparisonFilter }
            defaultValue="maior que"
          />
          <Input
            type="number"
            id="value-filter"
            label="Valor"
            placeholder="0"
            value={ valueFilter }
            onChange={ setValueFilter }
          />
          <Button
            id="button-filter"
            text="Filtrar"
            onClick={ handleClick }
          />
          {selectedFilters.length > 0 && (
            <Button
              id="button-remove-filters"
              text="Limpar Filtros"
              onClick={ handleExclude }
              variant="secondary"
            />)}
        </div>
      </div>
      { selectedFilters.length > 0 && (
        <div className="mt-5 px-10">
          <ul className="flex flex-wrap gap-14">
            {
              selectedFilters.map((filter, i) => (
                <li
                  key={ i }
                  className="flex items-center gap-1
                  text-sm text-slate-600 italic font-medium"
                  data-testid="filter"
                >
                  {filter}
                  <button
                    type="button"
                    onClick={ handleExclude }
                  >
                    <XCircle
                      size={ 20 }
                      weight="light"
                      id={ filter }
                      className="text-star-wars-blue hover:text-red-600"
                    />
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
  );
}

export default FilterBy;
