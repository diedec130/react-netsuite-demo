import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { 
        id: 'Eins',
        name: 'Max',
        age: 28
      },
      {
        id: 'Zwei',
        name: 'Manu',
        age: 29
      },
      {
        id: 'Drei',
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'some other value', 
    showPersons: false
  }

  nameChangedHandler = (newName, id) => {
    let persons = [...this.state.persons];
    
    let personToUpdate = persons.find( person => {
      return person.id === id;
    });

    personToUpdate.name = newName;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render () {
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons= {this.state.persons} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/>
        <Persons
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      </div>
    );
  }
}

export default App;
