import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function AddMovie() {
    const dispatch = useDispatch();
    //set states for input items
    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');
    let [genre, setGenre] = useState(1);

    //create variable to access history function
    const history = useHistory();

    //create variable for stored genre data in order to access
    const genres = useSelector(store => store.genres);

    //grab genres from store on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
    }, [])


    const submitMovie = (e) => {
        e.preventDefault();
        // send new movie data to saga => reducer => server
        dispatch({ type: 'ADD_MOVIE', payload: { title: title, poster: poster, description: description, genre_id: genre } });
        //transfer back to main page on submit
        history.push('/');
    }


    return (
        <div>
            <h3>Add Movie</h3>
            {/* form for input values */}
            <form onSubmit={submitMovie}>
                <input type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type='text' placeholder='poster url' value={poster} onChange={(e) => setPoster(e.target.value)} />
                <input type='text' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Genre:</label>
                {/* loop through and render all genres from genre array */}
                <select onChange={(e) => setGenre(e.target.value)}>
                    {genres.map(item => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })}
                </select>
                <input type='submit' value='Save' />

            </form>
        </div>
    );

}

export default AddMovie;