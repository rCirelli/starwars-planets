import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, label, id, placeholder, onChange, value }) {
  return (
    <label
      htmlFor={ id }
      className="text-slate-500 text-xs flex flex-col"
    >
      {label}
      <input
        className="p-1.5 bg-slate-900 border-b-2 border-slate-700 font-normal
        text-star-wars-blue text-base w-24
        placeholder:italic placeholder:text-star-wars-blue
        hover:rounded-lg hover:bg-slate-800 hover:border-b-slate-900 transition"
        type={ type }
        data-testid={ id }
        id={ id }
        placeholder={ placeholder }
        value={ value }
        onChange={ ({ target }) => onChange(target.value) }
      />
    </label>
  );
}

export default Input;

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
