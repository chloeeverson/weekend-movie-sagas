import {useParams} from 'react-router-dom';
import {useSelector, useEffect} from 'react';
import {useDispatch} from 'react-redux';


function Details(){
    const {id} = useParams();
    
    const dispatch = useDispatch();

    // const movies = useSelector(store => store.movies);

    // function details (){
    //     for (item of movies){
    //         if (item.id = {id} ){
    //             return item.title
    //         }
                    
    //     }
    // }

    // if item.id = {id} {
    //     return(
    //         {item.title}
    //     )
    // }

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS' })
    }, [])

    return(
        <div>
            {/* {details} */}
            <p>Details for movie with id of {id}</p>
            {/* {movies.map(item => {
                if (item.id = {id}) {
                return {item.title}
                
            }
                <FavoriteItem key={img.id} img={img} /> 
            )} */}
        </div>
    )
    
    

}

export default Details;