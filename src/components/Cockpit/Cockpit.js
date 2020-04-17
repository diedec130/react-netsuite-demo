import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = props => {
    let assignedClasses = [];

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    assignedClasses = assignedClasses.join(' ');

    let btnClasses = [classes.Button];

    if(props.showPersons) {
      btnClasses.push(classes.Red);
    }

    return <div>
                <h1>{props.title}</h1>
                <p className={assignedClasses}>This is really working!</p>
                <button className={btnClasses.join(' ')} onClick={props.clicked}>
                    Show/Hide Persons
                </button>
            </div>
}

export default cockpit;