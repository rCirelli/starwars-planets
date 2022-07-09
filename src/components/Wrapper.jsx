import React from 'react';
import PropTypes from 'prop-types';
import '../stars.css';

function Wrapper({ children }) {
  return (
    <>
      <div className="stars z-1" />
      <div
        className="p-10 min-h-screen max-w-screen bg-black text-white
        flex flex-col justify-center items-center z-10"
      >
        {children}
      </div>
    </>
  );
}

export default Wrapper;

Wrapper.propTypes = { children: PropTypes.node.isRequired };
