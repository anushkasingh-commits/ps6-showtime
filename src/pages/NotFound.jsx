import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className='not-found'>
      <span className='eyebrow'>ERROR 404</span>
      <h1>Page not found</h1>
      <p>
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to='/' className='home-button'>Bake to home</Link>
    </main>
  )
}
