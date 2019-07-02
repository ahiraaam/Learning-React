import React , {Component, Fragment} from 'react';
import Aux from '../../../hocs/Aux';
import classes from './Person.css'
import withClass from '../../../hocs/withClass'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

//mport Radium from 'radium';

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render(){
        console.log("Person.js rendering...");
        return (
            <Aux>
                {this.context.authenticated ?( 
                    <p> Authenticated</p>)
                    : (<p>Please log in</p>)
                }
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input 
                    key="i3"
                    ref={this.inputElementRef}
                    type = "text"
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
            </Aux>       
         )
    }
};

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass(Person,classes.Person);