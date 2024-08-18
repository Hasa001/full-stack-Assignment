import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Abstract</h4>
          <p>Branches</p>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribbble</p>
          <p>Podcast</p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>info@abstract.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <img src="images/logo.png" className='logo' alt="logo" />
        <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
