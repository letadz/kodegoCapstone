// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header style={{ display: "flex", justifyContent: "space-between" }}>
//       <div className="header_left">
//         <Link to='/' className="header_logo">
//           <div className="logo">logo here</div>
//         </Link>
//       </div>
//       <div className="header_middle">
//         <Link to="/">Home</Link>
//         <a href="#services">Services</a>
//         <a href="#about">About Us</a>
//         <a href="#contacts">Contacts</a>
//       </div>
//       <div className="header_right">
//         <Link to="/login">Login</Link>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div id="home" className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-login-register">
        <div className="navbar-login">
          <Link to="/login">Login</Link>
        </div>
        <div className="navbar-register">
          <Link to="/login">Register</Link>
        </div>
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
              <div className="navbar-menu_container-links-login">
                <p>
                  <Link to="/login">Login</Link>
                </p>
              </div>
              <div className="navbar-menu_container-links-login">
                <p>
                  <Link to="/login">Register</Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
