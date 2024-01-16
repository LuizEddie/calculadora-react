import React from 'react';
import './Button.css';

function Buttons(props){
    return (<button className='button'>{props.label}</button>);
}

export default Buttons;
