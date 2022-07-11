import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, id, text, onClick, variant }) {
  const variants = {
    primary: 'outline hover:bg-sky-600 active:bg-star-wars-blue hover:outline-0',
    secondary: `hover:outline-star-wars-yellow active:bg-red-600 hover:outline
                active:outline-red-600 active:text-black hover:text-star-wars-yellow`,
  };

  return (
    <button
      type={ type === 'submit' ? 'submit' : 'button' }
      id={ id }
      data-testid={ id }
      className={ `outline-1 rounded-lg py-3 px-5 transition
      active:scale-[1.05] hover:text-slate-900 ${variants[variant]}` }
      onClick={ onClick }
    >
      {text}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};
