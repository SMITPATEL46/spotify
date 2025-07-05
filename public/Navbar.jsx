import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSpotify, FaHome, FaSearch } from 'react-icons/fa';
import { BsBoxArrowInDown } from 'react-icons/bs';
import './Nav.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(prev => !prev);
  };

  return (
    <div className="spotify-navbar">
      {/* Left side */}
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
          <BsBoxArrowInDown  className="download-icon" />
        </div>
      </div>

      {/* Right side */}
      <div className="navbar-right">
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
    </div>
  );
};

export default Navbar;
