import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import Movies from '../Components/Movies'

const API_ENDPOINT = import.meta.env.VITE_API
const API_KEY = import.meta.env.VITE_API_KEY

const Home = () => {
  const [movies, setMovies] = useState([])
  const [error, setError]  = useState(false)

  const fetchMovies = async (query) => {
    const response = await fetch(`${API_ENDPOINT}${API_KEY}&s=${!query ? 'movie' : query}`)
    const data = await response.json()     
    setMovies(data.Search)

    if(data.Response === 'False'){      
      setError(true)
    } else {
      setError(false)
    }    
  }  

  return (
    <div>
      <Navbar search={fetchMovies}/>
      <div className='container'>
        {
          error ? 
            <h2 className='error'>TITLE NOT FOUND</h2>
          : 
            <Movies moviesList={movies}/>
        }        
      </div> 
    </div>
  )
}

export default Home