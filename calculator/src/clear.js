import React from 'react';

const Clear = ({clear}) => {
  return(
    <div className="keyboard-clear">
      <button className="btn" value="C" id="btnC" onClick={e => clear(e)}> C </button>
      <button className="btn" value="AC" id="btnAC" onClick={e => clear(e)}> AC </button>
    </div>
  );
}

export default Clear;