import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="logo">logo here</div>
        </Link>
      </div>
      <div className="header_middle">
        <Link to="/">Home</Link>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contacts">Contacts</a>
      </div>
      <div className="header_right">
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;
