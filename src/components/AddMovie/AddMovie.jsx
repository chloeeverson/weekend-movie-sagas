import React, {useState}from 'react';
import { useDispatch } from 'react-redux';

function AddMovie(){
    const dispatch = useDispatch();
    //set states for input items
    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');

    const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
    }, [])


    const submitMovie = (e) => {
        e.preventDefault();
        // send new movie data to saga => reducer => server
        dispatch({ type: 'ADD_MOVIE', payload: { title: title, description: description }});

    }

    return (
        <div>
            <h3>Add Movie</h3>
            <form onSubmit={submitMovie}>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type='text' value={poster} onChange={(e) => setPoster(e.target.value)} />
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type='submit' value='Save' />
                <select>
                    {genres.map(item => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })}
                </select>
            </form>
        </div>
    );

}

export default AddMovie;