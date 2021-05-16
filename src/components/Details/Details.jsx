import {useParams} from 'react-router-dom';
import {useSelector, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import React from 'react'


function Details() {
    // const {id} = useParams();
    
    // const dispatch = useDispatch();

    // const reduxStore = useSelector(store => store);
    const movies = useSelector(store => store.movies);

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
       console.log('logging details', movies);   
    }, [])

    return(
        <div>
            {/* {JSON.stringify(reduxStore.details)} */}
            {/* <p>Details for movie with id of {id}</p> */}
         
            {/* {details.map((item) => {
                return (

                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.poster} />
                    <h3>{item.description}</h3>
                    <h3>{item.genre}</h3>
                </div>
                )
            })}      */}
        </div>
    )
    
    

}

export default Details;