import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
// import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
    //create variable to access history function
    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
           
                {movies.map(movie => {
                   
                        // <MovieItem key={movie.id} movie={movie}/> 
                    function moveToDetail(){
                        console.log('movie clicked');
                        history.push(`/details/${movie.id}`)
                    }
                    return (
                        
                        <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <img onClick={moveToDetail} src={movie.poster} alt={movie.title}/>
                        </div> 
                    );
                })}
                
            </section>
        </main>

    );
}

export default MovieList;