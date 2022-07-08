import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ rowData }) {
  return (
    <tr className="flex justify-evenly items-center text-slate-400 text-sm">
      { rowData && (
        <>
          <td
            className="px-3 flex-1 w-3 break-words"
          >
            {rowData.name}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.climate}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.rotation_period}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.orbital_period}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.diameter}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.gravity}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.terrain}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.surface_water}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.population}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.films}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.created}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.edited}
          </td>
          <td
            className="px-3 border-l border-emerald-900 flex-1 w-3 break-words"
          >
            {rowData.url}
          </td>
        </>
      )}
    </tr>
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
    films: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
