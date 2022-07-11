import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ label, options, values, id, onChange, defaultValue }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={ id }
        className="text-slate-500 ml-1 text-xs"
      >
        {label}
      </label>
      <select
        className="py-1.5 bg-slate-900 border-b-2 border-slate-700 font-normal
        hover:rounded-lg hover:bg-slate-800 hover:border-b-slate-900 transition"
        data-testid={ id }
        id={ id }
        onChange={ ({ target }) => onChange(target.value) }
        defaultValue={ defaultValue }
      >
        {
          options.map((option, i) => (
            <option
              key={ i + 1 }
              value={ values[i] }
            >
              {option}
            </option>))
        }
      </select>
    </div>
  );
}

export default Dropdown;

Dropdown.defaultProps = { defaultValue: '' };

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};
