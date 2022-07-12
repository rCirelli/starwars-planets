import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ rowData }) {
  return (
    <>
      <tr
        className="flex justify-evenly items-stretch text-slate-300 text-sm py-2
        hover:outline hover:outline-1 hover:outline-star-wars-blue
        hover:scale-[1.01] hover:bg-slate-900 hover:rounded-lg hover:shadow-lg
        hover:shadow-star-wars-blue/10 transition ease-in
        border-b border-star-wars-blue/50 last:border-b-0"
      >
        { rowData && (
          <>
            <td
              data-testid="planet-name"
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center peer"
            >
              {rowData.name}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center"
            >
              {rowData.climate}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center"
            >
              {rowData.rotation_period}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center"
            >
              {rowData.orbital_period}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center"
            >
              {rowData.diameter}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center"
            >
              {rowData.gravity}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center"
            >
              {rowData.terrain}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center"
            >
              {rowData.surface_water}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center"
            >
              {rowData.population}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
              flex items-center"
            >
              <ul className="flex  flex-wrap gap-3">
                {rowData.films.map((movie, i) => (
                  <li key={ i } className="list-0">
                    <a href={ movie }>{`${i + 1}, `}</a>
                  </li>
                ))}
              </ul>
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
            "
            >
              {rowData.created}
            </td>
            <td
              className="px-3 border-r border-star-wars-blue/50 flex-1 w-5 break-words
            "
            >
              {rowData.edited}
            </td>
            <td
              className="px-3 flex-1 w-5 break-words
            "
            >
              {rowData.url}
            </td>
          </>
        )}
      </tr>
      {/* {index < arraySize - 1 && <tr className="border-b border-star-wars-blue/50" />} */}
    </>
  );
}

export default TableRow;

TableRow.propTypes = {
  rowData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
