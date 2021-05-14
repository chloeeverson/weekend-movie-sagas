function MovieItem(movie){
    return(
        <>
            <h3>{movie.movie.title}</h3>
            <img src={movie.movie.poster} alt={movie.movie.title}/>
        </>
    )
}

export default MovieItem;