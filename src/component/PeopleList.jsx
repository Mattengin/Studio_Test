import React from 'react';
import Person from './Person';

function PeopleList(props){
    const renderList = props.people.map((person) =>
    <Person key={person.id} config={ person }  />
)
return( <div> { renderList } </div>)
}
export default PeopleList;