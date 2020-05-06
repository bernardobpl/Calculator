import React,{ useState } from 'react';
import './App.css';



function App() {


  const [digits, setDigits] = useState(0);

  return (
    <div className="App">

      <section>

        <div className="display">
          <input readOnly value={digits}/>
        </div>

        <table>
          <tr>
            <td><button value="C"> C </button></td>
            <td><button value="AC" id="AC"> AC </button></td>
            <td><button value="*"> * </button></td>
            <td><button value="/"> / </button></td>
          </tr>

          <tr>
            <td><button value="1"> 1 </button></td>
            <td><button value="2"> 2 </button></td>
            <td><button value="3"> 3 </button></td>
            <td><button value="+"> + </button></td>
          </tr>

          <tr>
            <td><button value="4"> 4 </button></td>
            <td><button value="5"> 5 </button></td>
            <td><button value="6"> 6 </button></td>
            <td><button value="-"> - </button></td>
          </tr>
          
          <tr>
            <td><button value="7"> 7 </button></td>
            <td><button value="8"> 8 </button></td>
            <td><button value="9"> 9 </button></td>
            <td rowspan="2"><button value="="> = </button></td>
          </tr>

          <tr>
            <td colspan="2"><button value="0"> 0 </button></td>
            <td><button value="."> . </button></td>
          </tr>
        </table>

      </section>
    </div>
  );
}

export default App;
