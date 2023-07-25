import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ search, setSearch }) {
  return (
    <div className='Nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search Post</label>
        <input 
          type="text" 
          id='search'
          placeholder='Search Posts'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AddPost">AddPost</Link></li>
        <li><Link to="/Tutorials">Tutorials</Link></li>
        <li><Link to="/WebSites">WebSites</Link></li>
        <li><Link to="/Others">Others</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
      <h1>Nav-Bar</h1>
    </div>
  )
}
