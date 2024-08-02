import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Job Portal</h5>
            <p>Your go-to platform for finding the best job opportunities with top companies.</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-logo" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-logo" />
            </a>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@jobportal.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>&copy; 2024 Job Portal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
