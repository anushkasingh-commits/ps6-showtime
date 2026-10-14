import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <span className="brand-mark">S</span>
          <span>showtime<span className="brand-dot">.</span></span>
        </Link>

        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/shows"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Discover
          </NavLink>
        </div>

        <span className="navbar-tagline">FIND YOUR NEXT FAVORITE</span>
      </nav>
    </header>
  );
}
