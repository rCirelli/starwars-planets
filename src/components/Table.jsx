import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterForm from './Filters/FilterForm';
// import Intro from './Intro';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table() {
  const {
    planetsList,
    error,
    isFetching,
    // intro: { isLogoVisible },
    // filters: {
    //   text: { textFilter },
    // },
    sort: { order },
  } = useContext(PlanetsContext);

  const table = (
    <>
      <FilterForm />
      <table
        className="w-full border border-star-wars-blue/50 rounded-b-lg
        bg-gradient-to-b from-slate-900 via-black table-auto border-collapse
        backdrop-blur-sm flex flex-col justify-center align-center gap-3"
      >
        <TableHeader
          headerContent={ [
            'Name',
            'Climate',
            'Rotation Period',
            'Orbital Period',
            'Diameter',
            'Gravity',
            'Terrain',
            'Surface Water',
            'Population',
            'Films',
            'Created',
            'Edited',
            'URL',
          ] }
        />
        <tbody className="w-full pb-2 flex flex-col justify-center gap-2 text-base">
          {planetsList
            ?.sort((a, b) => {
              const { sort, column } = order;
              const POSITIVE = 1;
              const NEGATIVE = -1;

              if (column === 'name') {
                return a[column] > b[column] ? POSITIVE : NEGATIVE;
              }

              if (a[column] === 'unknown') {
                return POSITIVE;
              }

              if (b[column] === 'unknown') {
                return NEGATIVE;
              }

              const sortType = {
                ASC: Number(a[column]) - Number(b[column]),
                DESC: Number(b[column]) - Number(a[column]),
              };
              return sortType[sort];
            })
            .map((planet) => (
              <TableRow key={ planet.name } rowData={ planet } />
            ))}
        </tbody>
      </table>
    </>
  );

  return (
    <div className="w-11/12 flex flex-col justify-center items-center">
      {/* <Intro />
      { error && <span>error</span> }
      { !isFetching && isLogoVisible
        ? table
        : ''} */}
      {error && <span>error</span>}
      {!isFetching ? table : 'Loading...'}
    </div>
  );
}

export default Table;
