import React, { useEffect, useRef, useContext } from 'react';
import classes from './cockpit.css';
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext);

    useEffect( () => {
      console.log("Cockpit.js useEffect");
      toggleButtonRef.current.click();
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
    if(props.personsLength <=2){
      assignedClasses.push(classes.red) //classes = ['red']
    }
    if(props.personsLength<=1){
      assignedClasses.push(classes.bold) //classes =['red','bold']
    }
    return(
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className ={assignedClasses.join(' ')}>Tengo 20 años</p>
            <button 
              ref={toggleButtonRef}
              className = {btnClass}
              onClick={props.clicked}>Toggle Persons
            </button>
              <button onClick={authContext.login}>Login</button>
        </div>
    )
}

export default React.memo(cockpit) ;