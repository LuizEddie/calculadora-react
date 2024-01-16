import React, {Component} from 'react';
import './Calculator.css';

import Buttons from '../components/Button';
import Display from '../components/Display';

class Calculator extends Component{
    render(){
        return (
            <div className='calculator'>
                <Display value={100000000}></Display>
                <Buttons label="AC"></Buttons>
                <Buttons label="/"></Buttons>
                <Buttons label="7"></Buttons>
                <Buttons label="8"></Buttons>
                <Buttons label="9"></Buttons>
                <Buttons label="*"></Buttons>
                <Buttons label="4"></Buttons>
                <Buttons label="5"></Buttons>
                <Buttons label="6"></Buttons>
                <Buttons label="-"></Buttons>
                <Buttons label="1"></Buttons>
                <Buttons label="2"></Buttons>
                <Buttons label="3"></Buttons>
                <Buttons label="+"></Buttons>
                <Buttons label="0"></Buttons>
                <Buttons label="."></Buttons>
                <Buttons label="="></Buttons>
            </div>
        );
    }
}

export default Calculator;