import React from 'react';

const Operations = ({handleOperation}) => {
  
  return(
    <div className="keyboard-op">
      {['+','-','*','/'].map(op => (
        <button type="button" value={op} key={op} className="btn" onClick={e => handleOperation(e)}> {op} </button>
      ))}
    </div>
  );
}

export default Operations ;