// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./style.css";
import Logo from "../../images/logo/MagsLogo.png";

const Menu = () => (
  <>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <a href="#services">services</a>
    </p>
    <p>
      <a href="#about">about us</a>
    </p>

    <p>
      <a href="#contacts">contacts</a>
    </p>
  </>
);

const LoggedInHeader = () => {
  const { user } = useSelector((user) => ({ ...user }));
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div id="home" className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <a href="#home">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-book">
        <Link to="/profile">
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
        </Link>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#020202"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#020202"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container swing-in-top-fwd">
            <div className="navbar-menu_container-links ">
              <Menu />
              <div className="navbar-menu_container-links-book">
                <Link to="/profile">
                  <img src={user?.picture} alt="" />
                  <span>{user?.first_name}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoggedInHeader;
