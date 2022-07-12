import { DotsThreeVertical, XCircle } from 'phosphor-react';
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
    sort: {
      order,
      setOrder,
    },
  } = useContext(PlanetsContext);

  const selectedFilters = numericFilter.map((filter) => filter.column);

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const filterColumnOptions = columnOptions
    .filter((option) => !selectedFilters.includes(option));

  const [columnFilter, setColumnFilter] = useState(filterColumnOptions[0]);
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');

  const [orderDropdown, setOrderDropdown] = useState('population');
  const [orderRadios, setOrderRadios] = useState(order.sort);

  const resetInputValues = () => {
    setColumnFilter(filterColumnOptions[0]);
    setComparisonFilter('maior que');
    setValueFilter('0');
  };

  const handleClick = () => {
    setNumericFilter([
      ...numericFilter,
      {
        column: columnFilter,
        operator: comparisonFilter,
        value: Number(valueFilter),
      },
    ]);
    resetInputValues();
  };

  const handleExclude = ({ target }) => {
    const targetFilter = target.id;
    if (targetFilter === 'button-remove-filters') {
      setNumericFilter([]);
      resetInputValues();
      return;
    }
    const newFiltersArray = numericFilter.filter(
      ({ column }) => column !== targetFilter,
    );
    setNumericFilter(newFiltersArray);
    resetInputValues();
  };

  const handleSetOrder = () => {
    const newOrder = {
      column: orderDropdown,
      sort: orderRadios,
    };
    setOrder(newOrder);
  };

  // const columnOptions = {
  //   'Population': 'population',
  //   'Orbital Period': 'orbital_period',
  //   'Diameter': 'diameter',
  //   'Rotation Period': 'rotation_period',
  //   'Surface Water': 'surface_water',
  // };

  return (
    <div className="w-full flex flex-col gap-7">
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
          options={ filterColumnOptions }
          values={ filterColumnOptions }
          onChange={ setColumnFilter }
          defaultValue={ filterColumnOptions[0] }
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
        <Button id="button-filter" text="Filtrar" onClick={ handleClick } />
        {selectedFilters.length > 0 && (
          <Button
            id="button-remove-filters"
            text="Limpar Filtros"
            onClick={ handleExclude }
            variant="secondary"
          />
        )}
        <DotsThreeVertical size={ 45 } />
        <Dropdown
          id="column-sort"
          label="Ordenar"
          options={ columnOptions }
          values={ columnOptions }
          onChange={ setOrderDropdown }
          defaultValue={ orderDropdown }
        />
        <div className="flex flex-col items-start justify-center font-normal">
          <label
            htmlFor="column-sort-input-asc"
            className="flex items-center gap-2"
          >
            <input
              type="radio"
              data-testid="column-sort-input-asc"
              id="column-sort-input-asc"
              className="form-check-input appearance-none rounded-full h-4 w-4
              border border-slate-700 bg-gray-900 checked:bg-star-wars-blue
              checked:border-4 focus:outline-none transition duration-200
              bg-no-repeat bg-center bg-contain cursor-pointer"
              value="ASC"
              checked={ orderRadios === 'ASC' }
              onChange={ ({ target }) => setOrderRadios(target.value) }
            />
            Crescente
          </label>
          <label
            htmlFor="column-sort-input-asc"
            className="flex items-center gap-2"
          >
            <input
              type="radio"
              data-testid="column-sort-input-desc"
              id="column-sort-input-desc"
              className="form-check-input appearance-none rounded-full h-4 w-4
              border border-slate-700 bg-gray-900 checked:bg-star-wars-blue
              checked:border-4 focus:outline-none transition duration-200
              bg-no-repeat bg-center bg-contain cursor-pointer"
              value="DESC"
              checked={ orderRadios === 'DESC' }
              onChange={ ({ target }) => setOrderRadios(target.value) }
            />
            Decrescente
          </label>
        </div>
        <Button
          id="column-sort-button"
          text="Ordenar"
          onClick={ handleSetOrder }
        />
      </div>
      {/* </div> */}
      {selectedFilters.length > 0 && (
        <div className="mt-5 px-10 flex flex-wrap gap-14">
          {selectedFilters.map((filter, i) => (
            <div
              key={ i }
              data-testid="filter"
              className="flex items-center gap-2"
            >
              <span
                className="text-slate-500 text-sm italic font-medium antialiased"
              >
                {filter}
              </span>
              <button
                type="button"
                onClick={ handleExclude }
                id={ filter }
                className="text-star-wars-blue hover:text-red-600
                font-light"
              >
                x
                <XCircle size={ 20 } weight="light" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterBy;
