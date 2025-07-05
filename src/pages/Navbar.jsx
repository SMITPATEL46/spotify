import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSpotify, FaHome, FaSearch } from 'react-icons/fa';
import { BsBoxArrowInDown, BsList } from 'react-icons/bs';
import './Nav.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(prev => !prev);
  };

  return (
    <div className="spotify-navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <FaSpotify className="spotify-logo" size={28} />
        <Link to="/" className="icon-button">
          <FaHome size={20} />
        </Link>

        <div className={`search-box ${showSearch ? 'show' : ''}`}>
          <FaSearch className="search-icon" onClick={handleSearchClick} />
          <input
            type="text"
            placeholder="What do you want to play?"
            onFocus={() => navigate('/search')}
          />
          <BsBoxArrowInDown className="download-icon" />
        </div>
      </div>

      {/* Right Section (Desktop) */}
      <div className="navbar-right desktop-only">
        <Link to="/premium" className="nav-link">Premium</Link>
        <Link to="/support" className="nav-link">Support</Link>
        <Link to="/download" className="nav-link">Download</Link>
        <div className="vr" />
        <Link to="/install" className="nav-link d-flex align-items-center">
          <BsBoxArrowInDown className="me-1" />
          Install App
        </Link>
        <Link to="/signup" className="nav-link">Sign up</Link>
        <Link to="/login" className="login-button">Log in</Link>
      </div>

      {/* Hamburger and Dropdown (Mobile Only) */}
      <div className="mobile-only">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <BsList size={28} />
        </button>

        <div className={`mobile-dropdown ${menuOpen ? 'dropdown-open' : ''}`}>
          <Link to="/premium" className="dropdown-link">Premium</Link>
          <Link to="/support" className="dropdown-link">Support</Link>
          <Link to="/download" className="dropdown-link">Download</Link>
          <div className="dropdown-divider" />
          <Link to="/install" className="dropdown-link">Install App</Link>
          <Link to="/signup" className="dropdown-link">Sign up</Link>
          <Link to="/login" className="dropdown-link">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
