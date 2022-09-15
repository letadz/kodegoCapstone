import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="company-info">
            <h5 className="company-title">Company Information</h5>
            <a href="/">
              <span>Home</span>
            </a>
            <a href="#about">
              <span>About Us</span>
            </a>
            <a href="#services">
              <span>Services</span>
            </a>
            <a href="#testimonials">
              <span>Testimonials</span>
            </a>
          </div>

          <div className="online-support">
            <h5 className="online-title">Online Support</h5>
            <a href="/">
              <span>Customer Care</span>
            </a>
            <a href="/">
              <span>Chat</span>
            </a>
            <a href="/">
              <span>Email Address</span>
            </a>
          </div>

          <div className="social-apps">
            <h5 className="social-title">MAG's Social</h5>
            <div className="social-logo">
              <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                <FaFacebookF size={22}/>
              </a>
              <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.twitter.com/" rel="noreferrer" target="_blank">
                <FaTwitter size={22} />
              </a>
              <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
