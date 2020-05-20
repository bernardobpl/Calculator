import React from 'react';

const Digits = ({btnOnClick,handleOperation}) => {

    return(
        <div className="keyboard-digits"> 
            {['1','2','3','4','5','6','7','8','9','0','.'].map(num => (
                <button 
                    type="button" 
                    className={`btn btn${num}`} 
                    value={num} 
                    key={num}
                    onClick={e => btnOnClick(e)}> {num}
                </button>
            ))}
            <button className="btn" value="=" onClick={e => handleOperation(e)}> = </button>
        </div>
    );
}

export default Digits;