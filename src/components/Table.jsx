import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table() {
  const { planetsList } = useContext(PlanetsContext);

  return (
    <table
      className="w-11/12 border border-emerald-900 rounded-lg py-1
      bg-gradient-to-b from-slate-900 backdrop-blur-sm table-auto
      flex flex-col justify-center align-center gap-3"
    >
      {console.log(planetsList[0])}
      <TableHeader
        headerContent={
          ['Name', 'Climate', 'Rotation Period', 'Orbital Period',
            'Diameter', 'Gravity', 'Terrain', 'Surface Water',
            'Population', 'Films', 'Created', 'Edited', 'URL']
        }
      />

      <tbody className="w-full pb-2 flex flex-col justify-center gap-2">
        {
          planetsList?.map((planet) => (
            <TableRow key={ planet.name } rowData={ planet } />
          ))
          // <TableRow
          //   rowData={ planetsList[0] }
          // />
        }
      </tbody>
    </table>
  );
}

export default Table;
