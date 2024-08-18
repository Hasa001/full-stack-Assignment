import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="images/logo.png" className="logo" alt="logo" />
        <h2>Abstract | Help Center</h2>
      </div>
      <div className="header-right">
        <button className="request-button">Submit a request</button>
      </div>
    </header>
  );
}

export default Header;
