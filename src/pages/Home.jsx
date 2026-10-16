import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className='home-page'>
      <section className='home-hero'>
        <span className='home-eyebrow'>Welcome to showtime</span>
        <h1>Find your next <br /> favorite series.</h1>
        <p>
          Browse a curated collection of TV shows, read their summaries,
          and see the full cast behind every story.
        </p>
        <Link to="/shows" className='home-button'>Browse Shows</Link>
        <div className="home-stats">
          <span>Ratings</span>
          <span>Cast lists</span>
          <span>Live from TVMaze</span>
        </div>
      </section>
    </main>
  )
}
