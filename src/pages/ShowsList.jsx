import React, { useState, useEffect } from 'react';
import ShowCard from '../components/ShowCard';

export default function ShowsList() {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows?page=0')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch shows.');
                }
                return res.json();
            })
            .then((data) => {
                setShows(data.slice(0, 40));
            })
            .catch((err) => {
                setError(err.message || 'Something went wrong.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const  filteredShows = shows.filter((show) => 
        show.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="shows-page">
            <section className="shows-hero">
                <span className="eyebrow">YOUR NEXT OBSESSION STARTS HERE</span>
                <h1>
                    Stories worth
                    <br />
                    staying up for.
                </h1>
                <p>
                    Explore unforgettable series, discover new favorites,
                    and find your next great watch.
                </p>

                <div className="hero-meta">
                    <span>THE COLLECTION</span>
                    <span>{shows.length} SHOWS</span>
                </div>
            </section>

            <section className="shows-section">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">CURATED FOR YOU</span>
                        <h2>Explore shows</h2>
                    </div>
                    <span className="section-count">
                        {shows.length} titles
                    </span>
                </div>

                {loading && (
                    <p className="status-message">Loading your next favorite...</p>
                )}

                {!loading && error && (
                    <p className="status-message">{error}</p>
                )}

                {!loading && !error && (
                    <>
                    <input type='text' className='search-input' placeholder='Search shows by name...' 
                    value={search} onChange={(e) => setSearch(e.target.value)} />
                    {filteredShows.length === 0 ? (
                        <p className='status-message'>No shows match your search.</p>
                    ) : (
                        <div className='shows-list'>
                            {filteredShows.map((show) => (
                                <ShowCard key={show.id} show={show} />
                            ))}
                        </div>
                    )}
                    </>
                )}
            </section>
        </main>
    );
}
