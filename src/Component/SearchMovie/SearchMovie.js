import React from 'react'
import Rate from '../Rating/Rate'

const SearchMovie = ({setNAmeSearch,ratingSearch,setRatingSearch}) => {
  return (
    <div>
         <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
         onChange={(e)=>setNAmeSearch(e.target.value)}
        />
        <div className="rating-search">
         <Rate     rating={ratingSearch}   setRatingSearch={setRatingSearch}  />
        </div>
      </div>
    </div>
    </div>
  )
}

export default SearchMovie