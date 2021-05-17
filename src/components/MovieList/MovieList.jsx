import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    //create variable to access history function
    const history = useHistory();

    //create variable to access dispatch function
    const dispatch = useDispatch();

    //create variable for accessing movies reducer
    const movies = useSelector(store => store.movies);

    //on page load fetch movies from store
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //when click on certain movie poster - got to details view and fetch that movies details
    const moveToDetail = (id) => {
        console.log('movie clicked');
        history.push(`/details`)
        dispatch({ type: 'FETCH_DETAILS', payload: id })

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* loop through movies array and render all movie objects and their properties to dom */}
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => moveToDetail(movie.id)} />
                        </div>
                    );
                })}

            </section>
        </main>

    );
}

export default MovieList;