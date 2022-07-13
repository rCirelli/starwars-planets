import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import FilterBy from './FilterBy';

function FilterForm() {
  const { filters: { text: { textFilter, setTextFilter } } } = useContext(PlanetsContext);

  return (
    <div
      className="w-full border-x border-t border-star-wars-blue/50 rounded-t-lg
      bg-slate-900 table-auto backdrop-blur-sm py-6 text-star-wars-blue
      flex flex-col justify-center items-center font-semibold"
    >
      <h3
        style={ { fontFamily: 'Starjedi' } }
        className="text-star-wars-yellow/90 text-4xl tracking-widest"
      >
        Star Wars Planets Database
      </h3>
      <label
        htmlFor="name-filter"
        className="flex flex-col items-start mb-5"
      >
        <input
          placeholder="Filter"
          type="text"
          id="name-filter"
          data-testid="name-filter"
          className="px-2 py-2 rounded bg-slate-800 peer order-2 outline-none
          transition-all placeholder:focus:text-slate-600/0"
          value={ textFilter }
          onChange={ ({ target }) => setTextFilter(target.value) }
        />
        <span
          className="translate-x-2 text-sm text-thin text-slate-600/0 translate-y-8
          tracking-wider order-1 peer-focus:translate-y-[0.57rem] transition-all
          outline-none peer-focus:text-sky-600"
        >
          Filter
        </span>
      </label>
      <FilterBy />
    </div>
  );
}

export default FilterForm;
