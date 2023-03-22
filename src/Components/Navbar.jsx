import React from 'react'
import { useState, useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'

import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({search}) => {
  const [movieSearch, setMovieSearch] = useState('')
    
  const handleSubmit = (e) => {
    e.preventDefault()
    search(movieSearch)
    setMovieSearch('')
  }

  useEffect(() => {
    search()
  }, [])

  return (
    <nav className='navbar'>        
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder='Search for movies or series'
                  onChange={(e) => setMovieSearch(e.target.value)}
                />
                <button type='submit'><FaSearch/></button>
            </form>
        </div>
    </nav>
  )
}

export default Navbar