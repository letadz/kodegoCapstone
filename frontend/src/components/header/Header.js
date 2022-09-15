import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "../../images/logo/MagsLogo.png";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div id="header" className="header">
        <div className="header-container container">
          <Link to="/" className="header-logo">
            <img src={Logo} alt="logo" className="logo" />
          </Link>

          <nav className="nav-items">
            <Link to="/" className="nav-item">
              Home
            </Link>
            <a href="#services" className="nav-item">
              Services
            </a>
            <a href="#about" className="nav-item">
              About Us
            </a>
            <a href="#contacts" className="nav-item">
              Contacts
            </a>
          </nav>

          <div className="header-btn">
            <Link to="/login" className="btn-login">
              Login
            </Link>
          </div>

          {/* MOBILE MENU */}
          <nav className="menu">
            {toggle ? (
              <HiOutlineX
                size={32}
                color="#000"
                onClick={() => setToggle(false)}
              />
            ) : (
              <HiMenuAlt3
                size={32}
                color="#000"
                onClick={() => setToggle(true)}
              />
            )}
            {toggle && (
              <div className="navbar-menu_container swing-in-top-fwd">
                <div className="navbar-menu_container-links ">
                  <nav className="nav-menu">
                    <Link to="/" className="menu-item">
                      Home
                    </Link>
                    <a href="#services" className="menu-item">
                      Services
                    </a>
                    <a href="#about" className="menu-item">
                      About Us
                    </a>
                    <a href="#contacts" className="menu-item">
                      Contacts
                    </a>
                  </nav>

                  <div className="menu-btn">
                    <Link to="/login" className="btn-menu">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
