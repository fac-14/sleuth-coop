import React from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => (
  <button className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </button>
);

export default Arrow;
