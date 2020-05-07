import React,{ useState } from 'react';
import './App.css';



function App() {
  const btnnumbers = [];
  ['1','2','3','4','5','6','7','8','9','0','.'].forEach(num => {
    btnnumbers.push(
      <button 
        value = {`${num}`}
        key = {num}
        className = {`btn btn${num}`}
        onClick = {e => setFocusdig(focusdigits+e.target.value)}
      > 
        {num} 
      </button>);
  });

  return (        
    <div className="App">

      <div className="calculator">

        <input className="display" readOnly value={focusdigits}/>

        <div className="keyboard-main">

          <div className="keyboard-clear">
            <button className="btn" value="C" id="btnC"> C </button>
            <button className="btn" value="AC" id="btnAC"> AC </button>
          </div>

          <div className="keyboard-digits"> 
            {btnnumbers} 
            <button className="btn" value="=" onClick={e => handleOperation(e)}> = </button>
          </div>

          <div className="keyboard-op">
            <button className="btn" value="sum" onClick={e => handleOperation(e)}> + </button>
            <button className="btn" value="sub"> - </button>
            <button className="btn" value="times"> * </button>
            <button className="btn" value="divide"> / </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
