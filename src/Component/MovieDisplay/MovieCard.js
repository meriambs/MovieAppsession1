import React from 'react'
import './MovieCard.css';
import ReactStars from 'react-stars'
const MovieCard = ({movieList:{id,image,name,date,description,rating,isDone},deletovie,MovieSeen}) => {

  return (
    <div>
      <div className="card">
          
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right" style={isDone ? { backgroundColor: "red" } : {}}>
      <button onClick={()=>deletovie(id)}>remove</button>
      <button  onClick={()=>MovieSeen(id)}> {isDone ? 'yep':"notyet"} </button>
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>
            <ReactStars
  count={5}
  activeColor="#ffd700"
  value={rating}
  color2={'#ffd700'} 
  edit={false}
   />
  </li>
          </ul>
        </div>
        <div className="card_right__rating">
          {/* <Rate rating={rating} /> */}
        </div>
        <div className="card_right__review">
          <p>{description}</p>
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div className="card_right__button">
          <a href="https://www.imdb.com/?ref_=nv_home">WATCH TRAILER</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MovieCard