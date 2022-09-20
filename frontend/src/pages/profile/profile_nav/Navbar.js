import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import LoggedInHeader from "../../../components/headerUser";
import "../style.css";

const Navbar = () => {
  const { user } = useSelector((user) => ({ ...user }));

  return (
    <>
      <div className="user_container">
        <div className="navigation">
          <Link to="/">Back to Home</Link>

          <Link className="navigation_name" to="/profile/home">
            <div className="profile_pic">
              <img src={user.picture} alt="" />
            </div>

            <div className="profile_text">
              <span>{user.first_name}</span>
              <span>{user.email}</span>
            </div>
          </Link>

          <div className="menu">
            <Link to="/profile/cars" className="menu_item">
              Cars
            </Link>
            <Link to="/profile/history" className="menu_item">
              Service History
            </Link>
            <Link to="/profile/settings" className="menu_item">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
