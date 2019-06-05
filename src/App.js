import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot}from 'radium';
class App extends Component {
  state ={
    persons :[
      {id: "aaaa", name:'Ahiram', age:'20'},
      {id: "dddd", name:'Paola', age:'20'},
      {id: "wwww", name:'Regina', age:'20'},
    ],
    showpersons: false
  }

  /*switchNameHandler = (newName) =>{
    console.log('OK')
    //DON'T DO THIS this.state.persons[0].name='Shrek';
    this.setState({
      persons: [
      {name:newName, age:'20'},
      {name:'Paola', age:'20'},
      {name:'Regina', age:'30'},
      ]
    })
  }*/

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice() //obtenemos personas
    const persons = [...this.state.persons]
    persons.splice(personIndex,1) // eliminamos persona con ese index
    this.setState({persons:persons}) //actualizamos personas en el estado
  }

  nameChangedHandler = (event,id) =>{
    //Encontramos a la persona en el arreglo por el index
    const PersonIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    })
    //creamos a la persona quetiene ese index
    const person = {...this.state.persons[PersonIndex]};
    //le asignamos a la persona el nuevo nombre que escribimos
    person.name=event.target.value;
    //hacemos una copia del arreglo original par no afectarlo
    const persons = [...this.state.persons]
    //a ese arreglo le agregamos la persona nteriormente creada en el index indicado
    persons[PersonIndex] = person 
    //asignamos el estado al nuevo arreglo ya modificados
    this.setState({persons:persons})
  }
  //aparecer o desaparecer el div según corresponda
  togglePersonsHandler = () =>{
    const doesShow = this.state.showpersons
    this.setState({
      showpersons:!doesShow
    })
  }
  render() {
    //aquí es código normal
    let persons =  null;
    const style ={
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
      margin:'0% 5%',
      /*':hover':{
        backgroundColor: 'lightgreen',
        color:'black'
      }*/
     
    };
    if(this.state.showpersons){
      persons = (
        
        <div >
          {this.state.persons.map((person,index) =>{
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            change = {(event)=> this.nameChangedHandler(event,person.id)}
            >
            
            </Person>
          })}
           
        </div>
      );
      style.backgroundColor='red';
      /*style[':hover']={
        backgroundColor: 'salmon',
        color:'black'
      }*/
      
    }
    const classes =[]
    //let classes = ['red','bold'].join(' ');

    if(this.state.persons.length <=2){
      classes.push('red') //classes = ['red']
    }
    if(this.state.persons.length<=1){
      classes.push('bold') //classes =['red','bold']
    }
    return (
      <div className= 'App'>
        <h1>Hola, soy Ahiram</h1>
        <p className ={classes.join(' ')}>Tengo 20 años</p>
        <button
          style ={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
       
        {persons}
        
        
      </div>

    );
    //return React.createElement('div',{className: 'App' },React.createElement('h1',null,'Hola,Soy Ahiram'))
  }
}
/*
const app = props => {
    const [personsState,setPersonsState] = useState (
      {
        persons :[
          {name:'Ahiram', age:'20'},
          {name:'Paola', age:'20'},
          {name:'Regina', age:'20'},
        ]
    });

    const [otherState,setOtherState] = useState('other value')
    console.log(personsState,otherState)
    const switchNameHandler = () =>{
        console.log('OK')
        //DON'T DO THIS this.state.persons[0].name='Shrek';
        setPersonsState({persons: [
          {name:'Shrek', age:'20'},
          {name:'Paola', age:'20'},
          {name:'Regina', age:'30'},
        ]
      
    });
      }
    return (
      <div className= 'App'>
        <h1>Hola, soy Ahiram</h1>
        <p>Tengo 20 años</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
          My hobbie is stalking
        </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        
      </div>
    );

    */
    //return React.createElement('div',{className: 'App' },React.createElement('h1',null,'Hola,Soy Ahiram'))
  


export default App;
