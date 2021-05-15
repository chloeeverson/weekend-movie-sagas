import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Header(){

    const [toggle, setToggle] = useState(false)
    const history = useHistory();


    return(
        <>
            <h1>The Movies Saga!</h1>
            
        </>
    )
}

export default Header;