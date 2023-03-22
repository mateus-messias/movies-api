import React from 'react'
import { Link } from 'react-router-dom'
import './Movies.css'

const Movies = ({moviesList}) => {
  return (  
    <section className='movie-container'>    
      {moviesList.map((movie) => {
        const {Poster, Title, Year, imdbID} = movie
        return(
          <div key={imdbID} className='movie-card'>
            <img src={Poster}/>
            <h2>{Title}</h2>            
            <p>Year: {Year}</p>
            <Link to={`/movie/${imdbID}`}><button>details</button></Link>                        
          </div>
        )
      })}
    </section> 
  )
}

export default Movies