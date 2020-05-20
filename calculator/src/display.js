import React from 'react';

const Display = ({focusdigits}) => 
  <input className="display" readOnly value={focusdigits}/>

export default Display;