import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hocs/withClass';
import Aux from '../hocs/Aux'
import AuthContext from '../context/auth-context'
//import Radium, {StyleRoot}from 'radium';
class App extends Component {

  constructor(props){
    super(props);
    console.log("App.js constructor");

  }


  state ={
    persons :[
      {id: "aaaa", name:'Ahiram', age:20},
      {id: "dddd", name:'Paola', age:20},
      {id: "wwww", name:'Regina', age:20},
    ],
    showpersons: false,
    showCockpit:true,
    changeCounter:0,
    authenticated: false
  }

  static getDerivedStateFromProps(props,state){
    console.log("App.js getDerivedStateFromProps", props);
    return state;
    
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
  shouldComponentUpdate(nextProps,nextState){
    console.log(("App.js shouldComponentUpdte"));
    return true;
  }
  componentDidUpdate(){
    console.log("App.js componentDidUpdate")
  }
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
    this.setState((prevState,props)=>{
       return {
        persons:persons, 
        changeCounter: prevState.changeCounter+1,
      };
    });
  }
  //aparecer o desaparecer el div según corresponda
  togglePersonsHandler = () =>{
    const doesShow = this.state.showpersons
    this.setState({
      showpersons:!doesShow
    })
  }

  loginHandler = () =>{
    this.setState({authenticated:true});
  }
  render() {
    //aquí es código normal
    console.log("Render")
    let persons =  null;
    /*const style ={
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
      margin:'0% 5%',
      ':hover':{
        backgroundColor: 'lightgreen',
        color:'black'
      }
     
    };*/
    if(this.state.showpersons){
      persons =(
            <Persons
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed = {this.nameChangedHandler}
              isAuthenticated = {this.state.authenticated}
            />);
    }
    
    return (
      <Aux>
        <button onClick={()=>{
          this.setState({showCockpit:false,})
        }}>
          Remove cockpit
        </button>
        <AuthContext.Provider value={{
            authenticated:this.state.authenticated, 
            login:this.loginHandler
        }}>
          {this.state.showCockpit ? (
          <Cockpit 
                title = {this.props.appTitle}
                showPersons = {this.state.showPersons}
                personsLength = {this.state.persons.length}
                clicked = {this.togglePersonsHandler}
               />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
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
  


export default withClass(App,classes.App);
