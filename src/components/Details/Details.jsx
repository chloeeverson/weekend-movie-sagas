
import { useSelector } from 'react-redux';
import { useEffect } from 'react'

import React from 'react'


function Details() {



    const details = useSelector(store => store.details);

    // const movies = useSelector(store => store.movies);



    useEffect(() => {
        console.log('logging details', details);
    }, [])

    return (
        <div>
        
            {/* <p>Details for movie with id of {id}</p> */}
            {details[0] == undefined ? (
                <p>test</p>
            ) : (

                

                    <>
                    
                        <h3>{details[0].title}</h3>
                        <img src={details[0].poster} />
                        <h3>{details[0].description}</h3>
                   </>     
                
            )}


       

        </div>
    )



}

export default Details;