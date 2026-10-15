import React from 'react'

export default function CastCard({member}) {
  const {person, character} = member
  return (
    <div className='cast-card'>
      {person.image?.medium ? (
        <img src={person.image.medium} alt={person.name} loading='lazy' />
      ) : (
        <div className='poster-placeholder'>No photo</div>
      )}
      <h3>{person.name}</h3>
      <p>as {character.name || 'Unknown'}</p>
    </div>
  )
}
