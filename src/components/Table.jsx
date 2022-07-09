import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Filter from './Filter';
import Intro from './Intro';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table() {
  const {
    planetsList, error, isFetching,
    intro: { isLogoVisible },
    filters: { text: { textFilter } },
  } = useContext(PlanetsContext);

  const table = (
    <>
      <Filter />
      <table
        className="w-full border border-star-wars-blue/50 rounded-b-lg
        bg-gradient-to-b from-slate-900 table-auto border-collapse
        hover:backdrop-blur-sm transition ease-in-out duration-300
        flex flex-col justify-center align-center gap-3"
      >
        <TableHeader
          headerContent={
            ['Name', 'Climate', 'Rotation Period', 'Orbital Period',
              'Diameter', 'Gravity', 'Terrain', 'Surface Water',
              'Population', 'Films', 'Created', 'Edited', 'URL']
          }
        />
        <tbody
          className="w-full pb-2 flex flex-col justify-center gap-2 text-base"
        >
          {
            planetsList?.filter((planet) => (
              textFilter
                ? planet.name.toLowerCase().includes(textFilter.toLowerCase())
                : planet))
              .map((planet) => (
                <TableRow
                  key={ planet.name }
                  rowData={ planet }
                />
              ))
          }
        </tbody>
      </table>
    </>
  );

  return (
    <div className="w-11/12 flex flex-col justify-center items-center">
      <Intro />
      { error && <span>error</span> }
      { !isFetching && isLogoVisible
        ? table
        : ''}
    </div>
  );
}

export default Table;
