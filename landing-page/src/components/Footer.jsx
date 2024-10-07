import React, { useState } from 'react';
import './Footer.css';
import logo from '../assets/images/logo.png'; // Ensure the path to the logo is correct
import facebookIcon from '../assets/images/facebook.png'; // Add your Facebook icon path
import twitterIcon from '../assets/images/twitter.png'; // Add your Twitter icon path
import instagramIcon from '../assets/images/instagram.png'; // Add your Instagram icon path
import youtubeIcon from '../assets/images/youtube.png'; // Add your YouTube icon path

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission
    console.log(`Name: ${name}, Email: ${email}`);
    setName('');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Caliber Nova Logo" className="footer-logo" />
        <div className="footer-courses">
          <h3 className="footer-title">Courses Offered</h3>
          <ul className="course-list">
            <li>9th 10th 12th</li>
            <li>MBA_CAT MBA_CET MCA_CET</li>
            <li>B.Com BCA B.Sc</li>
            <li>B.Sc IT BBA BCCA</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <p>Phone: <a href="tel:9595253778">9595253778</a></p>
          <p>Email: <a href="mailto:calibernova@gmail.com">calibernova@gmail.com</a></p>
        </div>
        <div className="footer-social">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="social-list">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-form">
        <h3 className="footer-title">Subscribe</h3>
        <form onSubmit={handleSubmit} className="subscribe-form">
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="input-field"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="input-field"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Caliber Nova. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
