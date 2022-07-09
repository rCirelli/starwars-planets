import React from 'react';
import PropTypes from 'prop-types';

function TableHeader({ headerContent }) {
  const headers = headerContent.map((header, index) => (
    <th
      key={ index }
      className="px-3 flex-1 text-left"
    >
      {header}
    </th>
  ));

  return (
    <thead
      className="w-full border-b border-star-wars-blue/50"
    >
      <tr
        className="flex justify-evenly items-center text-sm text-star-wars-blue
        font-thin py-2"
      >
        {headers}
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = { headerContent: PropTypes.arrayOf(PropTypes.string).isRequired };
