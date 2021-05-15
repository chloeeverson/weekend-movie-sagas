import {useParams} from 'react-router-dom';

function Details(){
    const {id} = useParams();
    return(
        <p>Details for movie with id of {id}</p>
    )
    
    

}

export default Details;