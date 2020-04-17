import React from 'react';
import Person from './Person/Person';

const persons = props => {

    if(!props.showPersons) {
        return null;
    }

    return props.persons.map((person, index) => {
        return <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    clicked={() => props.clicked(index)}
                    changed={(event) => props.changed(event.target.value, person.id)} >
                    My Hobbies: Racing
              </Person>
    });
}



export default persons;