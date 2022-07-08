import React from 'react';
import PropTypes from 'prop-types';
import '../stars.css';

function Wrapper({ children }) {
  return (
    <>
      <div className="stars" />
      <div
        className="p-10 min-h-screen max-w-screen bg-black text-white
        flex flex-col justify-center items-center"
      >
        {children}
      </div>
    </>
  );
}

export default Wrapper;

Wrapper.propTypes = { children: PropTypes.node.isRequired };
