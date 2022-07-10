import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, id, text, onClick }) {
  return (
    <button
      type={ type === 'submit' ? 'submit' : 'button' }
      id={ id }
      data-testid={ id }
      className="outline outline-1 rounded-lg py-3 px-5 transition
      hover:outline-0 hover:bg-sky-600 hover:text-slate-900
      active:bg-star-wars-blue active:scale-[1.05]"
      onClick={ onClick }
    >
      {text}
    </button>
  );
}

export default Button;

Button.defaultProps = { type: 'button' };

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
