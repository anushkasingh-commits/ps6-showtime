
import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowCard({ show }) {
  return (
    <article className="show-card">
      <Link
        to={`/shows/${show.id}`}
        className="show-card-poster"
      >
        {show.image?.medium ? (
          <img
            src={show.image.medium}
            alt={show.name}
            loading="lazy"
          />
        ) : (
          <div className="poster-placeholder">
            No poster available
          </div>
        )}

        <div className="show-card-overlay">
          <span className="show-card-category">
            TV SERIES
          </span>
          <span className="show-card-details">
            View details ↗
          </span>
        </div>
      </Link>

      <div className="show-card-info">
        <h3>
          <Link to={`/shows/${show.id}`}>
            {show.name}
          </Link>
        </h3>

        <p className="show-card-genres">
          {show.genres?.length
            ? show.genres.slice(0, 3).join(' · ')
            : 'Genre not available'}
        </p>

        <div className="show-card-footer">
          <span>
            ★ {show.rating?.average ?? 'N/A'}
          </span>
          <span>{show.language || 'Unknown'}</span>
        </div>
      </div>
    </article>
  );
}
