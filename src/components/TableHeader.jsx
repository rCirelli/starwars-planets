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
      className="w-full border-b border-emerald-900"
    >
      <tr className="flex justify-evenly items-center text-sm text-slate-400">
        {headers}
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = { headerContent: PropTypes.arrayOf(PropTypes.string).isRequired };
