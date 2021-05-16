
import { useSelector } from 'react-redux';
import { useEffect } from 'react'

import React from 'react'


function Details() {


    //grabbing details from store
    const details = useSelector(store => store.details);




    useEffect(() => {
        console.log('logging details', details);
    }, [])

    return (
        <div>
        
            {/* <p>Details for movie with id of {id}</p> */}
            {details[0] == undefined ? (
                ''
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