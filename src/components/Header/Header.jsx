import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Header(){

    const [toggle, setToggle] = useState(false)
    const history = useHistory();

    const cancelClick = () => {
        setToggle(false);
        history.push('/');
    }

    const addMovieClick = () => {
        setToggle(true);
        history.push('/api/movie');
    }

    return(
        <>
            <h1>The Movies Saga!</h1>
            <div className="links">
                {toggle ? <h5 onClick={cancelClick}>Cancel</h5> : <h5 onClick={addMovieClick}>Add Movie</h5>}
            </div>
        </>
    )
}

export default Header;