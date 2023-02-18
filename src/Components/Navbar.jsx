import React from 'react'
import { useState, useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'
import {BiCameraMovie} from 'react-icons/bi'

import './Navbar.css'

const Navbar = ({search}) => {
  const [movieSearch, setMovieSearch] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    search(movieSearch)
    // console.log(movieSearch);

  }

  useEffect(() => {
    search()
  }, [])

  return (
    <nav className='navbar'>
        <div className='logo'><BiCameraMovie/></div>
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  onChange={(e) => setMovieSearch(e.target.value)}
                />
                <button type='submit'><FaSearch/></button>
            </form>
        </div>
    </nav>
  )
}

export default Navbar