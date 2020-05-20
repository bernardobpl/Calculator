import React from 'react';
import Display from './display';
import Clear from './clear';
import Digits from './digits';
import Operations from './operations';

class Calculadora extends React.Component {
    constructor(props){
        super(props);
        const incialState = {
            focusdigits:'',
            firstdigits:'',
            operation:'',
            prevresult:false,
        }
        this.state = incialState;

        this.functions = {
            btnOnClick: (e)=>{
                if(this.state.prevresult){
                    this.setState({focusdigits: e.target.value});
                    this.setState({prevresult: false});
                }else {
                    //this.setState({});
                    this.setState({focusdigits: this.state.focusdigits + e.target.value});
                }
            },

            ops: {
                    '+': (firstdigits, focusdigits) => parseFloat(firstdigits) + parseFloat(focusdigits),
                    '-': (firstdigits, focusdigits) => parseFloat(firstdigits) - parseFloat(focusdigits),
                    '*': (firstdigits, focusdigits) => parseFloat(firstdigits) * parseFloat(focusdigits),
                    '/': (firstdigits, focusdigits) => parseFloat(firstdigits) / parseFloat(focusdigits),
                    '':  (firstdigits, focusdigits) => focusdigits,
            },

            handleOperation: (e) => {
                if (e.target.value === '='){
                    const result =this.functions.ops[this.state.operation](this.state.firstdigits,this.state.focusdigits);
                    this.setState({focusdigits: String(result)});
                    this.setState({prevresult: true});
                    this.setState({operation: ''});
                    this.setState({firstdigits: ''});
                }
                else if (this.state.operation === ''){
                    this.setState({prevresult: false});
                    this.setState({firstdigits: this.state.focusdigits});
                    this.setState({operation: e.target.value});
                    this.setState({focusdigits: ''});
                }
                else {
                    this.setState({operation: e.target.value});
                }
            },

            clear: (e) => {
                if (e.target.value==='C'){
                    let pop = this.state.focusdigits.split('');
                    pop.splice(-1,1);
                    this.setState({focusdigits: pop.join('')})
                } else {
                    this.setState(incialState);
                }
            }

        };

    }
    componentDidMount(){
        
    }

    render() {
        return (
            <div className="calculator">
                <Display focusdigits={this.state.focusdigits}/>
                <div className="keyboard-main">
                    <Clear clear={this.functions.clear}/>
                    <Digits btnOnClick={this.functions.btnOnClick} handleOperation={this.functions.handleOperation}/>
                    <Operations handleOperation={this.functions.handleOperation}/>
                </div>
            </div>
        );
    }
}

export default Calculadora;