
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import React from 'react'


function Details() {
    //create variable in order to access dispatch function 
    const dispatch = useDispatch();
    //grabbing details from store
    const details = useSelector(store => store.details);
    //grabbing movie_genre combo data from store
    const movieGenre = useSelector(store => store.movieGenre);


    //on load of page fetch the movie_genre combo data
    useEffect(() => {
        console.log('logging details', details);
        dispatch({ type: 'FETCH_MOVIE_GENRE' })
    }, [])

    return (
        <div>
            {/* if specific movie detail is undefined return empty otherwise return movie details */}
            {details[0] == undefined ? (
                ''
            ) : (
                <>
                    {/* accessing properties of details specific to movie id and rendering those to dom */}
                    <h3>{details[0].title}</h3>
                    <img src={details[0].poster} />
                    <h3>{details[0].description}</h3>
                </>
            )}

            <ul>Genre:
            {/* looping through movie_genre array to find genres specific to movie */}
                {movieGenre.map(item => {
                    //if the movie id is equal to the movie id for this detail page then continue action
                    if (item.movie_id == details[0].id) {
                        //whatever genre ids are attached to that movie 
                        //- rendor genre names specific to that genre _ id in genre database table
                        if (item.genre_id === 1) {
                            return (
                                <li>Adventure</li>
                            )
                        }
                        else if (item.genre_id === 2) {
                            return (
                                <li>Animated</li>
                            )

                        }
                        else if (item.genre_id === 3) {
                            return (
                                <li>Biographical</li>
                            )

                        }
                        else if (item.genre_id === 4) {
                            return (
                                <li>Comedy</li>
                            )

                        }
                        else if (item.genre_id === 5) {
                            return (
                                <li>Disaster</li>
                            )

                        }
                        else if (item.genre_id === 6) {
                            return (
                                <li>Drama</li>
                            )

                        }
                        else if (item.genre_id === 7) {
                            return (
                                <li>Epic</li>
                            )

                        }
                        else if (item.genre_id === 8) {
                            return (
                                <li>Fantasy</li>
                            )

                        }
                        else if (item.genre_id === 9) {
                            return (
                                <li>Musical</li>
                            )

                        }
                        else if (item.genre_id === 10) {
                            return (
                                <li>Romantic</li>
                            )

                        }
                        else if (item.genre_id === 11) {
                            return (
                                <li>Science Fiction</li>
                            )

                        }
                        else if (item.genre_id === 12) {
                            return (
                                <li>Space-Opera</li>
                            )

                        }
                        else {
                            return (
                                <li>Superhero</li>
                            )

                        }
                    }

                })}
            </ul>
        </div>
    )



}

export default Details;