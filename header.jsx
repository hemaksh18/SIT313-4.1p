import React from 'react';
import './header.css';
import Searchingbar from './Searchingbar';

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        DEV@Deakin
      </div>
      <div className="navbar-item search">
        <div className="ui right aligned category search">
        <Searchingbar/>
        </div>
      </div>
      <div className="buttons">
        <button className="navbar-button">Post</button>
        <button className="navbar-button">Login</button>
      </div>
    </div>
  );
}

export default Header;