import React from 'react';
import Movie from './Movie';

function MovieList(props) {
    const renderList = props.films.map((film) => {
        return <Movie key={ film.id } config={ film } />;
    });

    return (
        <div>{ renderList }</div>
    );
}

export default MovieList;