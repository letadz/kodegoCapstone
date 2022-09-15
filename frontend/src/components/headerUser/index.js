import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LoggedInHeader = () => {
  const { user } = useSelector((user) => ({ ...user }));
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
        <Link to="/profile">
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
        </Link>
      </div>
    </header>
  );
};

export default LoggedInHeader;
