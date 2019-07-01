import React, { useEffect } from 'react';
import classes from './cockpit.css';

const cockpit = (props) => {
    useEffect( () => {
      console.log("Cockpit.js useEffect");
      setTimeout(()=>{
        alert('Save data to the cloud')
      },1000)
      return () =>{
        console.log("Cockpit clean up");
        
      }
    }, []);

    useEffect(()=>{
      console.log("Cockpit second useEffect");
      
      return () =>{
        console.log("Cockpit clean up work with 2nd useEffect");
      }
    })
    const assignedClasses =[]
    let btnClass = ''
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length <=2){
      assignedClasses.push(classes.red) //classes = ['red']
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold) //classes =['red','bold']
    }
    return(
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className ={assignedClasses.join(' ')}>Tengo 20 años</p>
            <button
              className = {btnClass}
              onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit ;