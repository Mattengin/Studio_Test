import React from 'react';

function Movie(props) {
    return (
        <div className="rcorners">
            <h2>{ props.config.title } <i class="fas fa-film"></i>

</h2> 
            <p>{ props.config.description }</p>
        </div>
    );
}

export default Movie;