import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movieList,deletovie,MovieSeen,nameSearch,ratingSearch}) => {
    console.log(movieList)
  return (
    <div>
        {movieList.filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((e,i)=>(   <MovieCard  movieList={e} key={i} deletovie={deletovie} MovieSeen={MovieSeen} />))}
     
    </div>
  )
}

export default MovieList