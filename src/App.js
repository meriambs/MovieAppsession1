import React, { useState } from 'react'
import AddMovie from './Component/AddMovie/AddMovie';
import MovieList from './Component/MovieDisplay/MovieList';
import SearchMovie from './Component/SearchMovie/SearchMovie';
import {moviesData} from './MovieData'
const App = () => {
  const [movieList,setMovieList]=useState(moviesData);

  //ici partie rating : 
  const [nameSearch,setNAmeSearch]=useState('');
const [ratingSearch,setRatingSearch]=useState(1);



  const deletovie=(ID)=>{
    setMovieList(
      movieList.filter((e)=> e.id !== ID )
    )
  }

  const MovieSeen=(ID)=>{
setMovieList(
  movieList.map((e)=> e.id === ID ? {...e,isDone : !e.isDone} : e)
)
  }

  //part add movie 

  const Addmoviehandeler=(newMovie)=>{
setMovieList(
  [...movieList,newMovie]
)
  } 





   return (
    <div>MovieApp
      <SearchMovie  
      setNAmeSearch={setNAmeSearch}
       ratingSearch={ratingSearch}  
         setRatingSearch={setRatingSearch}/>

      <MovieList
       movieList={movieList}
        deletovie={deletovie} 
         MovieSeen={MovieSeen} 
         nameSearch={nameSearch} 
         ratingSearch={ratingSearch}  />

      
      <AddMovie  
       Addmoviehandeler={Addmoviehandeler}/>



    </div>
  )
}

export default App