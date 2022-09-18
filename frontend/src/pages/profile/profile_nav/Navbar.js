import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import LoggedInHeader from "../../../components/headerUser";

const Navbar = () => {
  const { user } = useSelector((user) => ({ ...user }));

  return (
    <>
      <LoggedInHeader />
      <div className="user_container">
        <div className="navigation">
          <div className="navigation_name">
            <div className="profile_pic">
              <img src={user.picture} alt="" />
            </div>

            <div className="profile_text">
              <span>{user.first_name}</span>
              <span>{user.email}</span>
            </div>
          </div>

          <div className="menu">
            <Link
              to="/profile/cars"
              className="navbar-links_link navigation-page"
            >
              Cars
            </Link>
            <Link
              to="/profile/history"
              className="navbar-links_link navigation-page"
            >
              Service History
            </Link>
            <Link to="/profile/settings" className="navbar-links_link cta-btn">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
