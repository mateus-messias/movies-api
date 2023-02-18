import React, { useEffect, useState } from 'react'
import {FaStar} from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState([])

  const getMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setMovie(data)   
    console.log(url);
  }

  useEffect(() => {
    getMovie(`http://www.omdbapi.com/?apikey=33f3ff66&i=${id}`);
  }, [])

  const {Poster, Title, Plot, Year, Runtime, imdbRating} = movie

  return (
    <section className='container'>
      <img src={Poster} alt={Title} /> 
      <div>
        <div>
          <h2>{Title}</h2>   
          <p>{Year}</p>
        </div>
        <p>{Plot}</p>
        <p>{Runtime}</p>       
        <p><span><FaStar/> </span>{imdbRating}</p>        
      </div>     
    </section>
  )
}

export default SingleMovie