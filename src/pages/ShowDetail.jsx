import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CastCard from '../components/CastCard'

function stripHtml(html) {
  if (!html) return ''
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}

export default function ShowDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    setCast([]);
    setShow(null);

    Promise.all([
      fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Show not found.')
        }
        return res.json();
      }),
      fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not load cast.');
        }
        return res.json();
      }),
    ])
    .then(([showData, castData]) => {
      setShow(showData)
      setCast(castData);
    })
    .catch((err) => {
      setError(err.message || 'Something went wrong.')
    })
    .finally(() => {
      setLoading(false);
    })
  }, [id])

  const summary = stripHtml(show?.summary)
  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)}>Back</button>
      {loading && <p>Loading show...</p>}
      {loading && !error && <p>{error}</p>}
      {!loading && !error && show && (
        <>
        {show.image?.medium ? (
          <img src={show.image.medium} alt={show.name}/>
        ) : (
          <div className='place-holder'>No poster available</div>
        )}
        <h1>{show.name}</h1>
        <p>Genre : {show.genres?.join(', ') || 'N/A'}</p>
        <p>Language : {show.language || 'N/A'}</p>
        <p>Premiere date : {show.premiered || 'N/A'}</p>
        <p>Genres : {show.rating?.average ?? 'N/A'}</p>
        <p>{summary}</p>

        <h2>Cast</h2>
        <div className='cast-list'>
          {cast.map((member) => (
            <CastCard key={`${member.person.id} - ${member.character?.id}`} member={member} />
          ))}
        </div>
        </>
      )}
    </div>
  )
}
