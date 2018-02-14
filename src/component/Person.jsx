import React from 'react';

function Person(props) {
    return (
        <div className="rcorners">
            <h2>{ props.config.name } <i class="fas fa-users"></i>

 </h2>
            <p>Age: { props.config.age }</p>
            <p>Gender: { props.config.gender }</p>
            <p>Hair color: { props.config.hair_color }</p>
        </div>
    );
}

export default Person;