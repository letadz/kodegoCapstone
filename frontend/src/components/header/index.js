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
        <a href="#services">Services</a>
      </div>
      <div className="header_right">
        <Link to="/login">
          <div>Login</div>
        </Link>
        <Link to="/register">
          <div>Register</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
