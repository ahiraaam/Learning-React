import React from 'react';
import './Person.css'
//mport Radium from 'radium';

const person = (props)=> {
    /*const style ={
        '@media(min-width: 500px)':{
            width: '400px'
        }
    }*/
    return (
        <div className='Person' /*style={style}*/>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type = "text" onChange={props.change} value={props.name}></input>
        </div>

    
    )
};

export default person;