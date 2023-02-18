import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import Movies from '../Components/Movies'


const Home = () => {
  const [movies, setMovies] = useState([])

  const fetchMovies = async (query) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=33f3ff66&s=${!query ? 'movie' : query}`)
    const data = await response.json()
    setMovies(data.Search) 
  }  

  return (
    <div>
      <Navbar search={fetchMovies}/>
      <div className='container'>
        <Movies moviesList={movies}/>
      </div> 
    </div>
  )
}

export default Home